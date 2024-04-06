import React from 'react'

function NavBarItem({children}) {
  return (
    <li className="nav-item">
      {children}
    </li>
  )
}

export default NavBarItem;