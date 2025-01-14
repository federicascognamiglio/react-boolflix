import { useState } from "react";
import GlobalContext from "./contexts/GlobalContext";
import axios from "axios";
// Components
import AppHeader from "./components/AppHeader";
import AppMain from "./components/AppMain";

function App() {
  // STATE VARIABLES
  const [searchValue, setSearchValue] = useState("Ciao");
  const [moviesList, setMoviesList] = useState([]);
  const [tvList, setTvList] = useState([]);
  //API VARIABLES
  const baseApiUrl = "https://api.themoviedb.org/3/search/";
  const api_key = "a9f909803b45afc5e7af99d2cdc61535";

  // FUNCTIONS
  /**
   * API Call to get a list items
   * @param {string} items // items to get
   */
  const getData = (items) => {
    axios.get(`${baseApiUrl}${items}`, {
      params: {
        api_key,
        query: searchValue
      }
    })
      .then((resp) => {
        items === "movie" ? setMoviesList(resp.data.results) : setTvList(resp.data.results)
      })
  }

  /** API Call to get two lists of items */
  const getItems = () => {
    getData("movie");
    getData("tv")
  }

  // Provider Value
  const GlobalProviderValue = {
    getItems,
    moviesList,
    tvList
  };

  return (
    <>
      <GlobalContext.Provider value={GlobalProviderValue}>
        <AppHeader
          search={searchValue}
          setSearch={setSearchValue}
        />
        <AppMain />
      </GlobalContext.Provider>
    </>
  )
}

export default App
