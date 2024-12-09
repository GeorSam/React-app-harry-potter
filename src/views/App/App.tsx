import { Box } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import RootLayout from "../../widgets/RootLayout/RootLayout";
import Books from "../Books/Books";
import Characters from "../Characters/Characters";
import Home from "../Home/Home";
import Houses from "../Houses/Houses";
import Spells from "../Spells/Spells";
import PageNotFound from "../../widgets/PageNotFound/PageNotFound";
import ContactUs from "../ContactUs/ContactUs";

function App() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: "linear-gradient(150deg,#292932, #008598)",
      }}
    >
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<Home />} />
          <Route path="/books" element={<Books />} />
          <Route path="/characters" element={<Characters />} />
          <Route path="/spells" element={<Spells />} />
          <Route path="/houses" element={<Houses />} />
          <Route path="/contact" element={<ContactUs />} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Box>
  );
}

export default App;
