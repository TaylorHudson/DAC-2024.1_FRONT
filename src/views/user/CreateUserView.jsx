import { useState } from 'react';
import Form from '../../components/form/Form';
import Button from "../../components/button/Button";
import NavBar from '../../components/nav-bar/NavBar';
import Input from '../../components/input/Input';
import Text from '../../components/text/Text';
import { showErrorMessage, showSuccessMessage, showWarningMessage } from '../../components/toastr/Toastr';
import UserApiService from '../../services/UserApiService';

function CreateUserView() {
  const service = new UserApiService();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [document, setDocument] = useState("");

  async function handleOnClick() {
    const [hasErrors, errors] = validateFields();
    if (hasErrors) {
      showErrors(errors);
      return;
    }

    service.create(
      {
        username: name,
        email,
        password,
        document
      }
    ).then(response => {
      showSuccessMessage("Usuário criado com sucesso!")
      clearFields();
    }).catch(error => {
      showWarningMessage(error.response.data.message);
    });
  }

  const handleOnChangeName = (e) => {
    setName(e.target.value);
  }

  const handleOnChangeEmail = (e) => {
    setEmail(e.target.value);
  }

  const handleOnChangePassword = (e) => {
    setPassword(e.target.value);
  }

  const handleOnChangeConfirmPassword = (e) => {
    setConfirmPassword(e.target.value);
  }

  const handleOnChangeDocument = (e) => {
    let value = e.target.value;
    value = value.replace(/\D/g, '');

    if (value.length > 11) {
      value = value.slice(0, 11);
    }
    
    if (value.length > 3 && value.length <= 6) {
      value = `${value.slice(0, 3)}.${value.slice(3)}`;
    } else if (value.length > 6 && value.length <= 9) {
      value = `${value.slice(0, 3)}.${value.slice(3, 6)}.${value.slice(6)}`;
    } else if (value.length > 9) {
      value = `${value.slice(0, 3)}.${value.slice(3, 6)}.${value.slice(6, 9)}-${value.slice(9)}`;
    }

    setDocument(value);
  }

  const clearFields = () => {
    setName("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
    setDocument("");
  }

  const validatePassword = (password) => {
    const errors = [];
    if (password.length < 8) {
      errors.push("A senha deve ter pelo menos 8 caracteres!");
      return errors;
    }
    if (!/[A-Z]/.test(password)) {
      errors.push("A senha deve conter pelo menos uma letra maiúscula!");
      return errors;
    }
    if (!/[0-9]/.test(password)) {
      errors.push("A senha deve conter pelo menos um número!");
      return errors;
    }
    if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
      errors.push("A senha deve conter pelo menos um caractere especial!");
      return errors;
    }
    return errors;
  }

  const validateFields = () => {
    const errors = [];

    if (!name) {
      errors.push("Campo nome é obrigatório!");
    }
    
    if (!email) {
      errors.push("Campo email é obrigatório!");
    }
    
    if (!password) {
      errors.push("Campo senha é obrigatório!");
    }else {
      const passwordErrors = validatePassword(password);
      errors.push(...passwordErrors);
    }

    if (!confirmPassword) {
      errors.push("Campo confirmar senha é obrigatório!");
    } else if (password && confirmPassword !== password) {
      errors.push("Campo confirmar senha deve ser igual ao campo senha!");
    }

    if (!document) {
      errors.push("Campo Cpf é obrigatório!");
    } else {
      const cpfRegex = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;
      if (!cpfRegex.test(document)) {
        errors.push("Campo Cpf com formato inválido!");
      }
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
          value="Cadastrar usuário"
          fontSize="35px"
          fontWeight="600"
        />

        <Form>
          <Text
            value="Dados do usuário"
            fontSize="28px"
            fontWeight="600" />
          <Text
            value="Preencha os dados do usuário que será cadastrado"
            fontSize="15px"
            fontWeight="400" />

          <Input
            placeholder="Nome"
            value={name}
            handleOnChange={handleOnChangeName}
          />
          <Input
            placeholder="Email"
            value={email}
            handleOnChange={handleOnChangeEmail}
          />
          <Input
            placeholder="Cpf"
            value={document}
            handleOnChange={handleOnChangeDocument}
          />
          <Input
            placeholder="Digite sua senha"
            value={password}
            handleOnChange={handleOnChangePassword}
            type="password"
          />
          <Input
            placeholder="Confirme sua senha"
            value={confirmPassword}
            handleOnChange={handleOnChangeConfirmPassword}
            type="password"
          />
          <div className="d-flex justify-content-center align-itens-center">
            <Button name="Salvar" className="button" onClick={handleOnClick} />
          </div>
        </Form>
      </main>
    </div>
  );
}

export default CreateUserView;