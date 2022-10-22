const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/productsdb', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(()=>console.log("La conexión a la base de datos fue establecida"))
  .catch(err=>console.log("Ocurrió un error", err))