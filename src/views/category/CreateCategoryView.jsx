import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Form from '../../components/form/Form';
import Button from "../../components/button/Button";
import NavBar from '../../components/nav-bar/NavBar';
import Input from '../../components/input/Input';
import Text from '../../components/text/Text'
import axios from 'axios';

function CreateCategoryView() {
  const history = useHistory();
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
      console.log(response);
      history.push("/category/find");
    }).catch(error => {
      console.log(error.response);
    });
  }

  const handleOnChangeName = (e) => {
    setName(e.target.value);
  }

  const handleOnChangeDescription = (e) => {
    setDescription(e.target.value);
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