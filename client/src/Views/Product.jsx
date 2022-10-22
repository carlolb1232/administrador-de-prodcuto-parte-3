import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { simpleGet } from '../Services/simpleGet';
import { Routes, Route, Outlet, Link } from "react-router-dom";


export default function Product() {
  const [product, setProduct] = useState();
  const { id } = useParams();

  const getProductFromService = async () => {
    const productFromService = await simpleGet(`http://localhost:8000/api/product/${id}`)
    setProduct(productFromService.data)
  }

  useEffect(() => {
    getProductFromService();
  }, []);

  return (
    <div>
      {
        product&&
        (
          <div>
            <h1>{product.title}</h1>
            <p>Price: S/.{product.price}</p>
            <p>Description: {product.description}</p>
          </div>
        )
      }
      <Link to='/'>volver</Link>
    </div>
  )
}
