import { useContext } from "react";
import GlobalContext from "../contexts/GlobalContext";
import AppCard from "./AppCard";


function ItemsList() {
    const { moviesList, tvList } = useContext(GlobalContext);

    return (
        <>
            <h2>Movies</h2>
            <div className="row">
                {moviesList.map((curMovie =>
                    <AppCard key={curMovie.id}
                        title={curMovie.title}
                        originalTitle={curMovie.original_title}
                        language={curMovie.original_language}
                        vote={curMovie.vote_average}
                    />))}
                <h2>TV Shows</h2>
            </div>
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