const { response, json, request } = require("express");
const { Product } = require("../models/product.model");


module.exports.createProduct = (request, response) => {
  const { title, price, description } = request.body;
  Product.create({
    title,
    price,
    description
  })
    .then(product=>response.json(product))
    .catch(err=>response.json(err))
};

module.exports.getAllProducts = (request, response) => {
  Product.find({})
    .then(products=>response.json(products))
    .catch(err=>response.json(err));
}

module.exports.getOneProduct = (request, response) => {
  const { id } = request.params
  Product.findOne({_id:id})
    .then(product => response.json(product))
    .catch(err => response.json(err))
}

module.exports.updateProduct = (request, response) => {
  Product.findByIdAndUpdate({_id: request.params.id}, request.body, {new:true})
    .then(updatedProduct => response.json(updatedProduct))
    .catch(err => response.json(err))
}

module.exports.deleteProduct = (request, response) => {
  const { id } = request.params;
  Product.deleteOne({_id: id})
    .then(deleteConfirmation => response.json(deleteConfirmation))
    .catch(err => response.json(err))
}