const express = require('express');
const app = express();

const cors = require('cors');
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({extended:true}));

require('./server/config/mongoose.config');

const productRoutes = require('./server/routes/product.routes');
productRoutes(app);

app.listen(8000, ()=>{
  console.log("Puerto abierto correctamente")
})

