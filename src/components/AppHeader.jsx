import { useState } from "react"
import { useGlobalContext } from "../contexts/GlobalContext"

function AppHeader() {
    // State Variables
    const [searchValue, setSearchValue] = useState("");
    // GlobalContext Variables
    const { getItems } = useGlobalContext();

    //FUNCTIONS
    const handleKeyUp = (event) => event.key === "Enter" && getItems(searchValue);

    return (
        <header>
            <nav>
                <div className="d-flex">
                    <h2>BOOLFLIX</h2>
                    <input type="search"
                        value={searchValue}
                        onChange={(event) => { setSearchValue(event.target.value) }}
                        onKeyUp={handleKeyUp}
                    />
                    <button onClick={() => { getItems(searchValue) }}>Search</button>
                </div>
            </nav>
        </header>
    )
}

export default AppHeader