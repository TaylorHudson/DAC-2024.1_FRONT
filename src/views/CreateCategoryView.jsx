import { useState } from 'react';
import '../index.css';
import InputText from '../components/input-text/InputText';
import MediumText from '../components/text/medium-text/MediumText';
import SmallText from '../components/text/small-text/SmallText';
import Form from '../components/form/Form';
import Button from "../components/button/Button";

function CreateCategoryView() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const handleOnChangeName = (e) => {
    setName(e.target.value);
  }

  const handleOnChangeDescription = (e) => {
    setDescription(e.target.value);
  }

  const handleOnSubmit = (e) => {
    e.preventDefault();
    console.log({
      name,
      description,
    });
  }

  return (
    <div className="container">
      <Form onSubmit={handleOnSubmit}>
        <MediumText message="Dados da categoria"/>
        <SmallText message="Preencha os dados da categoria que será criada"/>

        <InputText 
          placeholder="Nome" 
          value={name} 
          handleOnChange={handleOnChangeName}
        />
        <InputText 
          placeholder="Descrição"
          value={description}
          handleOnChange={handleOnChangeDescription}
        />
       
        <Button name="Salvar"/>
      </Form>
    </div>
  );
}

export default CreateCategoryView;