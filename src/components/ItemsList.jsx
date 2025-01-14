
function ItemsList({items}) {

    return (
        <ul>
            {items.map((curItem => <li key={curItem.id}>
                <h2>{items === "moviesList" ? curItem.title : curItem.name}</h2>
                <h3>{items === "moviesList" ? curItem.original_title : curItem.original_name}</h3>
                <span>{curItem.original_language}</span>
                <span>{curItem.vote_average}</span>
            </li>))}
        </ul>
    )
}

export default ItemsList