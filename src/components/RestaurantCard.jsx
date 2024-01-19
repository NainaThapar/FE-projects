import { CDN_URL } from '../utils/constants';

const RestaurantCard = (props) => {
    const { resData } = props;
    const { info } = resData;
    const { name, cuisines, avgRating, sla, cloudinaryImageId} = info;
    // console.log(info)
    return(
        
        <div className="restaurant-card">
            <img className="res-img" alt="res-img" src={CDN_URL + cloudinaryImageId}></img>
            <h3>{ name }</h3>
            <h4>{ cuisines.join(', ') }</h4>
            <h4>{ avgRating } stars</h4>
            <h4>{ sla.slaString }</h4>
        </div>
    )
}

export default RestaurantCard;