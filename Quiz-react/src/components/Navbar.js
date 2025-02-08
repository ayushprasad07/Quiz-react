import React from 'react'
import image from './favicon-96x96.png'

export default function Navbar() {
  return (
    <div>
        <nav className="navbar bg-body-tertiary fixed-top">
          <div className="container-fluid">
            <a className="navbar-brand" href="/">
              <img src={image} alt="Logo" width="30" height="24" className="d-inline-block align-text-top"/>
              Quizilla
            </a>
          </div>
        </nav>
    </div>
  )
}
