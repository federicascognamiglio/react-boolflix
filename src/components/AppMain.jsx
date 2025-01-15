import { useGlobalContext } from "../contexts/GlobalContext";
// Components
import ItemsList from "./ItemsList";

function AppMain() {
    // GlobalContext Variables
    const { moviesList, tvList } = useGlobalContext();

    return (
        <main>
            <section>
                <ItemsList
                    items={moviesList}
                    title="MOVIES"
                />
                <ItemsList
                    items={tvList}
                    title="TV SHOWS"
                />
            </section>
        </main>
    )
}

export default AppMain