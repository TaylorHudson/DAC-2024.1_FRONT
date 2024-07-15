import { useState } from 'react';
import Form from '../../components/form/Form';
import Button from "../../components/button/Button";
import NavBar from '../../components/nav-bar/NavBar';
import Input from '../../components/input/Input';
import Text from '../../components/text/Text';
import { showSuccessMessage, showWarningMessage } from '../../components/toastr/Toastr';
import axios from 'axios';

function CreateCategoryView() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  async function handleOnClick() {
    await axios.post(
      "http://localhost:8081/api/category",
      {
        name,
        description,
      }
    ).then(response => {
      showSuccessMessage("Categoria criada com sucesso!")
      clearFields();
    }).catch(error => {
      showWarningMessage(error.response.data.message);
    });
  }

  const handleOnChangeName = (e) => {
    setName(e.target.value);
  }

  const handleOnChangeDescription = (e) => {
    setDescription(e.target.value);
  }

  const clearFields = () => {
    setName("");
    setDescription("");
  }

  return (
    <div className="container">
      <NavBar />
      <main>
        <Text
          value="Cadastrar categoria"
          fontSize="35px"
          fontWeight="600"
        />

        <Form>
          <Text
            value="Dados da categoria"
            fontSize="28px"
            fontWeight="600" />
          <Text
            value="Preencha os dados da categoria que será cadastrada"
            fontSize="15px"
            fontWeight="400" />

          <Input
            placeholder="Nome"
            value={name}
            handleOnChange={handleOnChangeName}
          />
          <Input
            placeholder="Descrição"
            value={description}
            handleOnChange={handleOnChangeDescription}
          />
          <div className="d-flex justify-content-center align-itens-center">
            <Button name="Salvar" className="button" onClick={handleOnClick} />
          </div>
        </Form>
      </main>
    </div>
  );
}

export default CreateCategoryView;