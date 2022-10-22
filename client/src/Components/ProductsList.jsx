import React, { useEffect, useState } from 'react'
import { simpleGet } from '../Services/simpleGet';
import { Routes, Route, Outlet, Link } from "react-router-dom";

export default function ProductsList() {
  const [products, setProducts] = useState([]);

  const getProductsFromService = async () => {
    const productsFromService = await simpleGet("http://localhost:8000/api/products");
    setProducts(productsFromService.data);
  }

  useEffect(() => {
    getProductsFromService()
  }, [products]);

  return (
    <div>
      {
        products.length>0&&
        products.map(product=>{
          return(
            <p key={product._id}><Link to={`/${product._id}`}>{product.title}</Link></p>
          )
        })
      }
    </div>
  )
}
