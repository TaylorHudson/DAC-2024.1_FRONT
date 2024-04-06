import React from 'react'

function TableHead({columns}) {
  return (
    <thead>
      <tr>
        { columns.map((column) => {
          return (
            <th scope="col">{column}</th>
          );
        }) }
      </tr>
    </thead>
  );
}

export default TableHead;