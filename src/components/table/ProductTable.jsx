import Button from "../button/Button";
import Table from "./Table";
import TableHead from "./TableHead";

function ProductTable({ data, handleEditButton, handleDeleteButton }) {

  const formatProductPrice = (price) => {
    let stringPrice = price.toString().replace(".", ",");
    return (!stringPrice.includes(",")) ? stringPrice + ",00" : stringPrice;
  }

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

  const row = (key, product) => {
    return (
      <tr key={key}>
        <td>{product.id}</td>
        <td>{product.name}</td>
        <td>{product.description}</td>
        <td>{`R$ ${formatProductPrice(product.price)}`}</td>
        <td>
          <img src={product.images[0]} alt="Imagem do produto" style={{ height: "50px", width: "50px" }} />
        </td>
        <td>{product.categoryId}</td>
        {actions(product.id)}
      </tr>
    );
  }

  const rows = (Array.isArray(data)) ? data.map(product => row(product.id, product)) : row(data.id, data);

  return (
    <Table>
      <TableHead columns={["ID", "Nome", "Descrição", "Preço", "Imagem", "ID da categoria", "Ações"]} />
      <tbody>
        {rows}
      </tbody>
    </Table>
  );
}

export default ProductTable;