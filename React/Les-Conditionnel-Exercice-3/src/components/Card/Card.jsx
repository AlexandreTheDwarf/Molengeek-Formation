import "./Card.scss"

function Card({Magic}) {
  return (
    <div className="Card">
        <div className="CardHeader"><span>{Magic.name}</span></div>
        <div className="CardBody">
            <div className="CardBodyTop"><img src={"./public/" + Magic.image} alt="" /></div>
            <div className="CardBodyCenter">créature légendaire : {Magic.type}</div>
            <div className="CardBodyFooter"><span>{Magic.stats}</span></div>
        </div>
    </div>
  )
}

export default Card