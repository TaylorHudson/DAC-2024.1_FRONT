import { Route, BrowserRouter, Redirect, Switch } from "react-router-dom";
import UpdateProductView from "../views/product/UpdateProductView";
import CreateProductView from "../views/product/CreateProductView";
import DeleteProductView from "../views/product/DeleteProductView";
import FindProductView from "../views/product/FindProductView";
import Home from "../views/Home";
import FindCategoryView from "../views/category/FindCategoryView";
import CreateCategoryView from "../views/category/CreateCategoryView";
import UpdateCategoryView from "../views/category/UpdateCategoryView";
import DeleteCategoryView from "../views/category/DeleteCategoryView";

function AppRoutes() {
  return (
    <BrowserRouter
      forceRefresh={true}
    >
      <Switch>
        <Redirect exact from="/" to="/home"/>
        <Route component = { Home } path = "/home"/>

        <Route component = { CreateProductView } path = "/product/create"/>
        <Route component = { FindProductView } path = "/product/find"/>
        <Route component = { UpdateProductView } path = "/product/update/:id"/>
        <Route component = { DeleteProductView } path = "/product/delete/:id"/>

        <Route component = { CreateCategoryView } path = "/category/create"/>
        <Route component = { FindCategoryView } path = "/category/find"/>
        <Route component = { UpdateCategoryView } path = "/category/update/:id"/>
        <Route component = { DeleteCategoryView } path = "/category/delete/:id"/>
      </Switch>
    </BrowserRouter>
  );
}

export default AppRoutes;