import { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import Form from '../../src/components/form/Form';
import Button from "../../src/components/button/Button";
import Logo from "../../src/assets/logo.jpg";
import Input from '../../src/components/input/Input';
import Text from '../../src/components/text/Text';
import { showErrorMessage } from '../../src/components/toastr/Toastr';
import { AuthContext } from '../SessionProvider';

function Login() {
  const { login } = useContext(AuthContext);
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleOnChangeEmail = (e) => {
    setEmail(e.target.value);
  }

  const handleOnChangePassword = (e) => {
    setPassword(e.target.value);
  }

  const handleLogin = () => {
    login(
      email.trim(),
      password
    )
    .then(username => {
          if(username) {
            history.push('/home')
          }else{
            showErrorMessage('Login inválido!')
          }
      }).catch(error => {
          showErrorMessage('Algo não deu certo, tente novamente!');
    })
  }

  return (
    <div className="container">
      <img src={Logo} alt="Logo" style={{ 
        height: "80px",
        width: "80px",
        marginTop: "20px" }} />
      <main>
        <Form>
          <Text
            value="Acesse sua conta"
            fontSize="28px"
            fontWeight="600" />

          <Input
            placeholder="Email"
            value={email}
            handleOnChange={handleOnChangeEmail}
          />
          <Input
            placeholder="Digite sua senha"
            value={password}
            handleOnChange={handleOnChangePassword}
            type="password"
          />
          <div className="d-flex justify-content-center align-itens-center">
            <Button name="Entrar" className="button" onClick={handleLogin} />
          </div>
          <div className="d-flex justify-content-end">
            <a style={{
              cursor: 'pointer',
              fontSize: '15px',
              paddingTop: '18px',
              color: 'rgb(35, 134, 98)',
              textDecoration: 'none'
            }}
            href='/user/create'
            >Não tem cadastro?</a>
          </div>
        </Form>
      </main>
    </div>
  );
}

export default Login;