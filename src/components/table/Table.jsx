import React from 'react'

function Table({ children }) {
  return (
    <table className="table table-hover">
      {children}
    </table>
  );
}

export default Table;