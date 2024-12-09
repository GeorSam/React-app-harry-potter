import styled from "@emotion/styled";
import {
  CardMedia,
  Card,
  Box,
  Container,
  Grid2,
  CardContent,
  Typography,
} from "@mui/material";
import { HousesObj } from "../../Utils/Types/Types.ts";
import "../../index.css";

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
  "&:hover": {
    transform: "scale(1.1)",
  },
});

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

const imageUrls = [
  {
    index: 1,
    url: "/src/assets/images/gryffindor.jpg",
  },
  {
    index: 2,
    url: "/src/assets/images/hufflepuff.jpg",
  },
  {
    index: 3,
    url: "/src/assets/images/ravenclaw.jpg",
  },
  {
    index: 4,
    url: "/src/assets/images/slytherin.jpg",
  },
];

function HouseList({
  houseSubset,
}: Readonly<{ houseSubset: HousesObj[] | null }>) {
  return (
    <Box>
      <Container sx={{ padding: "2rem" }}>
        <Grid2 container spacing={2}>
          {houseSubset?.map((house) => (
            <Grid2
              key={house.index}
              size={6}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignContent: "center",
                mb: "2rem",
              }}
            >
              <StyledCard>
                <StyledCardMedia image={imageUrls[house.index].url} />
                <CardContent
                  sx={{
                    position: "absolute",
                    zIndex: 2,
                    bottom: 0,
                    width: "100%",
                  }}
                >
                  <StyledTypography>{house.house}</StyledTypography>
                </CardContent>
              </StyledCard>
            </Grid2>
          ))}
        </Grid2>
      </Container>
    </Box>
  );
}

export default HouseList;
