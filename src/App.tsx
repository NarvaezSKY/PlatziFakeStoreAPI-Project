import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductsPage from './app/products/pages/AllProducts';
import ProductDetails from './app/products/pages/ProductDetails'; // Importa el componente ProductDetails
import CategoryList from "./app/categories/pages/AllCategories";
import CategoryProductsPage from "./app/categories/pages/ProductsByCategory";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ProductsPage />} />
        <Route path="/products/:id" element={<ProductDetails />} />
        <Route path="/categories" element={<CategoryList/>} />
        <Route path="/categories/:id" element={<CategoryProductsPage />} />
        <Route path="*" element={<div>404 Not Found</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

