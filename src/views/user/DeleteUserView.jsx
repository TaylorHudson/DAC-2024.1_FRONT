import { useState } from "react";
import { useParams } from 'react-router-dom';
import Button from "../../components/button/Button";
import Form from "../../components/form/Form";
import Input from "../../components/input/Input";
import NavBar from "../../components/nav-bar/NavBar";
import Text from "../../components/text/Text";
import { showSuccessMessage, showWarningMessage } from '../../components/toastr/Toastr';
import UserApiService from '../../services/UserApiService';

function DeleteUserView() {
  const service = new UserApiService();
  const params = useParams();
  const id = params.id;
  const [identifier, setIdentifier] = useState(id);

  async function handleOnClick() {
    service.delete(id)
    .then(response => {
      showSuccessMessage("Usuário deletado com sucesso!");
      clearFields();
    }).catch(error => {
      showWarningMessage("Você não tem permissão para acessar esse recurso!");
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
          value="Deletar usuário"
          fontSize="35px"
          fontWeight="600"
        />
        <Form>
          <Text
            value="Identificador do usuário"
            fontSize="28px"
            fontWeight="600" />
          <Text
            value="Preencha com o identificador do usuário que será deletada"
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

export default DeleteUserView;