import { useContext, createContext, useState } from "react";
import axios from "axios";

//API VARIABLES
const baseApiUrl = "https://api.themoviedb.org/3/search/";
const api_key = "a9f909803b45afc5e7af99d2cdc61535";

const GlobalContext = createContext();

function GlobalProvider({ children }) {
    // STATE VARIABLES
    const [moviesList, setMoviesList] = useState([]);
    const [tvList, setTvList] = useState([]);

    // FUNCTIONS
    /**
     * API Call to get a list items
     * @param {string} items // items to get
     * @param {string} searchValue // input value for query
     */
    const getData = (items, searchValue) => {
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

    /**
     * API Call to get two lists of items
     * @param {string} searchValue // input value for query
     */
    const getItems = (searchValue) => {
        getData("movie", searchValue)
        getData("tv", searchValue)
    }

    // Provider Value
    const GlobalProviderValue = {
        getItems,
        moviesList,
        tvList
    };

    return <GlobalContext.Provider value={GlobalProviderValue}>{children}</GlobalContext.Provider>
}

function useGlobalContext() {
    return useContext(GlobalContext)
}

export { GlobalProvider, useGlobalContext }