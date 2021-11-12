import React, { useEffect } from "react";
import ProductComponent from "./ProductComponent";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { setProducts } from "../redux/actions/productAction";

const ProductListing = () => {
  const proudcts = useSelector((state) => state);
  const dispatch = useDispatch();
  const fetchProducts = async () => {
    const res = await axios("https://fakestoreapi.com/products").catch(
      (err) => {
        console.log(err);
      }
    );
    dispatch(setProducts(res.data));
  };
  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="main">
      <ProductComponent />
    </div>
  );
};

export default ProductListing;
