import React from "react";
import { Layout } from "../../components/Layout";
import getParams from "../../utils/getParams";
import { ProductPage } from "./ProductPage";
import { ProductStore } from "./ProductStore";
import { ClothingAndAccessories } from "./ClothingAndAccessories";
import "./style.css";

/**
 * @author
 * @function ProductListPage
 **/

export const ProductListPage = (props) => {
  const renderProduct = () => {
    console.log("props", props);
    const params = getParams(props.location.search);
    let content = null;
    switch (params.type) {
      case "store":
        content = <ProductStore {...props} />;
        break;
      case "page":
        content = <ProductPage {...props} />;
        break;

      default:
        content = <ClothingAndAccessories {...props} />;
        break;
    }
    return content;
  };

  return <Layout>{renderProduct()}</Layout>;
};
