import React from 'react'
import { Link } from 'react-router-dom'

import './styles.css'
import logo from '../../../assets/images/logo.png'

function Logo() {
  return (
    <aside className="logo">
      <Link to="/" className="logo">
        <img src={logo} alt="logo" />
      </Link>
    </aside>
  )
}

export default Logo
