import { useState } from "react";
import { useParams } from 'react-router-dom';
import Button from "../../components/button/Button";
import Form from "../../components/form/Form";
import Input from "../../components/input/Input";
import NavBar from "../../components/nav-bar/NavBar";
import Text from "../../components/text/Text";
import { showSuccessMessage, showWarningMessage } from '../../components/toastr/Toastr';
import CategoryApiService from '../../services/CategoryApiService';

function DeleteCategoryView() {
  const service = new CategoryApiService();
  const params = useParams();
  const id = params.id;
  const [identifier, setIdentifier] = useState(id);

  async function handleOnClick() {
    service.delete(id)
    .then(response => {
      showSuccessMessage("Categoria deletada com sucesso!");
      clearFields();
    }).catch(error => {
      showWarningMessage(error.response.data.message);
    });
  }

  const handleOnChangeIdentifier = (e) => {
    const inputValue = e.target.value;
    const formattedValue = inputValue.replace(/[^0-9]/g, '');
    setIdentifier(formattedValue);
  }

  const clearFields = () => {
    setIdentifier("");
  }

  return (
    <div className="container">
      <NavBar />
      <main>
        <Text
          value="Deletar categoria"
          fontSize="35px"
          fontWeight="600"
        />
        <Form>
          <Text
            value="Identificador da categoria"
            fontSize="28px"
            fontWeight="600" />
          <Text
            value="Preencha com o identificador da categoria que será deletada"
            fontSize="15px"
            fontWeight="400" />

          <Input
            placeholder="Identificador"
            value={identifier}
            handleOnChange={handleOnChangeIdentifier}
            disabled={true}
          />

          <div className="d-flex justify-content-center align-itens-center">
            <Button name="Continuar" className="button" onClick={handleOnClick} />
          </div>
        </Form>
      </main>
    </div>
  );
}

export default DeleteCategoryView;