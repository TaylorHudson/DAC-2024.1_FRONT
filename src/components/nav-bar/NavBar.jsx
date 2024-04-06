import Logo from "../../assets/logo.jpg";
import Dropdown from "../dropdown/Dropdown";
import NavBarItem from "./NavBarItem";
import DropdownItem from "../dropdown/DropdownItem";

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg border-bottom">
      <div className="container-fluid">
        <a className="navbar-brand" href="/home">
          <img src={Logo} alt="Logo" style={{ height: "80px", width: "80px" }} />
        </a>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav me-auto">
            <NavBarItem>
              <Dropdown dropdownName="Produto">
                <DropdownItem itemName="Cadastrar produto" href="/product/create" />
                <DropdownItem itemName="Buscar produtos" href="/product/find" />
              </Dropdown>
            </NavBarItem>
            <NavBarItem>
              <Dropdown dropdownName="Categoria">
                <DropdownItem itemName="Cadastrar categoria" href="/category/create" />
                <DropdownItem itemName="Buscar categorias" href="/category/find" />
              </Dropdown>
            </NavBarItem>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;