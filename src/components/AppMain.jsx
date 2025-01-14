import { useContext } from "react";
import ItemsList from "./ItemsList";
import GlobalContext from "../contexts/GlobalContext";

function AppMain() {
    const { moviesList, tvList } = useContext(GlobalContext);

    return (
        <main>
            <h2>Movies</h2>
            <ItemsList 
            items={moviesList}/>
            <h2>TV Shows</h2>
            <ItemsList items={tvList}/>
        </main>
    )
}

export default AppMain