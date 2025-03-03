import React from 'react'

const Footer = ({ copyright, tagline }) => {
  return (
    <footer className="footer">
        <p>{ tagline }</p>
        <p> &copy; { copyright } </p>
    </footer>
  )
}

export default Footer