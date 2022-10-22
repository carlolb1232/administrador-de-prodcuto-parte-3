import React, { useEffect, useState } from 'react'
import { simpleGet } from '../Services/simpleGet';
import { Routes, Route, Outlet, Link } from "react-router-dom";
import axios from 'axios';

export default function ProductsList() {
  const [products, setProducts] = useState([]);
  const [deletedProductId, setdeletedProductId] = useState();

  const getProductsFromService = async () => {
    const productsFromService = await simpleGet("http://localhost:8000/api/products");
    setProducts(productsFromService.data);
  }

  useEffect(() => {
    getProductsFromService()
  }, [products]);

  const removeFromDom = () => {
    setProducts(products.filter(product=>product._id !== deletedProductId))
  }

  const deleteProduct = (id) => {
    axios.delete(`http://localhost:8000/api/product/delete/${id}`)
    .then(res => {
      setdeletedProductId(id)
    })
  }

  useEffect(() => {
    removeFromDom()
  }, [deletedProductId]);

  return (
    <div>
      {
        products.length>0&&
        products.map(product=>{
          return(
              <p key={product._id}><Link to={`/${product._id}`}>{product.title}</Link> <button onClick={()=>deleteProduct(product._id)}>DELETE</button></p>
          )
        })
      }
    </div>
  )
}
