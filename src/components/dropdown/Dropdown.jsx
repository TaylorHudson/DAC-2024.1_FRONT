import React, { useState } from 'react'

function Dropdown({ dropdownName, children }) {
  const [enableDropdown, setEnableDropdown] = useState(false);

  const handleOnClickDropdown = () => {
    setEnableDropdown(!enableDropdown);
  }

  return (
    <div>
      <a
        className="nav-link dropdown-toggle"
        data-bs-toggle="dropdown"
        role="button"
        aria-haspopup="true"
        aria-expanded="false"
        onClick={handleOnClickDropdown}
        style={{ fontWeight: "600", fontSize: "18px" }}
      >
        {dropdownName}
      </a>
      <div className={enableDropdown ? "dropdown-menu show" : "dropdown-menu"}>
        {children}
      </div>
    </div>
  );
}

export default Dropdown;