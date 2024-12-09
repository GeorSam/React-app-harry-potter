import { ThemeProvider } from "@mui/material";
import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import theme from "./theme";
import App from "./views/App/App";
import "./i18n";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <Router>
          <Suspense fallback="...is loading">
            <App />
          </Suspense>
        </Router>
      </ThemeProvider>
    </QueryClientProvider>
  </StrictMode>
);
