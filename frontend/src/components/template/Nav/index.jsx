import React from 'react'
import { Link } from 'react-router-dom'

import './styles.css'

export default function Nav() {
  return (
    <aside className="menu-area">
      <nav className="menu">
        <Link to="/">
          <i class="fa fa-home"></i> Início
        </Link>
        <Link to="/users">
          <i class="fa fa-users"></i> Usuários
        </Link>
      </nav>
    </aside>
  )
}
