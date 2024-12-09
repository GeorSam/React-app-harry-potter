import {
  Box,
  Card,
  // CardActionArea,
  CardContent,
  CardMedia,
  Container,
  Grid2,
  styled,
  Typography,
} from "@mui/material";
import { CharactersObj } from "../../Utils/Types/Types";

const StyledCardMedia = styled(CardMedia)({
  position: "absolute",
  width: "100%",
  height: "100%",
  top: 0,
  left: 0,
  zIndex: 0,
  backgroundPosition: "absolute",
});

const StyledCard = styled(Card)({
  borderRadius: "1rem",
  boxShadow: "none",
  position: "relative",
  width: 500,
  height: 500,
});

function CharacterList({
  characterSubset,
}: Readonly<{
  characterSubset: CharactersObj[] | null;
}>) {
  return (
    <Box>
      <Container sx={{ padding: "2rem" }}>
        <Grid2 container spacing={2}>
          {characterSubset?.map((char) => (
            <Grid2
              key={char.index}
              size={6}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignContent: "center",
                mb: "2rem",
              }}
            >
              <StyledCard>
                <StyledCardMedia image="/src/assets/images/hp.jpg" />
                <CardContent
                  sx={{
                    position: "absolute",
                    zIndex: 2,
                    bottom: 0,
                    width: "100%",
                  }}
                >
                  <Typography
                    sx={{
                      color: "white",
                      fontSize: "1.3rem",
                      fontWeight: "bold" as const,
                      lineHeight: 1.2,
                    }}
                  >
                    {char.fullName}
                  </Typography>
                  <Typography
                    sx={{
                      color: "white",
                      lineHeight: 1.5,
                    }}
                  >
                    {char.nickname}
                  </Typography>
                </CardContent>
              </StyledCard>
            </Grid2>
          ))}
        </Grid2>
      </Container>
    </Box>
  );
}

export default CharacterList;
