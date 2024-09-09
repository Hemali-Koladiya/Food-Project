import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Home from "./Pages/Home";
import Protected from "./Protected";
import Header from "./Component/Header";
import Footer from "./Component/Footer";
import Product from "./Pages/Product";
import Productdetails from "./Pages/Productdetails";
import Cart from "./Pages/Cart";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Protected Cmp={Home} />
              </>
            }
          />
          <Route
            path="/product"
            element={
              <>
                <Protected Cmp={Product} />
              </>
            }
          />
          <Route
            path="/productdetails"
            element={
              <>
                <Protected Cmp={Productdetails} />
              </>
            }
          />
           <Route
            path="/cart"
            element={
              <>
                <Protected Cmp={Cart} />
              </>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/header" element={<Header />} />
          <Route path="/footer" element={<Footer />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
