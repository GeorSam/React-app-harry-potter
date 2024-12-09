import { Box, Container, Grid2, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

export default function LoadingPage() {
  const { t } = useTranslation();

  return (
    <Box>
      <Container>
        <Grid2 container>
          <Grid2 size={12}>
            <Typography
              variant="h3"
              sx={{
                color: "#FFD700",
                fontSize: "5rem",
                fontWeight: "bold",
                lineHeight: 5,
                display: "flex",
                justifyContent: "center",
                alignContent: "center",
                fontFamily: "MyCustomFont",
                letterSpacing: "0.1em",
                textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
              }}
            >
              {t("page_loading")}
            </Typography>
          </Grid2>
        </Grid2>
      </Container>
    </Box>
  );
}
