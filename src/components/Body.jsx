import RestaurantCard, { featuredResCard } from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
    const [searchText, setSearchText] = useState([]);
    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    const [filteredRes, setFilteredRes] = useState([]);

    const isOnline = useOnlineStatus();

    const RestaurantCardFeatured = featuredResCard(RestaurantCard);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();

        // console.log(json);
        setListOfRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRes(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }

    if(!isOnline) return <h1>You seem to be offline! Please check your internet connection.</h1>

    return listOfRestaurants.length === 0 ? <Shimmer /> : (
        <div className="body">
            <div className="flex">
                <div className="p-4">
                    <input type= "text" data-testid="searchInput" className="border" value={searchText} onChange={(e) => {
                        setSearchText(e.target.value);
                    }} />
                    <button className="border border-lime-500 rounded-md px-4 mx-2 cursor-pointer" onClick={() => {
                        console.log(searchText);
                        const filRes = listOfRestaurants.filter((res) => (res.info.name.toLowerCase().includes(searchText.toLowerCase())));
                        setFilteredRes(filRes);
                    }}>Search</button>
                </div>
                <div className="p-4">
                <button className="border border-lime-500 rounded-md px-4 cursor-pointer" onClick={() => {
                    const filteredList = listOfRestaurants.filter((res) => res.info.avgRating > 4.3);
                    setListOfRestaurants(filteredList);
                }}>Top Rated Restaurants</button>
                </div>
                
            </div>
            <div className="flex flex-wrap">
                {filteredRes.map((restaurant) => (
                        <Link to={"/restaurants/"+restaurant.info.id} key={ restaurant.info.id }>
                            {restaurant.info.avgRating > 4.5 ? (
                                <RestaurantCardFeatured resData={restaurant} ></RestaurantCardFeatured>
                            ): (
                                <RestaurantCard resData={restaurant} />
                            )}</Link>
                    ))}
                
            </div>
        </div>
    )
}

export default Body;