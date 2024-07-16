import React from 'react'
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Form from "../../components/form/Form";
import Input from "../../components/input/Input";
import Text from "../../components/text/Text";
import Button from "../../components/button/Button";
import NavBar from "../../components/nav-bar/NavBar";
import { showErrorMessage, showSuccessMessage, showWarningMessage } from '../../components/toastr/Toastr';
import CategoryApiService from '../../services/CategoryApiService';

function UpdateCategoryView() {
  const service = new CategoryApiService();
  const params = useParams();
  const id = params.id;
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  async function find() {
    service.findById(id)
    .then(response => {
      const category = response.data;
      setName(category.name);
      setDescription(category.description);
    }).catch(error => {
      showWarningMessage(error.response.data.message);
    });
  }

  useEffect(() => {
    find();
  }, []);

  async function handleOnClick() {
    const [hasErrors, errors] = validateFields();
    if (hasErrors) {
      showErrors(errors);
      return;
    }

    service.update(
      {
        id,
        name,
        description,
      }
    ).then(response => {
      showSuccessMessage("Categoria atualizada com sucesso!");
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

  const validateFields = () => {
    const errors = [];

    if (!name) {
      errors.push("Campo nome é obrigatório!");
    }
    if (!description) {
      errors.push("Campo descrição é obrigatório!");
    }

    const hasErrors = errors.length > 0;
    return [hasErrors, errors];
  }

  const showErrors = (errors) => {
    errors.forEach((message, index) => {
      showErrorMessage(message);
    });
  } 

  return (
    <div className="container">
      <NavBar />
      <main>
        <Text
          value="Atualizar categoria"
          fontSize="35px"
          fontWeight="600"
        />

        <Form>
          <Text
            value="Dados da categoria"
            fontSize="28px"
            fontWeight="600" />
          <Text
            value="Preencha os dados da categoria que será atualizada"
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
  )
}

export default UpdateCategoryView;