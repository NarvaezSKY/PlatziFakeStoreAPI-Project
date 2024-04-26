import { BrowserRouter, Routes, Route } from 'react-router-dom'
// import ProductsPage from './app/products/pages/AllProducts'
import ProductDetails from './app/products/details/index' // Importa el componente ProductDetails
import AllCategoriesPage from './app/categories/all'
import CategoryProductsPage from './app/categories/productsByCategory/ProductsByCategory'
import AllProductsPage from './app/products/all'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path='/'
          element={<AllProductsPage />}
        />
        <Route
          path='/products/:id'
          element={<ProductDetails />}
        />
        <Route
          path='/categories'
          element={<AllCategoriesPage />}
        />
        <Route
          path='/categories/:id'
          element={<CategoryProductsPage />}
        />
        <Route
          path='*'
          element={<div>404 Not Found</div>}
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App
