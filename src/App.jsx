/* eslint-disable no-unused-vars */
import { Header } from "./components/Header";
import { Routes, Route, HashRouter } from "react-router-dom";
import { Countries } from "./pages/Countries";
import { Country } from "./pages/Country";
import { Main } from "./components/Main";
import { ThemeProvider } from "./context/ThemeContext";
import { SearchProvider } from "./context/SearchContext";

function App() {
  

  return (
    <ThemeProvider>
      <Main>
        <HashRouter>
          <Header />
          <SearchProvider>
            <Routes>
              <Route path="/" element={<Countries/>}></Route>
              <Route path="/country/:country" element={<Country/>}></Route>
              <Route path="*" element={<Countries/>} />
            </Routes>
          </SearchProvider>
        </HashRouter>
        {/* <BrowserRouter>
      </BrowserRouter> */}
      </Main>
    </ThemeProvider>
  );
}

export default App;
