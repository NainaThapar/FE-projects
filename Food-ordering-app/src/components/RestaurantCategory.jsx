import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({data, showItem, setShowIndex}) => {
    // const[showItem, setShowItem] = useState(false);
    const handleClick = () => {
        setShowIndex();
    }
    return <div>
        <div className="my-4 mx-auto w-8/12 p-4 rounded-md">
            <div className="flex justify-between font-bold text-lg bg-slate-200 p-4 cursor-pointer" onClick={handleClick}>
            <span>{data.title} ({data.itemCards.length})</span>
            <span>🔽</span>
            </div>
            <div className="shadow-lg">
                {showItem && <ItemList items={data.itemCards}></ItemList>}
            </div>
        </div>
    </div>
}

export default RestaurantCategory;