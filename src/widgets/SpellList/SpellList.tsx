import {
  Box,
  Card,
  Container,
  Grid2,
  Slider,
  sliderClasses,
} from "@mui/material";
import { SpellsObj } from "../../Utils/Types/Types";

function SpellList({
  spellSubset,
}: Readonly<{ spellSubset: SpellsObj[] | null }>) {
  return (
    <Box
      sx={{
        height: "100%",
      }}
    >
      <Container sx={{ padding: "2rem" }}>
        <Grid2 container spacing={2}>
          {spellSubset?.map((spell) => (
            <Grid2
              size={4}
              key={spell.index}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignContent: "center",
                mb: "2rem",
              }}
            >
              <Card
                elevation={10}
                sx={{
                  display: "flex",
                  padding: 2,
                  width: 288,
                  borderRadius: "12px",
                  boxShadow: "0 2px 4px 0 rgba(138, 148, 159, 1)",
                  "& > *:nth-child(1)": {
                    marginRight: 2,
                  },
                  "& > *:nth-child(2)": {
                    flex: "auto",
                  },
                }}
              >
                <Box>
                  <Box
                    component="h3"
                    sx={{
                      fontFamily: "sans-serif",
                      fontSize: 16,
                      marginBottom: 0,
                    }}
                  >
                    {spell.spell}
                  </Box>
                  <Box
                    sx={{
                      fontFamily: "sans-serif",
                      fontSize: 14,
                      color: "grey.600",
                      letterSpacing: "1px",
                      marginBottom: "4px",
                    }}
                  >
                    {spell.use}
                  </Box>
                  <Box display={"flex"} alignItems={"center"}>
                    <Slider
                      disabled={true}
                      defaultValue={30}
                      sx={{
                        height: 4,
                        [`& .${sliderClasses.rail}`]: {
                          borderRadius: "10px",
                          height: 4,
                          backgroundColor: "rgb(202,211,216)",
                        },
                        [`& .${sliderClasses.track}`]: {
                          borderRadius: "10px",
                          height: 4,
                          backgroundColor: "rgb(117,156,250)",
                          border: "none",
                        },
                        [`& .${sliderClasses.thumb}`]: {
                          display: "none",
                        },
                      }}
                    />
                    <Box
                      component="span"
                      sx={{
                        marginLeft: 1,
                        fontSize: 14,
                        color: "grey.500",
                      }}
                    >
                      {spell.index}
                    </Box>
                  </Box>
                </Box>
              </Card>
            </Grid2>
          ))}
        </Grid2>
      </Container>
    </Box>

    // <div>
    //   {spellSubset?.map((spell) => (
    //     <div key={spell.index}>
    //       <h3>{spell.spell}</h3>
    //       <p>{spell.use}</p>
    //     </div>
    //   ))}
    // </div>
  );
}
export default SpellList;
