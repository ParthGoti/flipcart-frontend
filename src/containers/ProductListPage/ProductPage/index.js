import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductPage } from "../../../actions";
import getParams from "../../../utils/getParams";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { Card } from "../../../components/UI/Card";

/**
 * @author
 * @function ProductPage
 **/

export const ProductPage = (props) => {
  const dispatch = useDispatch();
  const product = useSelector((state) => state.product);
  const {pageData} = product

  useEffect(() => {
    const params = getParams(props.location.search);
    const payload = {
      params,
    };
    dispatch(getProductPage(payload));
  }, []);
  return (
    <div style={{margin:"0 12px"}}>
        <h3>{pageData.title}</h3>
        <Carousel
         renderThumbs={()=>{}}
        >
            {
                pageData.banners && pageData.banners.map((banner,index)=>
                  <a key={index}
                  style={{display:"block"}}
                  href={banner.navigateTo}
                  >
                    <img style={{height:"360px"}} src={banner.img} alt=""/>
                  </a>
                )
            }
        </Carousel>
        <div style={{display:"flex",justifyContent:"center",flexWrap:"wrap",margin:"10px 0"}}>
      {  
        pageData.products && pageData.products.map((product,index)=>
         <Card key={index} style={{width:"200px"}}>
           <img style={{height:"250px"}} src={product.img}/> 
         </Card>
        )}
    </div>
    </div>
  );
};
