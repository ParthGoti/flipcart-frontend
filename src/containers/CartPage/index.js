import React from "react";
import { useSelector } from "react-redux";
import { Layout } from "../../components/Layout";
import { Card } from "../../components/UI/Card";
import { CartItem } from "./CartItem";
import "./style.css";

/**
 * @author
 * @function CartPage
 **/

export const CartPage = (props) => {
  const cart = useSelector((state) => state.cart);
  const cartItems = cart.cartItems;
  return (
    <Layout>
      <div className='"cartContainer' style={{alignItems:"flex-start"}}>
        <Card headerLeft={`My Cart`} headerRight={<div>Deliver to</div>}>
          {Object.keys(cartItems).map((key, index) => (
            <CartItem 
              key={index}
              cartItem = {cartItems[key]}
            />
          ))}
        </Card>
      </div>
    </Layout>
  );
};
