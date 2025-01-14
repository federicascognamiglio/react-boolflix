import { useContext } from "react"
import GlobalContext from "../contexts/GlobalContext"

function AppHeader() {
    // GlobalContext Variables
    const { searchValue, setSearchValue, getItems } = useContext(GlobalContext);

    return (
        <header>
            <nav>
                <div className="d-flex">
                    <h2>BOOLFLIX</h2>
                    <input type="search" value={searchValue} onChange={(event) => { setSearchValue(event.target.value) }} />
                    <button onClick={() => {getItems()}}>Search</button>
                </div>
            </nav>
        </header>
    )
}

export default AppHeader