import React from 'react'
import '../css/BasicFigure.css'

const BasicFigure = ({ url, caption, removeFigure }) => {
    return (
        <div className="basic-figure">
            <img src={url} alt={caption} className="figure-image" />
            <p className="figure-caption">{ caption }</p>
            <button className="remove-button" onClick={removeFigure}>Remove</button>
        </div>
    )
}

export default BasicFigure
