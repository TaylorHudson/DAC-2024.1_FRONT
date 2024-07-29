import React from 'react'
import Table from './Table';
import TableHead from './TableHead';
import Button from '../button/Button';

function UserTable({ data, handleEditButton, handleDeleteButton }) {

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

  const row = (key, user) => {
    return (
      <tr key={key}>
        <td>{user.id}</td>
        <td>{user.username}</td>
        <td>{user.email}</td>
        {actions(user.id)}
      </tr>
    );
  }

  const rows = (Array.isArray(data)) ? data.map(user => row(user.id, user)) : row(data.id, data);

  return (
    <Table>
      <TableHead columns={["ID", "Nome", "Email", "Ações"]} />
      <tbody>
        {rows}
      </tbody>
    </Table>
  )
}

export default UserTable;