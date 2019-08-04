import React from 'react'
import './Nav.css'
import '../../assets/fontello/css/fontello.css'

function Nav() {
  return (
    <nav className="nav" id="nav">
      <button type="button" id="menu-toggle">
        <i className="icon-menu" />
      </button>
      <ul className="menu">
        <li>
          <a href="/add_order">Добавить заказ</a>
        </li>
        <li>
          <a href="/admin/app/">Админка</a>
        </li>
      </ul>
    </nav>
  )
}

export default Nav
