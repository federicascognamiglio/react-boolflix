import { useContext } from "react"
import GlobalContext from "../contexts/GlobalContext"

function AppHeader({search, setSearch}) {
    // GlobalContext Variables
    const { getItems } = useContext(GlobalContext);

    return (
        <header>
            <nav>
                <div className="d-flex">
                    <h2>BOOLFLIX</h2>
                    <input type="search" value={search} onChange={(event) => { setSearch(event.target.value) }} />
                    <button onClick={() => {getItems()}}>Search</button>
                </div>
            </nav>
        </header>
    )
}

export default AppHeader