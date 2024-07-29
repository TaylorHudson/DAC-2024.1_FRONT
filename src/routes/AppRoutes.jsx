import { Route, BrowserRouter, Redirect, Switch } from "react-router-dom";
import UpdateProductView from "../views/product/UpdateProductView";
import CreateProductView from "../views/product/CreateProductView";
import DeleteProductView from "../views/product/DeleteProductView";
import FindProductView from "../views/product/FindProductView";
import FindCategoryView from "../views/category/FindCategoryView";
import CreateCategoryView from "../views/category/CreateCategoryView";
import UpdateCategoryView from "../views/category/UpdateCategoryView";
import DeleteCategoryView from "../views/category/DeleteCategoryView";
import FindUserView from "../views/user/FindUserView";
import CreateUserView from "../views/user/CreateUserView";
import UpdateUserView from "../views/user/UpdateUserView";
import DeleteUserView from "../views/user/DeleteUserView";
import Home from "../views/Home";
import Login from "../views/Login";
import { AuthConsumer } from "../SessionProvider";

function RestrictedRoute({component: Component, show, ...props}) {
  return (
    <Route {...props} render = {(componentProps) => {
        if(show) {
          return (
            <Component {...componentProps} />
          );
        } else {
          return (
            <Redirect to={ { pathname: "/login", state: { from: componentProps.location } } } />
          );
        }
    }}/>
  );
}

function AppRoutes(props) {
  return (
    <BrowserRouter
      forceRefresh={true}
    >
      <Switch>
        <Redirect exact from="/" to="/login"/>
        <Route component = { Login } path = "/login"/>
        <Route component = { CreateUserView } path = "/user/create"/>

        <RestrictedRoute show={props.isAuthenticated} component = { Home } path = "/home"/>
        
        <RestrictedRoute show={props.isAuthenticated} component = { CreateProductView } path = "/product/create"/>
        <RestrictedRoute show={props.isAuthenticated}component = { FindProductView } path = "/product/find"/>
        <RestrictedRoute show={props.isAuthenticated} component = { UpdateProductView } path = "/product/update/:id"/>
        <RestrictedRoute show={props.isAuthenticated} component = { DeleteProductView } path = "/product/delete/:id"/>

        <RestrictedRoute show={props.isAuthenticated} component = { CreateCategoryView } path = "/category/create"/>
        <RestrictedRoute show={props.isAuthenticated} component = { FindCategoryView } path = "/category/find"/>
        <RestrictedRoute show={props.isAuthenticated} component = { UpdateCategoryView } path = "/category/update/:id"/>
        <RestrictedRoute show={props.isAuthenticated} component = { DeleteCategoryView } path = "/category/delete/:id"/>

        <RestrictedRoute show={props.isAuthenticated} component = { FindUserView } path = "/user/find"/>
        <RestrictedRoute show={props.isAuthenticated} component = { UpdateUserView } path = "/user/update/:id"/>
        <RestrictedRoute show={props.isAuthenticated} component = { DeleteUserView } path = "/user/delete/:id"/>
      </Switch>
    </BrowserRouter>
  );
}

export default () => (
  <AuthConsumer>
    { (context) => (<AppRoutes isAuthenticated={context.isAuthenticated} />) }
  </AuthConsumer>
);