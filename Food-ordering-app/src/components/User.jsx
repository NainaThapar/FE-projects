const User = ({name, location}) => {
    return (
        <div className="user-card">
            <h1>Name: { name }</h1>
            <h3>Location: { location }</h3>
            <h4>Contact: @naina_thapar</h4>
        </div>
    )
}

export default User;