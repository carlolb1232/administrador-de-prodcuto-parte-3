import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { simpleGet } from '../Services/simpleGet';

export default function Update() {
  const { id } = useParams()

  const [editedProduct, setEditedProduct] = useState();

  const getProductFromService = async () => {
    const productFromServiceResponse = await simpleGet(`http://localhost:8000/api/product/${id}`)
    const productFromServiceData = productFromServiceResponse.data;
    console.log(productFromServiceData);
    setEditedProduct({
      title: productFromServiceData.title,
      price: productFromServiceData.price,
      description: productFromServiceData.description
    })
  } 

  useEffect(() => {
    getProductFromService();
  }, []);

  
  const updateProduct = (e) => {
    e.preventDefault();
    const {title, price, description} = editedProduct;
    axios.put(`http://localhost:8000/api/product/edit/${id}`,{
      title,
      price,
      description
    })
      .then(res => console.log(res));
  }

  const onChangeHandler = (e) => {
    const {name, value} = e.target;
    setEditedProduct({
      ...editedProduct,
      [name]:value
    })
  }


  return (
    
    <div>
      <h2>Editando el producto con id: {id}</h2>
      {
        editedProduct&&
        <form onSubmit={updateProduct}>
          <div className="form-group">
            <label>Title: </label>
            <input 
              type="text" 
              name="title" 
              value={editedProduct.title} 
              onChange={onChangeHandler}
            />
          </div>
          <div className="form-group">
            <label>Price: </label>
            <input 
              type="number" 
              name="price" 
              value={editedProduct.price} 
              onChange={onChangeHandler}
            />
          </div>
          <div className="form-group">
            <label>Description: </label>
            <input 
              type="text" 
              name="description" 
              value={editedProduct.description} 
              onChange={onChangeHandler}
            />
          </div>
          <input type="submit" value="ACTUALIZAR" />
        </form>
        
      }
    </div>
  )
}
