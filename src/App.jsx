/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import { Header } from "./components/Header";
import { BrowserRouter, Routes, Route, HashRouter } from "react-router-dom";
import { Countries } from "./pages/Countries";
import { Country } from "./pages/Country";
import { useFetch } from "./hooks/useFetch";
import { codes } from "./helpers/codesCountries";

function App() {
  let [countrySearch, setCountrySearch] = useState("");
  let [codesCountries, setCodesCountries] = useState(null);
  let [filterRegion, setFilterRegion] = useState("");
  let [isDark, setIsDark] = useState(false);
  let { data, isLoading, error } = useFetch(
    "https://restcountries.com/v3.1/all"
  );
  let [dataCountries, setDataCountries] = useState(data);
  // let countriesCode = {};

  useEffect(() => {
    if (data) {
      let tempData = data.sort((a, b) => {
        if (a.name.common > b.name.common) {
          return 1; // retorna 1 si quieres orden descendente
        } else if (a.name.common < b.name.common) {
          return -1; // retorna -1 si quieres orden descendente
        } else {
          return 0;
        }
      });

      setDataCountries(tempData);
      // sessionStorage.setItem("codes", JSON.stringify(codes(data)));
      setCodesCountries(codes(data));
    }
  }, [data]);

  useEffect(() => {
    if (data == null) return;

    let dataTemp = [...data].filter((el) => {
      let name = el.name.common.toLowerCase();
      return name.includes(countrySearch.toLowerCase());
    });

    setDataCountries(dataTemp);

    if (countrySearch == "") setDataCountries(data);
  }, [countrySearch]);

  useEffect(() => {
    if (data == null) return;
    let dataTemp = [...data].filter((el) => {
      let region = el.region.toLowerCase();

      return region == filterRegion;
    });

    setDataCountries(dataTemp);

    if (filterRegion == "") setDataCountries(data);
  }, [filterRegion]);

  let theme = {
    "--bg-color": isDark ? "hsl(207, 26%, 17%)" : "hsl(0, 0%, 98%)",
    "--bg-color-element": isDark ? "hsl(209, 23%, 22%)" : "hsl(0, 0%, 100%)",
    "--text-color-input": isDark ? "hsl(0, 0%, 100%)" : "hsl(0, 0%, 52%)",
    "--text-color": isDark ? "hsl(0, 0%, 100%)" : "hsl(200, 15%, 8%)",
    "--icon-bg": isDark ? "brightness(0) invert(1)" : "brightness(100%)",
  };

  let countries = (
    <Countries
      setValue={setCountrySearch}
      setRegion={setFilterRegion}
      data={{ dataCountries, isLoading, error }}
    />
  );
  let country = <Country codes={codesCountries} />;

  return (
    <main className="main" style={theme}>
      <HashRouter>
        <Header theme={isDark} setTheme={setIsDark} />
        <Routes>
          <Route path="/" element={countries}></Route>
          <Route path="/country/:country" element={country}></Route>
          <Route path="*" element={countries} />
        </Routes>
      </HashRouter>
      {/* <BrowserRouter>
      </BrowserRouter> */}
    </main>
  );
}

export default App;
