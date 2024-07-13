import { useEffect, useState } from "react";
import Button from "../../components/button/Button";
import Form from "../../components/form/Form";
import Input from "../../components/input/Input";
import NavBar from "../../components/nav-bar/NavBar";
import ProductTable from "../../components/table/ProductTable";
import Text from "../../components/text/Text";
import Spinner from "../../components/spinner/Spinner";
import { useHistory } from 'react-router-dom';
import axios from "axios";

function FindProductView() {
  const history = useHistory();
  const [products, setProducts] = useState([]);
  const [identifier, setIdentifier] = useState("");
  const [loading, setLoading] = useState(true);

  async function findAll() {
    await axios.get(
      "http://localhost:8081/api/product"
    ).then(response => {
      console.log(response);
      setProducts(response.data);
      setLoading(false);
    }).catch(error => {
      console.log(error.response);
    });      
  }

  useEffect(() => {
    findAll();
  }, []);

  const handleOnChangeIdentifier = (e) => {
    const inputValue = e.target.value;
    const formattedValue = inputValue.replace(/[^0-9]/g, '');
    setIdentifier(formattedValue);
  }

  async function handleOnClickFilterButton() {
    let uri = "";
    if (identifier) {
      uri = `/${identifier}`;
    }
    await axios.get(
      `http://localhost:8080/api/product${uri}`
    ).then(response => {
      console.log(response);
      setProducts(response.data);
    }).catch(error => {
      console.log(error.response);
    });
  }

  const handleEditButton = (id) => history.push(`/product/update/${id}`);
  const handleDeleteButton = (id) => history.push(`/product/delete/${id}`);

  return (
    <div className="container vh-100">
      <NavBar />
      <main className="mt-5">
        {loading && <Spinner />}
        <div className="pb-5">
          <Form>
            <Text
              value="Filtro de produtos"
              fontSize="28px"
              fontWeight="600" />
            <Text
              value="Preencha os dados do produto que será filtrado"
              fontSize="15px"
              fontWeight="400" />
            <Input
              placeholder="Identificador"
              value={identifier}
              handleOnChange={handleOnChangeIdentifier}
            />
            <div className="d-flex justify-content-center align-itens-center">
              <Button name="Filtrar" className="button" onClick={(e) => handleOnClickFilterButton(identifier)} />
            </div>
          </Form>
        </div>
        <div>
          <ProductTable
            data={products}
            handleEditButton={handleEditButton}
            handleDeleteButton={handleDeleteButton}
          />
        </div>
      </main>

    </div>
  );
}

export default FindProductView;