import { Box, Container, Grid2, Pagination } from "@mui/material";
import { useEffect, useState } from "react";
import getCharacters from "../../httpRequests/getCharacters";
import { PaginationNumberCalculation } from "../../Utils/PaginationNumberCalculation";
import { CharactersObj } from "../../Utils/Types/Types";
import Character from "../../widgets/CharacterList/CharacterList";
import { useTranslation } from "react-i18next";
import { useQuery } from "@tanstack/react-query";
import ErrorPage from "../../widgets/ErrorPage/ErrorPage";
import LoadingPage from "../../widgets/LoadingPage/LoadingPage";

export default function Characters() {
  const [characters, setCharacters] = useState<CharactersObj[] | null>(null);
  const [characterSubset, setCharacterSubset] = useState<
    CharactersObj[] | null
  >(null);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const charactersPerPage: number = 8;
  const paginationNumbers: number = PaginationNumberCalculation(
    characters?.length,
    charactersPerPage
  );
  const { i18n } = useTranslation();
  const currentLanguage = i18n.language.split("-")[0];

  const { status, data } = useQuery<CharactersObj[], Error>({
    queryKey: ["characters", currentLanguage],
    queryFn: async (): Promise<CharactersObj[]> => {
      const response = await getCharacters(currentLanguage);
      return response.data;
    },
  });

  useEffect(() => {
    if (status === "success") {
      setCharacters(data ?? []); // Default to an empty array if `data` is undefined
      setCharacterSubset((data ?? []).slice(0, charactersPerPage)); // Initial subset for the first page
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
    if (characters) {
      const startIndex = (pageNumber - 1) * charactersPerPage;
      const endIndex = startIndex + charactersPerPage;
      setCharacterSubset(characters.slice(startIndex, endIndex));
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
            <Character characterSubset={characterSubset} />
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
