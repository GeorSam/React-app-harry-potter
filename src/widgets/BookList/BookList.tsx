import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid2,
  Typography,
} from "@mui/material";
import { BooksObj } from "../../Utils/Types/Types";

function BookList({ bookSubset }: Readonly<{ bookSubset: BooksObj[] | null }>) {
  const imageUrls = [
    {
      index: 1,
      url: "/src/assets/images/b1.jpg",
    },
    {
      index: 2,
      url: "/src/assets/images/b2.jpg",
    },
    {
      index: 3,
      url: "/src/assets/images/b3.jpg",
    },
    {
      index: 4,
      url: "/src/assets/images/b4.jpg",
    },
    {
      index: 5,
      url: "/src/assets/images/b5.jpg",
    },
    {
      index: 6,
      url: "/src/assets/images/b6.jpg",
    },
    {
      index: 7,
      url: "/src/assets/images/b7.jpg",
    },
    {
      index: 8,
      url: "/src/assets/images/b8.jpg",
    },
  ];

  return (
    <Box>
      <Container sx={{ padding: "1rem" }}>
        <Grid2 container spacing={1}>
          {bookSubset?.map((book) => (
            <Grid2
              key={book.index}
              size={6}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignContent: "center",
                mb: "1rem",
              }}
            >
              <Card
                sx={{
                  height: "80%",
                  width: "80%",
                  backgroundColor: "#f5f2eb",
                  border: "2px solid #1976d2",
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 1)",
                  borderRadius: "8px",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <CardMedia
                  component="img"
                  image={imageUrls[book.index].url}
                  sx={{
                    backgroundPosition: "center",
                    height: "60%",
                    width: "100%",
                  }}
                />
                <Container
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignContent: "center",
                    mb: "2rem",
                  }}
                >
                  <CardContent
                    sx={{
                      minHeight: "150px",
                      minWidth: "150px",
                      padding: 2,
                      position: "relative",
                      zIndex: 2,
                      bottom: 0,
                      width: "100%",
                      height: "100%",
                    }}
                  >
                    <Typography gutterBottom variant="h5" component="div">
                      {book.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ color: "text.secondary" }}
                    >
                      {book.description}
                    </Typography>
                  </CardContent>
                </Container>
              </Card>
            </Grid2>
          ))}
        </Grid2>
      </Container>
    </Box>
  );
}

export default BookList;
