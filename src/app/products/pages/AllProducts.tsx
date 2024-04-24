import { useEffect } from "react";
import { useSetProducts, useProducts } from "../store/use.products.store";
import { ProductsRepository } from "../../../core/products/infraestructure/products.repository";
import { Link } from "react-router-dom";
import { Product } from "../../../core/products/domain/product.interface";
import UploadForm from "../components/uploadForm";
import useModal from "../hooks/useModal";

const ProductCard = ({ product }: { product: Product }) => (
  <div className="w-70 h-80 bg-gray-50 p-3 flex flex-col gap-1 rounded-md">
    <div className="h-48 bg-gray-200 rounded-md">
      <img
        className="h-full w-full object-cover rounded-xl"
        src={product.images[0]}
        alt={product.title}
      />
    </div>
    <div className="flex flex-col gap-2">
      <div className="flex flex-col">
        <span className="text-md font-bold truncate">
          {product.title.length > 25
            ? product.title.slice(0, 19) + "... "
            : product.title}
        </span>
      </div>

      <p className="font-bold text-red-600">${product.price}</p>
      <Link to={`/products/${product.id}`}>
        <button className="hover:bg-primary text-gray-50 bg-secondary py-2 rounded-md">
          See more
        </button>
      </Link>
    </div>
  </div>
);

const ProductList = () => {
  const setProducts = useSetProducts();
  const products = useProducts();
  const { isOpen, openModal, closeModal } = useModal();

  useEffect(() => {
    console.log(products)
    const fetchProducts = async () => {
      try {
        const productsRepository = new ProductsRepository();
        const products = await productsRepository.getAllProducts();
        setProducts(products);
      } catch (error) {
        console.error("Error obteniendo productos:", error);
      }
    };

    fetchProducts();
  }, [setProducts]);

  return (
    <>
      <div className="container mx-auto py-8">
        <button
          className="hover:bg-primary text-gray-50 bg-secondary py-2 rounded-md mb-7"
          onClick={openModal}
        >
          Add product
        </button>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-center">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
      <UploadForm
        isOpen={isOpen}
        closeModal={closeModal}
        productToEdit={null}
        mode="add"
      />
    </>
  );
};

export default ProductList;
