import './App.css';
import Main from './Views/Main';
import { Routes, Route, Outlet, Link } from "react-router-dom";
import Product from './Views/Product';
import Update from './Views/Update';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' exact element={<Main />}/>
        <Route path='/:id' exact element={<Product />} />
        <Route path='/edit/:id' exact element={<Update />}/>
      </Routes>
    </div>
  );
}

export default App;
