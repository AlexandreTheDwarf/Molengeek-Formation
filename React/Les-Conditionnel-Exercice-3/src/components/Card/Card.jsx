import "./Card.scss"

function Card({Magic}) {
  return (
    <div className="Card">
        <div className="CardHeader"><span>{Magic.name}</span></div>
        <div className="CardBody">
            <div className="CardBodyTop"><img src={"./public/" + Magic.image} alt="" /></div>
            <div className="CardBodyCenter">créature légendaire : {Magic.type}</div>
            <div className="CardBodyFooter">
              {
                Magic.attribut != "" ? <span className="SpanAttribut">{Magic.attribut}</span> : "" 
              }
              {
                Magic.ambiance != "" ? <span className="SpanAmbiance">« {Magic.ambiance} »</span> : "" 
              }
              <span className="SpanStats">{Magic.stats}</span>
            </div>
        </div>
    </div>
  )
}

export default Card