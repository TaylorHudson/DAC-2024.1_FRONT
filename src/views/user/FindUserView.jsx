import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import NavBar from '../../components/nav-bar/NavBar';
import Form from '../../components/form/Form';
import Text from '../../components/text/Text';
import Input from '../../components/input/Input';
import Button from '../../components/button/Button';
import Spinner from '../../components/spinner/Spinner';
import UserTable from '../../components/table/UserTable';
import { showWarningMessage } from '../../components/toastr/Toastr';
import UserApiService from '../../services/UserApiService';

function FindUserView() {
  const service = new UserApiService();
  const history = useHistory();
  const [identifier, setIdentifier] = useState("");
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  async function findAll() {
    service.findAll()
    .then(response => {
      setUsers(response.data);
      setLoading(false);
    }).catch(error => {
      showWarningMessage(error.response.data.message);
    });      
  }

  useEffect(() => {
    findAll();
  }, []);

  async function handleOnClickFilterButton() {
    if (!identifier) {
      findAll();
      return;
    }
    
    service.findById(identifier)
    .then(response => {
      setUsers(response.data);
    }).catch(error => {
      showWarningMessage(error.response.data.message);
    });
  }

  const handleOnChangeIdentifier = (e) => {
    const inputValue = e.target.value;
    const formattedValue = inputValue.replace(/[^0-9]/g, '');
    setIdentifier(formattedValue);
  }

  const handleEditButton = (id) => history.push(`/user/update/${id}`);
  const handleDeleteButton = (id) => history.push(`/user/delete/${id}`);

  return (
    <div className="container">
      {loading && <Spinner />}
      <NavBar />
      <main className="mt-5">
        <div className="pb-5">
          <Form>
            <Text
              value="Filtro de usuários"
              fontSize="28px"
              fontWeight="600" />
            <Text
              value="Preencha os dados do usuário que será filtrado"
              fontSize="15px"
              fontWeight="400" />
            <Input
              placeholder="Identificador"
              value={identifier}
              handleOnChange={handleOnChangeIdentifier}
            />
            <div className="d-flex justify-content-center align-itens-center">
              <Button name="Filtrar" className="button" onClick={handleOnClickFilterButton} />
            </div>
          </Form>
        </div>
        <div>
          <UserTable
            data={users}
            handleEditButton={handleEditButton}
            handleDeleteButton={handleDeleteButton}
          />
        </div>
      </main>
    </div>
  );
}

export default FindUserView;