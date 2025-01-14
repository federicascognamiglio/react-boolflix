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

  /** API Call to get a list of movies */
  const getMovies = () => {
    axios.get(`${baseApiUrl}movie`, {
      params: {
        api_key,
        query: searchValue
      }
    })
      .then((resp) => {
        setMoviesList(resp.data.results)
      })
  };

  /** API Call to get a list of Tv Shows */
  const getTvShows = () => {
    axios.get(`${baseApiUrl}tv`, {
      params: {
        api_key,
        query: searchValue
      }
    })
      .then((resp) => {
        setTvList(resp.data.results)
      })
  }

  const getItems = () => {
    getMovies()
    getTvShows()
  }

  const GlobalProviderValue = {
    searchValue,
    setSearchValue,
    getItems,
    moviesList,
    tvList
  };

  return (
    <>
      <GlobalContext.Provider value={GlobalProviderValue}>
        <AppHeader />
        <AppMain />
      </GlobalContext.Provider>
    </>
  )
}

export default App
