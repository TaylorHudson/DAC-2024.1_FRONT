import React from 'react'

function DropdownItem({href = undefined, itemName, onClick = () => {} }) {
  return (
    <a className="dropdown-item" onClick={onClick} href={href}>
      {itemName} 
    </a>
  );
}

export default DropdownItem;