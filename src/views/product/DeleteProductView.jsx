import { useHistory, useParams } from "react-router-dom";
import Button from "../../components/button/Button";
import Form from "../../components/form/Form";
import Input from "../../components/input/Input";
import NavBar from "../../components/nav-bar/NavBar";
import Text from "../../components/text/Text";
import { useState } from "react";
import { httpDelete } from "../../services/AxiosService";

function DeleteProductView() {
  const params = useParams();
  const id = params.id;
  const history = useHistory();
  const [identifier, setIdentifier] = useState(id);

  async function handleOnClick() {
    try {
      if (identifier) {
        await httpDelete(`/product/${id}`);
        history.push("/product/find");
      }
    } catch (error) {
      console.log(error);
    }
  }

  const handleOnChangeIdentifier = (e) => {
    const inputValue = e.target.value;
    const formattedValue = inputValue.replace(/[^0-9]/g, '');
    setIdentifier(formattedValue);
  }

  return (
    <div className="container">
      <NavBar />
      <main>
        <Text
          value="Deletar produto"
          fontSize="35px"
          fontWeight="600"
        />
        <Form>
          <Text
            value="Identificador do produto"
            fontSize="28px"
            fontWeight="600" />
          <Text
            value="Preencha com o identificador do produto que será deletado"
            fontSize="15px"
            fontWeight="400" />

          <Input
            placeholder="Identificador"
            value={identifier}
            handleOnChange={handleOnChangeIdentifier}
          />

          <div className="d-flex justify-content-center align-itens-center">
            <Button name="Continuar" className="button" onClick={handleOnClick} />
          </div>
        </Form>
      </main>
    </div>
  );
}

export default DeleteProductView;