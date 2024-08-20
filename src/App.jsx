import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Navbar from "./components/Navbar";
import Account from "./pages/Account";
import Cart from "./pages/Cart";
import CategoryPage from "./components/CategoryPage";
import ProductDetail from "./components/ProductDetail";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/shop/:id" element={<ProductDetail />} />
          <Route path="/account" element={<Account />} />
          <Route path="/account/cart" element={<Cart />} />
        </Routes>
      <Footer />
    </>
  );
}

export default App;
