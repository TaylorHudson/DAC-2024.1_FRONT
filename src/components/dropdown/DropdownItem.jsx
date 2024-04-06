import React from 'react'

function DropdownItem({href, itemName}) {
  return (
    <a className="dropdown-item" href={href}>{itemName}</a>
  );
}

export default DropdownItem;