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
        <header className="header">
            <nav className="d-flex justify-between align-center">
                <h2 className="nav-brand">BOOLFLIX</h2>
                <div>
                    <input type="search"
                        placeholder="Search..."
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