import { useState } from "react";
import GlobalContext from "./contexts/GlobalContext";

function App() {
  // STATE VARIABLES
  const [searchValue, setSearchValue] = useState("Ciao");
  //API VARIABLES
  const baseApiUrl = "https://api.themoviedb.org/3/search/";
  const api_key = "a9f909803b45afc5e7af99d2cdc61535";

  const GlobalProviderValue = {
    baseApiUrl,
    api_key,
    searchValue
  };

  return (
    <>
      <GlobalContext.Provider value={GlobalProviderValue}>
    
      </GlobalContext.Provider>
    </>
  )
}

export default App
