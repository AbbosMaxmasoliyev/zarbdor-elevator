import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import AboutUs from "./pages/AboutUs";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Products from "./pages/Products";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<AboutUs />} />
            <Route path="products" element={<Products />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
