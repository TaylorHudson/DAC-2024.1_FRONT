import React from 'react'
import Table from './Table';
import TableHead from './TableHead';
import Button from '../button/Button';

function CategoryTable({ data, handleEditButton, handleDeleteButton }) {

  const actions = (id) => {
    return (
      <td>
        <div className="actions d-flex flex-row justify-content-start gap-1">
          <Button
            name="Editar"
            className="btn btn-primary"
            onClick={(e) => handleEditButton(id)}
          />
          <Button
            name="Deletar"
            className="btn btn-danger"
            onClick={(e) => handleDeleteButton(id)}
          />
        </div>
      </td>
    );
  }

  const row = (key, category) => {
    return (
      <tr key={key}>
        <td>{category.id}</td>
        <td>{category.name}</td>
        <td>{category.description}</td>
        {actions(category.id)}
      </tr>
    );
  }

  const rows = (Array.isArray(data)) ? data.map(category => row(category.id, category)) : row(data.id, data);

  return (
    <Table>
      <TableHead columns={["ID", "Nome", "Descrição", "Ações"]} />
      <tbody>
        {rows}
      </tbody>
    </Table>
  )
}

export default CategoryTable;