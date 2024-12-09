import { Box, Container, Grid2, Pagination } from "@mui/material";
import { useEffect, useState } from "react";
import getBooks from "../../httpRequests/getBooks";
import { PaginationNumberCalculation } from "../../Utils/PaginationNumberCalculation";
import { BooksObj } from "../../Utils/Types/Types";
import BookList from "../../widgets/BookList/BookList";
import { useTranslation } from "react-i18next";
import { useQuery } from "@tanstack/react-query";
import LoadingPage from "../../widgets/LoadingPage/LoadingPage";
import ErrorPage from "../../widgets/ErrorPage/ErrorPage";

function Books() {
  const [books, setBooks] = useState<BooksObj[] | null>(null);
  const [bookSubset, setBookSubset] = useState<BooksObj[] | null>(null);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const booksPerPage: number = 4;
  const paginationNumbers: number = PaginationNumberCalculation(
    books?.length,
    booksPerPage
  );

  const { i18n } = useTranslation();
  const currentLanguage = i18n.language.split("-")[0];

  const { status, data } = useQuery<BooksObj[], Error>({
    queryKey: ["books", currentLanguage],
    queryFn: async (): Promise<BooksObj[]> => {
      const response = await getBooks(currentLanguage);
      return response.data;
    },
  });

  useEffect(() => {
    if (status === "success") {
      setBooks(data ?? []); // Default to an empty array if `data` is undefined
      setBookSubset((data ?? []).slice(0, booksPerPage)); // Initial subset for the first page
    }
  }, [status, data, currentLanguage]);

  if (status === "pending") {
    return <LoadingPage />;
  }

  if (status === "error") {
    return <ErrorPage />;
  }

  function handlePagination(
    event: React.ChangeEvent<unknown>,
    pageNumber: number
  ) {
    event.preventDefault();
    setCurrentPage(pageNumber);
    console.log(currentPage);
    if (books) {
      const startIndex = (pageNumber - 1) * booksPerPage;
      const endIndex = startIndex + booksPerPage;
      setBookSubset(books.slice(startIndex, endIndex));
    }
  }

  return (
    <Box
      component="main"
      sx={{
        minHeight: "100vh",
      }}
    >
      <Container
        sx={{
          padding: "2rem",
        }}
      >
        <Grid2 container spacing={2}>
          <Grid2 size={12}>
            <BookList bookSubset={bookSubset} />
          </Grid2>
          <Grid2
            size={12}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignContent: "center",
              mb: "2rem",
            }}
          >
            <Pagination
              count={paginationNumbers}
              page={currentPage}
              onChange={handlePagination}
              color="primary"
            />
          </Grid2>
        </Grid2>
      </Container>
    </Box>
  );
}

export default Books;
