import { CDN_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const ItemList = ({ items }) => {
    const dispatch = useDispatch();

    const handleAddItem = (item) => {
        dispatch(addItem(item));
    }

    return <div>
        {items.map((item) => (
                    <div key={item?.card?.info?.id} className="text-left px-4 py-2 flex">
                        <div className="absolute"><button className="border-slate-800 font-medium text-gray-50 bg-slate-800 p-2 rounded-lg mx-12"
                        onClick={() => handleAddItem(item)}>Add +</button></div>
                        <div className="w-2/12"><img src={CDN_URL+item?.card?.info?.imageId}></img>
                       
                        </div>

                        <div className="w-10/12 m-4">
                        <div className="font-bold">{item?.card?.info?.name} <span className="m-8">${item?.card?.info?.defaultPrice ? item?.card?.info?.defaultPrice/100 : item?.card?.info?.price/100}</span></div>
                        <p className="text-xs">{item?.card?.info?.description}</p>
                        </div>

                        </div>
                ))}
    </div>
}

export default ItemList;