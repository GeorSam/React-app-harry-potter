import {
  Box,
  Button,
  Container,
  Grid2,
  styled,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import "../../index.css";
import { useTranslation } from "react-i18next";

export default function Home() {
  const { t } = useTranslation();

  const pageShortcuts = [
    {
      title: t("title_books"),
      subtitle: t("subtitle_books"),
      url: "/books",
    },
    {
      title: t("title_spells"),
      subtitle: t("subtitle_spells"),
      url: "/spells",
    },
    {
      title: t("title_characters"),
      subtitle: t("subtitle_characters"),
      url: "/characters",
    },
    {
      title: t("title_houses"),
      subtitle: t("subtitle_houses"),
      url: "/houses",
    },
  ];

  const StyledTypography = styled(Typography)({
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
  });

  const navigate = useNavigate();

  return (
    <Box
      component="main"
      sx={{
        width: "100vw",
        height: "100%",
      }}
    >
      <Container sx={{ padding: "2rem" }}>
        <Grid2 container spacing={3}>
          <Grid2
            size={12}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignContent: "center",
              mb: "2rem",
            }}
          >
            <StyledTypography variant="h1">{t("welcome")}</StyledTypography>
          </Grid2>
          {pageShortcuts.map((shortcut) => (
            <Grid2
              key={shortcut.title}
              size={3}
              sx={{
                borderRadius: "5px",
                padding: "1rem",
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
                backgroundColor: "white",
                boxShadow: "0 6px 20px 0 #dbdbe8",
              }}
            >
              <Typography
                variant="h3"
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  fontFamily: "MyCustomFont",
                  letterSpacing: ".3rem",
                }}
              >
                {shortcut.title}
              </Typography>
              <Typography variant="body1">{shortcut.subtitle}</Typography>
              <Button
                variant="outlined"
                onClick={() => navigate(`${shortcut.url}`)}
                sx={{
                  "&:hover": {
                    backgroundColor: "#008598",
                    color: "white",
                  },
                }}
              >
                {t("check")}
              </Button>
            </Grid2>
          ))}
        </Grid2>
      </Container>
    </Box>
  );
}
