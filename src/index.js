import React from "react";
import ReactDom from "react-dom";

import SearchBar from "./components/search_bar";

const API_KEY = "AIzaSyBFwF8wZP87EcdMoNb0Vy8a4nHRy1CmV5Y";

const App = () => {
  return <SearchBar/>;
};

ReactDom.render(<App />, document.querySelector(".container"));
