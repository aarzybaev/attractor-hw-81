import AppToolbar from "./components/UI/AppToolbar/AppToolbar.tsx";
import {Container, Typography} from "@mui/material";
import {Route, Routes} from "react-router-dom";
import LinkShorter from "./features/LinkShorter/LinkShorter.tsx";

function App() {
  return (
      <>
        <header>
          <AppToolbar/>
        </header>
        <main>
          <Container maxWidth="xl">
            <Routes>
              <Route path="/" element={<LinkShorter />} />
              <Route path="*" element={<Typography variant="h1">Not found!</Typography>} />
            </Routes>
          </Container>
        </main>
      </>
  );
}

export default App;
