import "./CardExo1.scss"

function CardExo1({Image, FullName, Age, Town, NbrFollowers, NbrLikes, NbrPhotos}){

    return (
        <div className="CardExo1">
            <div className="CardHeader">
                <img src={"./src/assets/ImgCardExo1/" + Image + ".jpg"} alt="" />
            </div>
            <div className="CardBody">
                <h2>{FullName}<span> {Age}</span></h2>
                <p>{Town}</p>
            </div>
            <div className="CardFooter">
                <div>
                    <h2>{NbrFollowers + "K"}</h2>
                    <p>Followers</p>
                </div>
                <div>
                    <h2>{NbrLikes + "K"}</h2>
                    <p>Likes</p>
                </div>
                <div>
                    <h2>{NbrPhotos + "K"}</h2>
                    <p>Photos</p>
                </div>
            </div>
        </div>
    )
}

export default CardExo1