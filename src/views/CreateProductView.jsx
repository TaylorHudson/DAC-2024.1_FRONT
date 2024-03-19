import { useState } from "react";
import './index.css';
import InputText from "../components/input-text/InputText";
import MediumText from "../components/text/medium-text/MediumText";
import SmallText from "../components/text/small-text/SmallText";
import Form from "../components/form/Form";
import Button from "../components/button/Button";

function CreateProductView() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [categoryId, setCategoryId] = useState("");

  const handleOnChangeName = (e) => {
    setName(e.target.value)
  }

  const handleOnChangeDescription = (e) => {
    setDescription(e.target.value)
  }

  const handleOnChangePrice = (e) => {
    const inputValue = e.target.value;
    const formattedPrice = inputValue.replace(/[^0-9,.]/g,'');
    
    setPrice(formattedPrice);
  }

  const handleOnChangeImage = (e) => {
    setImage(e.target.value)
  }

  const handleOnChangeCategotyId = (e) => {
    const inputValue = e.target.value;
    const formattedCategoryId = inputValue.replace(/[^0-9]/g,'');
    setCategoryId(formattedCategoryId);
  }

  const handleOnSubmit = (e) => {
    e.preventDefault();
    console.log({
      name,
      description,
      price,
      image,
      categoryId,
    });
  }

  return (
    <div className="container">
      <Form onSubmit={handleOnSubmit}>
        <MediumText message="Dados do produto"/>
        <SmallText message="Preencha os dados do produto que será criado"/>

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
        <InputText 
          placeholder="Preço" 
          value={price} 
          handleOnChange={handleOnChangePrice}
        />
        <InputText 
          placeholder="Caminho para imagem" 
          value={image} 
          handleOnChange={handleOnChangeImage}
        />
        <InputText 
          placeholder="Identificador da categoria" 
          value={categoryId} 
          handleOnChange={handleOnChangeCategotyId}
        />
        
        <Button name="Salvar"/>
      </Form>
    </div>
  );
}

export default CreateProductView;