import React, { useState } from 'react'
import axios from 'axios';

export default function ProductForm() {
  
  const [newProduct, setNewProduct] = useState({
    title:"",
    price: 0,
    description:""
  });

  const onChangeHandler = (e) => {
    const { value, name } = e.target;
    setNewProduct({
      ...newProduct,
      [name]: value
    })
  }

  const onSubmitHandler = (e) => {
    e.preventDefault();
    const { title, price, description } = newProduct;
    axios.post('http://localhost:8000/api/product/new',{
      title,
      price,
      description
    })
      .then(res=>console.log("Response: ", res))
      .catch(err=>console.log("error: ", err))
  }


  
  return (
    <div>
      <form onSubmit={onSubmitHandler}>
        <div className="form-group">
          <label>Title: </label>
          <input type="text" name='title' onChange={onChangeHandler}/>
        </div>
        <div className="form-group">
          <label>Price: </label>
          <input type="number" name='price'onChange={onChangeHandler}/>
        </div>
        <div className="form-group">
          <label>Description: </label>
          <input type="text" name='description' onChange={onChangeHandler}/>
        </div>
        <input type="submit" value="CREATE" />
      </form>
    </div>
  )
}
