/* eslint-disable no-unused-vars */
import { Header } from "./components/Header";
import { Routes, Route, HashRouter } from "react-router-dom";
import { Countries } from "./pages/Countries";
import { Country } from "./pages/Country";
import { Main } from "./components/Main";
import { ThemeProvider } from "./context/ThemeContext";
import { useDispatch } from "react-redux";
import { fetchData } from "./redux/features/filterSlice";
import { useEffect } from "react";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData("https://restcountries.com/v3.1/all"));
  }, []);
  return (
    <ThemeProvider>
      <Main>
        <HashRouter>
          <Header />
            <Routes>
              <Route path="/" element={<Countries />}></Route>
              <Route path="/country/:country" element={<Country />}></Route>
              <Route path="*" element={<Countries />} />
            </Routes>
        </HashRouter>
        {/* <BrowserRouter>
      </BrowserRouter> */}
      </Main>
    </ThemeProvider>
  );
}

export default App;
