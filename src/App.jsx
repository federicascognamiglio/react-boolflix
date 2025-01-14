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
   * API Call to get a list of movies and Tv Shows
   * @param {string} item1 // list of movies
   * @param {string} item2 // list of tv shows
   */
  const getData = (item1, item2) => {
    axios.get(`${baseApiUrl}${item1}`, {
      params: {
        api_key,
        query: searchValue
      }
    })
      .then((resp) => {
        setMoviesList(resp.data.results)
      })
    axios.get(`${baseApiUrl}${item2}`, {
      params: {
        api_key,
        query: searchValue
      }
    })
      .then((resp) => {
        setTvList(resp.data.results)
      })
  }

  /** API Call to get two lists of items */
  const getItems = () => {
    getData("movie", "tv");
  }

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
