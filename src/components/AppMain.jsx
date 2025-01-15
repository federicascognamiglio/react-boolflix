import { useGlobalContext } from "../contexts/GlobalContext";
// Components
import ItemsList from "./ItemsList";

function AppMain() {
    // GlobalContext Variables
    const { moviesList, tvList } = useGlobalContext();

    return (
        <div className="wrapper">
            <main className="main">
                <section className="content-section">
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
        </div>
    )
}

export default AppMain