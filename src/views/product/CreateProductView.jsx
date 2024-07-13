import { useState } from "react";
import { useHistory } from "react-router-dom";
import Form from "../../components/form/Form";
import Input from "../../components/input/Input";
import Text from "../../components/text/Text";
import Button from "../../components/button/Button";
import NavBar from "../../components/nav-bar/NavBar";
import axios from "axios";

function CreateProductView() {
  const history = useHistory();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [categoryId, setCategoryId] = useState("");

  async function handleOnClick() {
    await axios.post(
      "http://localhost:8081/api/product",
      {
        name,
        description,
        price,
        images: [image],
        categoryId
      }
    ).then(response => {
      console.log(response);
      history.push("/product/find");
    }).catch(error => {
      console.log(error.response);
    });            
  }

  const handleOnChangeName = (e) => {
    setName(e.target.value)
  }

  const handleOnChangeDescription = (e) => {
    setDescription(e.target.value)
  }

  const handleOnChangePrice = (e) => {
    const inputValue = e.target.value;
    const formattedPrice = inputValue.replace(/[^0-9.]/g, '');
    setPrice(formattedPrice);
  }

  const handleOnChangeImage = (e) => {
    setImage(e.target.value)
  }

  const handleOnChangeCategoryId = (e) => {
    const inputValue = e.target.value;
    const formattedCategoryId = inputValue.replace(/[^0-9]/g, '');
    setCategoryId(formattedCategoryId);
  }

  return (
    <div className="container">
      <NavBar />
      <main>
        <Text
          value="Cadastrar produto"
          fontSize="35px"
          fontWeight="600"
        />

        <Form>
          <Text
            value="Dados do produto"
            fontSize="28px"
            fontWeight="600" />
          <Text
            value="Preencha os dados do produto que será cadastrado"
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
          <Input
            placeholder="Preço"
            value={price}
            handleOnChange={handleOnChangePrice}
          />
          <Input
            placeholder="Caminho para imagem"
            value={image}
            handleOnChange={handleOnChangeImage}
          />
          <Input
            placeholder="Identificador da categoria"
            value={categoryId}
            handleOnChange={handleOnChangeCategoryId}
          />
          <div className="d-flex justify-content-center align-itens-center">
            <Button name="Salvar" className="button" onClick={handleOnClick} />
          </div>
        </Form>
      </main>
    </div>
  );
}

export default CreateProductView;