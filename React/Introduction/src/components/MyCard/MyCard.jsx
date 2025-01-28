import "./MyCard.css"

function MyCard({content}){

    return (
        <div className="MyCard">
            <span>{content}</span>
        </div>
    )
}

export default MyCard