import User from "./User";
import UserClass from "./UserClass";

const About = () => {
    return(
        <div>
            <h1>About Page</h1>
            <h2>This is the about page of a Food Delivery App.</h2>
            {/* <User name={ "Naina Thapar (function)"} location={ "Canada" }/> */}
            <UserClass name={"Naina Thapar (class)"} location={"Canada"}/>
        </div>
    )
}

export default About;