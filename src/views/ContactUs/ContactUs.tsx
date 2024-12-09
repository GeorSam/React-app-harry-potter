import {
  Box,
  Button,
  Container,
  FormControl,
  Grid2,
  MenuItem,
  Select,
  styled,
  TextField,
  Typography,
} from "@mui/material";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const contactUsSchema = z
  .object({
    MyTextFieldFirstName: z.string({ message: "First Name is required" }),
    MyTextFieldLastName: z.string({ message: "Last Name is required" }),
    MyTextFieldEmail: z.string({ message: "Email is required" }),
    MySelectHouses: z.enum([
      "Gryffindor",
      "Hufflepuff",
      "Ravenclaw",
      "Slytherin",
      " ",
    ]),
    MyTextFieldPhoneNumber: z
      .string({ message: "Phone Number is required" })
      .optional(),
    MyTextFieldArea: z.string(),
  })
  .required();

type ContactUsFormValues = z.infer<typeof contactUsSchema>;

const StyledTypography = styled(Typography)({
  color: "#FFD700",
  fontSize: "3rem",
  fontWeight: "bold",
  lineHeight: 3,
  display: "flex",
  justifyContent: "center",
  alignContent: "center",
  fontFamily: "MyCustomFont",
  letterSpacing: "0.1em",
  textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
  padding: "0.1rem",
});

export default function ContactUs() {
  const {
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<ContactUsFormValues>({
    defaultValues: {
      MyTextFieldFirstName: "",
      MyTextFieldLastName: "",
      MyTextFieldEmail: "",
      MySelectHouses: " ",
      MyTextFieldPhoneNumber: "",
      MyTextFieldArea: "",
    },
    resolver: zodResolver(contactUsSchema),
  });

  const onSubmit: SubmitHandler<ContactUsFormValues> = (data) =>
    console.log(data);

  return (
    <Box>
      <Grid2
        sx={{
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
        }}
      >
        <StyledTypography>Send us an Owl!</StyledTypography>
      </Grid2>
      <Container
        sx={{
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
          padding: "0.05rem",
        }}
      >
        <Grid2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Grid2
              container
              spacing={5}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignContent: "center",
              }}
            >
              <Grid2
                size={12}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignContent: "center",
                }}
              >
                <Controller
                  name="MyTextFieldFirstName"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      label="First Name"
                      variant="outlined"
                      error={!!errors.MyTextFieldFirstName}
                      helperText={errors.MyTextFieldFirstName?.message}
                    />
                  )}
                />
              </Grid2>
              <Grid2
                size={12}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignContent: "center",
                }}
              >
                <Controller
                  name="MyTextFieldLastName"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      label="Last Name"
                      variant="outlined"
                      error={!!errors.MyTextFieldLastName}
                      helperText={errors.MyTextFieldLastName?.message}
                    />
                  )}
                />
              </Grid2>
              <Grid2
                size={{ xs: 6, md: 12 }}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignContent: "center",
                }}
              >
                <Controller
                  name="MyTextFieldEmail"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      label="Email"
                      variant="outlined"
                      error={!!errors.MyTextFieldEmail}
                      helperText={errors.MyTextFieldEmail?.message}
                    />
                  )}
                />
              </Grid2>
              <Grid2
                size={{ xs: 6, md: 12 }}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignContent: "center",
                }}
              >
                <FormControl variant="outlined">
                  <Controller
                    name="MySelectHouses"
                    control={control}
                    render={({ field }) => (
                      <Select
                        {...field}
                        value={field.value || " "}
                        label="Houses"
                        variant="outlined"
                        sx={{ backgroundColor: "white", minWidth: "219px" }}
                      >
                        <MenuItem value=" ">None</MenuItem>
                        <MenuItem value="Gryffindor">Gryffindor</MenuItem>
                        <MenuItem value="Hufflepuff">Hufflepuff</MenuItem>
                        <MenuItem value="Ravenclaw">Ravenclaw</MenuItem>
                        <MenuItem value="Slytherin">Slytherin</MenuItem>
                      </Select>
                    )}
                  />
                </FormControl>
              </Grid2>
              <Grid2
                size={{ xs: 6, md: 12 }}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignContent: "center",
                }}
              >
                <Controller
                  name="MyTextFieldPhoneNumber"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      label="Phone Number"
                      variant="outlined"
                      error={!!errors.MyTextFieldPhoneNumber}
                      helperText={errors.MyTextFieldPhoneNumber?.message}
                    />
                  )}
                />
              </Grid2>
              <Grid2
                size={{ xs: 6, md: 12 }}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignContent: "center",
                }}
              >
                <Controller
                  name="MyTextFieldArea"
                  control={control}
                  rules={{ required: false }}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      label="Text Area"
                      variant="outlined"
                      multiline
                      sx={{ minWidth: "219px" }}
                    />
                  )}
                />
              </Grid2>
              <Grid2>
                <Button variant="contained" color="primary" type="submit">
                  Submit
                </Button>
              </Grid2>
              <Grid2>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => {
                    reset({
                      MyTextFieldFirstName: "",
                      MyTextFieldLastName: "",
                      MyTextFieldEmail: "",
                      MySelectHouses: " ",
                      MyTextFieldPhoneNumber: "",
                      MyTextFieldArea: "",
                    });
                  }}
                >
                  Reset
                </Button>
              </Grid2>
            </Grid2>
          </form>
        </Grid2>
      </Container>
    </Box>
  );
}
