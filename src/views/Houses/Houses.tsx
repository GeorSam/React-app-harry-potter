import { Box, Container, Grid2, Pagination } from "@mui/material";
import { useEffect, useState } from "react";
import getHouses from "../../httpRequests/getHouses";
import { PaginationNumberCalculation } from "../../Utils/PaginationNumberCalculation";
import { HousesObj } from "../../Utils/Types/Types";
import House from "../../widgets/HouseList/HouseList";
import { useTranslation } from "react-i18next";
import { useQuery } from "@tanstack/react-query";
import ErrorPage from "../../widgets/ErrorPage/ErrorPage";
import LoadingPage from "../../widgets/LoadingPage/LoadingPage";

export default function Houses() {
  const [houses, setHouses] = useState<HousesObj[] | null>(null);
  const [houseSubset, setHouseSubset] = useState<HousesObj[] | null>(null);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const housesPerPage: number = 4;
  const paginationNumbers: number = PaginationNumberCalculation(
    houses?.length,
    housesPerPage
  );

  const { i18n } = useTranslation();
  const currentLanguage = i18n.language.split("-")[0];
  //console.log(currentLanguage);

  const { status, data } = useQuery<HousesObj[], Error>({
    queryKey: ["houses", currentLanguage],
    queryFn: async (): Promise<HousesObj[]> => {
      const response = await getHouses(currentLanguage);
      return response.data;
    },
  });

  useEffect(() => {
    if (status === "success") {
      setHouses(data ?? []);
      setHouseSubset((data ?? []).slice(0, housesPerPage));
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
    if (houses) {
      const startIndex = (pageNumber - 1) * housesPerPage;
      const endIndex = startIndex + housesPerPage;
      setHouseSubset(houses.slice(startIndex, endIndex));
    }
  }

  return (
    <Box
      component="main"
      sx={{
        position: "relative",
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
            <House houseSubset={houseSubset}></House>
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
