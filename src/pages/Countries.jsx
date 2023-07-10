/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import CircularProgress from "@mui/material/CircularProgress";

import { CountryCard } from "../components/CountryCard";
import { Search } from "../components/Search";
import { Dropdown } from "../components/DropDown";
import PaginationElements from "../components/Pagination";
import { Message } from "../components/Message";

import "./Countries.css";
import { useSelector } from "react-redux";
import { selectData, selectStatus } from "../redux/features/filterSlice";
import { STATUSREQUEST } from "../redux/features/status";

export function Countries() {

  let data = useSelector(selectData);
  let status = useSelector(selectStatus);
  let error = {
    err: true,
    statusText: "Ocurrió un error",
    status: "",
  };


  function RenderItems({ currentItems }) {
    return (
      <>
        {currentItems &&
          currentItems.map((country, index) => (
            <CountryCard data={country} key={index} />
          ))}
      </>
    );
  }

  return (
    <section className="countries">
      <div className="countries_top">
        <Search />
        <Dropdown />
      </div>
      <div className="countries_main">
        {status == STATUSREQUEST.PENDING ? (
          <div className="container-spinner">
            <CircularProgress />
          </div>
        ) : (
          ""
        )}
        {data && (
          <PaginationElements
            data={data}
            itemsPerPage={8}
            Render={RenderItems}
          />
        )}
        {status == STATUSREQUEST.FAILED && error.err ? (
          <Message message={error.statusText} error={error.status} />
        ) : (
          ""
        )}
      </div>
    </section>
  );
}
