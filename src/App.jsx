/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import { Header } from "./components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Countries } from "./pages/Countries";
import { Country } from "./pages/Country";
import { useFetch } from "./hooks/useFetch";

function App() {
  let [countrySearch, setCountrySearch] = useState("");
  let [filterRegion, setFilterRegion] = useState("");
  let [isDark, setIsDark] = useState(false);
  let { data, isLoading, error } = useFetch(
    "https://restcountries.com/v3.1/all"
  );
  let [dataCountries, setDataCountries] = useState(data);
  let countriesCode = {};

  useEffect(() => {
    if (data) {
      setDataCountries(data);
      data.forEach((el) => {
        let name = el.name.common;
        let code = el.cca3;
        countriesCode[code] = name;
        sessionStorage.setItem("codes", JSON.stringify(countriesCode));
      });
      console.log(countriesCode);
    }
  }, [data]);

  useEffect(() => {
    if (data == null) return;

    let dataTemp = [...data].filter((el) => {
      let name = el.name.common.toLowerCase();
      return name.includes(countrySearch);
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
    "--bg-color-input": isDark ? "hsl(209, 23%, 22%)" : "hsl(0, 0%, 52%)",
    "--text-color": isDark ? "hsl(0, 0%, 100%)" : "hsl(200, 15%, 8%)",
    "--icon-bg": isDark ? "brightness(0) invert(1)" : "brightness(100%)",
  };

  let countries = (
    <Countries
      setValue={setCountrySearch}
      setRegion={setFilterRegion} 
      data={{dataCountries, isLoading, error}}
    />
  );
  let country = <Country />;

  return (
    <main className="main" style={theme}>
      <BrowserRouter>
        <Header theme={isDark} setTheme={setIsDark} />
        <Routes>
          <Route path="/" element={countries}></Route>
          <Route path="/:country" element={country}></Route>
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;
