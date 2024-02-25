import { CDN_URL } from '../utils/constants';

const RestaurantCard = (props) => {
    const { resData } = props;
    const { info } = resData;
    const { name, cuisines, avgRating, sla, cloudinaryImageId} = info;
    // console.log(info)
    return(
        
        <div className="p-4 m-4 w-64 border">
            <img alt="res-img" className="w-30 h-30" src={CDN_URL + cloudinaryImageId}></img>
            <h3 className="text-xl text-bold text-slate-500 py-4">{ name }</h3>
            <h4>{ cuisines.join(', ') }</h4>
            <h4>{ avgRating } stars</h4>
            <h4>{ sla.slaString }</h4>
        </div>
    )
}

export const featuredResCard = (RestaurantCard) => {
    return(props) => {
        return(
            <div>
                <label className="absolute bg-slate-800 rounded-md px-4 text-white justify-items-center shadow-xl shadow-zinc-700">Promoted</label>
                <RestaurantCard {...props}/>
            </div>
        )
    }
}

export default RestaurantCard;

