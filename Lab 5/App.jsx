import React, { useState } from 'react'
import FigureList from "./components/FigureList"
import './App.css'

const App = () => {
    const [figures, setFigures] = useState([
        {id: 1, url: "/react.jpg", caption: "React"}, 
        {id: 2, url: "/mongodb.png", caption: "Mongo DB"},
        {id: 3, url: "/node.png", caption: "Node JS"},
    ])

    const addFigure = ()=> {
        const newFigure = { id: Date.now(), url: "./react.jpg", caption: "New Image"};
        setFigures([...figures, newFigure]);
    }

    const removeFigure = (id)=> {
        setFigures(figures.filter((figure)=> figure.id!==id));
    }

    return (
        <div className="App">
            <h1>Figure Gallery</h1>
            <button onClick={addFigure} className="add-button">Add Figures</button>
            <FigureList figures={figures} removeFigure={removeFigure} /> 
        </div>
    )
}

export default App
