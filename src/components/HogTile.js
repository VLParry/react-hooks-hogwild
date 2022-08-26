import { useState } from "react"


function HogTile({ hog }) {
const [isShowingDetails, setIsShowingDetails] = useState(false)

function handleToggleDetails() {
    setIsShowingDetails(!isShowingDetails)
}

    return (
        <div onClick={handleToggleDetails}>
            <h2>{hog.name}</h2>
            <img src={hog.image} alt={hog.name}/>
            {isShowingDetails ? (
            <div>
                <p>specialty: {hog.specialty}</p>
                <p>greased: {hog.greased ? "yup" : "nah"}</p>
                <p>weight: {hog.weight}</p>
                <p>medal: {hog["highest medal achieved"]}</p>
            </div>
            ) : null}
        </div>
    )
}

export default  HogTile