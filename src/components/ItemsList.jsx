// Components
import AppCard from "./AppCard";

function ItemsList({ items, title }) {

    return (
        <>
            <h2 className="section-title">{title}</h2>
            <div className="row">
                {items.map((curItem =>
                    <AppCard
                        key={curItem.id}
                        item={curItem}
                    />))}
            </div>
        </>
    )
}

export default ItemsList