import React from 'react'
import Form from "../../components/form/Form";
import Input from "../../components/input/Input";
import Text from "../../components/text/Text";
import Button from "../../components/button/Button";
import NavBar from "../../components/nav-bar/NavBar";
import { useHistory, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { httpGet, httpPut } from '../../services/AxiosService';

function UpdateCategoryView() {
  const history = useHistory();
  const params = useParams();
  const id = params.id;
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  async function find() {
    const response = await httpGet(`category/${id}`);
    const category = response.data;
    setName(category.name);
    setDescription(category.description);
  }

  useEffect(() => {
    find();
  }, []);

  async function handleOnClick() {
    try {
      await httpPut(`category/${id}`, {
        name,
        description,
      });
      history.push(`/category/find`);
    } catch (error) {
      console.log(error);
    }
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