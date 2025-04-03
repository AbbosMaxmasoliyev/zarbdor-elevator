import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import AboutUs from "./pages/AboutUs";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Products from "./pages/Products";
import News from "./pages/News";
import NewsDetail from "./pages/NewsDetail";
import Pages from "./pages/Pages";
import SiteMap from "./pages/SiteMap";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<AboutUs />} />
            <Route path="products" element={<Products />} />
            <Route path="news" element={<News />} />
            <Route path="news-detail/:slug" element={<NewsDetail />} />
            <Route path="sahifa/:page" element={<Pages />} />
            <Route path="sayt-xaritasi" element={<SiteMap />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
