import React from 'react'
import Header from '../components/Lab2/Header'
import Footer from '../components/Lab2/Footer'
import '../css/Lab2.css'

const App = () => {
  return (
    <div className="app-container">
      <Header title="Welcome to my react app" />
      <main className="content">
        <p>This is the main content of the app.Create React App (CRA) is a tool that helps developers quickly start a React project</p>
      </main>
      <Footer copyright="CSD@CEC" tagline="React Lab" />
    </div>
  )
}

export default App