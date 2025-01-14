import { useContext } from "react";
import GlobalContext from "../contexts/GlobalContext";
// Components
import AppCard from "./AppCard";

function ItemsList() {
    // GlobalContext Variables
    const { moviesList, tvList } = useContext(GlobalContext);

    return (
        <>
            {/* Movies */}
            <h2>Movies</h2>
            <div className="row">
                {moviesList.map((curMovie =>
                    <AppCard key={curMovie.id}
                        title={curMovie.title}
                        originalTitle={curMovie.original_title}
                        language={curMovie.original_language}
                        vote={curMovie.vote_average}
                    />))}
            </div>

            {/* Tv Shows */}
            <h2>TV Shows</h2>
            <div className="row">
                {tvList.map((curTv =>
                    <AppCard key={curTv.id}
                        title={curTv.name}
                        originalTitle={curTv.original_name}
                        language={curTv.original_language}
                        vote={curTv.vote_average}
                    />))}
            </div>
        </>
    )
}

export default ItemsList