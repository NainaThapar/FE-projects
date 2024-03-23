import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useResInfo from "../utils/useResInfo";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";


const RestaurantMenu = () => {
    const { resId } = useParams();

    const resInfo = useResInfo(resId);
    const[showIndex, setShowIndex] = useState(0);
    console.log(resInfo);

    if(resInfo === null) return <Shimmer />

    const {name, avgRating, cuisines, city, costForTwoMessage} = resInfo?.cards[2]?.card?.card?.info;
    // const { itemCards } = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[5]?.card?.card;
    const items = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(c => c?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
    console.log('cc',items);
    return (
        <div className="text-center">
            <h1 className="text-2xl text-orange-600 font-bold">{ name }</h1>
            <h3 className="text-lg">{ city} </h3>
            <h3 className="text-lg">{cuisines.join(', ')} - {costForTwoMessage}</h3>
            <h4 className="text-lg">{avgRating} stars</h4>
            {items.map((item, index) => (
                <RestaurantCategory data={item?.card?.card} key={item?.card?.card?.title} showItem={index === showIndex ? true: false} setShowIndex={() => {
                    showIndex === index ? setShowIndex(null) : setShowIndex(index)
                }}/>
            ))
            }
        </div>
    )
}

export default RestaurantMenu;