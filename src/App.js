import "./App.css";
import { HomePage } from "./containers/HomePage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ProductListPage } from "./containers/ProductListPage";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { isUserLoggedIn, updateCart } from "./actions";
import { ProductDetailsPage } from './containers/ProductDetailsPage';
import { CartPage } from "./containers/CartPage";
import { CheckoutPage } from "./containers/CheckoutPage";
import { OrderPage } from "./containers/OrderPage";
import { OrderDetailsPage } from "./containers/OrderDetailsPage";


function App() {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);

  useEffect(() => {
    if (!auth.authenticate) {
      dispatch(isUserLoggedIn());
    }
  }, [auth.authenticate]);
  useEffect(()=>{
    dispatch(updateCart());
  },[auth.authenticate])
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={HomePage}></Route>
          <Route path="/cart"  component={CartPage}></Route>
          <Route path="/checkout"  component={CheckoutPage}></Route>
          <Route path="/account/orders" component={OrderPage} />
          <Route path="/order_deatails/:orderId" component={OrderDetailsPage} />
          <Route
            path="/:productSlug/:productId/p" exact
            component={ProductDetailsPage}
          ></Route>
          <Route path="/:slug" exact component={ProductListPage}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
