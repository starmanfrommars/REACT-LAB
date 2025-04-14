import React from 'react'
import BasicFigure from "../components/BasicFigure"
import '../css/FigureList.css'

const FigureList = ({ figures, removeFigure }) => {
    return (
        <div className="figure-list">
            {figures.map((figure)=> (
                <BasicFigure 
                    key={figure.id}
                    url={figure.url}
                    caption={figure.caption}
                    removeFigure={()=> removeFigure(figure.id)}
                />
            ))}
        </div>
    )
}

export default FigureList
