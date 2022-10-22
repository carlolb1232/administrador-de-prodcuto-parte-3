const ProductController = require('../controllers/product.controller');

module.exports = (app) => {
  app.get('/api/products', ProductController.getAllProducts);  
  app.get('/api/product/:id', ProductController.getOneProduct);
  app.post('/api/product/new', ProductController.createProduct);
  app.put('/api/product/edit/:id', ProductController.updateProduct);
  app.delete('/api/product/delete/:id', ProductController.deleteProduct);
};