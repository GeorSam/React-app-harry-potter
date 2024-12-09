import { Box, Container, Grid2, Pagination } from "@mui/material";
import { useEffect, useState } from "react";
import getSpells from "../../httpRequests/getSpells";
import { PaginationNumberCalculation } from "../../Utils/PaginationNumberCalculation";
import { SpellsObj } from "../../Utils/Types/Types";
import SpellList from "../../widgets/SpellList/SpellList";
import { useTranslation } from "react-i18next";
import { useQuery } from "@tanstack/react-query";
import ErrorPage from "../../widgets/ErrorPage/ErrorPage";
import LoadingPage from "../../widgets/LoadingPage/LoadingPage";

function Spells() {
  const [spells, setSpells] = useState<SpellsObj[] | null>(null);
  const [spellSubset, setSpellSubset] = useState<SpellsObj[] | null>(null);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const spellsPerPage: number = 12;
  const paginationNumbers: number = PaginationNumberCalculation(
    spells?.length,
    spellsPerPage
  );

  const { i18n } = useTranslation();
  const currentLanguage = i18n.language.split("-")[0];

  const { status, data } = useQuery<SpellsObj[], Error>({
    queryKey: ["spells", currentLanguage],
    queryFn: async (): Promise<SpellsObj[]> => {
      const response = await getSpells(currentLanguage);
      return response.data;
    },
  });

  useEffect(() => {
    if (status === "success") {
      setSpells(data ?? []); // Default to an empty array if `data` is undefined
      setSpellSubset((data ?? []).slice(0, spellsPerPage)); // Initial subset for the first page
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
    if (spells) {
      const startIndex = (pageNumber - 1) * spellsPerPage;
      const endIndex = startIndex + spellsPerPage;
      setSpellSubset(spells.slice(startIndex, endIndex));
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
            <SpellList spellSubset={spellSubset} />
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
export default Spells;
