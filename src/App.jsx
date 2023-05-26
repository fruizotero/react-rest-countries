/* eslint-disable no-unused-vars */
import { useState } from "react";
import { Header } from "./components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Countries } from "./pages/Countries";
import { Country } from "./pages/Country";

function App() {
  let [countrySearch, setCountrySearch] = useState("");
  let [filterRegion, setFilterRegion] = useState("");
  let [isDark, setIsDark] = useState(false);

  let theme = {};

  let countries = <Countries />;
  let country = <Country />;

  return (
    <main className="main">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={countries}></Route>
          <Route path="/:name" element={country}></Route>
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;
