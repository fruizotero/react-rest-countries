/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { createContext, useState, useEffect } from "react";
import { useFetch } from "../hooks/useFetch";
import { codes } from "../helpers/codesCountries";

const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
  let [stringSearch, setStringSearch] = useState("");
  let [isSearch, setIsSearch] = useState(null);
  let [codesCountries, setCodesCountries] = useState(null);
  let { data, isLoading, error } = useFetch(
    "https://restcountries.com/v3.1/all"
  );
  let [dataCountries, setDataCountries] = useState(data);

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
      setCodesCountries(codes(data));
    }
  }, [data]);

  useEffect(() => {
    if (data == null) return;

    if (isSearch) {
      let dataTemp = [...data].filter((el) => {
        let name = el.name.common.toLowerCase();
        return name.includes(stringSearch.toLowerCase());
      });

      setDataCountries(dataTemp);
    } else {
      let dataTemp = [...data].filter((el) => {
        let region = el.region.toLowerCase();

        return region == stringSearch;
      });

      setDataCountries(dataTemp);

      if (stringSearch == "") setDataCountries(data);
    }
  }, [stringSearch]);

  const values = {
    setIsSearch,
    setStringSearch,
    codesCountries,
    data: {
      dataCountries,
      isLoading,
      error,
    },
  };
  return (
    <SearchContext.Provider value={values}>{children}</SearchContext.Provider>
  );
};

export default SearchContext;
