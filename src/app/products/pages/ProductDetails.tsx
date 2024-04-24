import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Product } from "../../../core/products/domain/product.interface";
import { ProductsRepository } from "../../../core/products/infraestructure/products.repository";
import useModal from "../hooks/useModal";
import UploadForm from "../components/uploadForm";

const ProductDetails: React.FC = () => {
  const { isOpen, openModal, closeModal } = useModal();
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState<number>(0);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        if (id) {
          const productsRepository = new ProductsRepository();
          const fetchedProduct = await productsRepository.getProductById(
            parseInt(id)
          );
          setProduct(fetchedProduct);
        }
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };

    fetchProduct();
  }, [id]);

  const handleImageClick = (index: number) => {
    setSelectedImageIndex(index);
  };

  const handleDeleteProduct = async () => {
    try {
      if (id) {
        const productsRepository = new ProductsRepository();
        await productsRepository.deleteProduct(parseInt(id));
        setProduct(null);
        alert(`product ${id} deleted succesfully`);
        navigate("/");
      }
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };
  const handleEditProduct = () => {
    openModal(); // Abre el modal cuando se hace clic en "Edit"
  };

  if (!product) {
    {
      /* Loader */
    }
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="flex flex-row gap-2">
          <div className="w-4 h-4 rounded-full bg-primary animate-bounce"></div>
          <div className="w-4 h-4 rounded-full bg-primary animate-bounce [animation-delay:-.3s]"></div>
          <div className="w-4 h-4 rounded-full bg-primary animate-bounce [animation-delay:-.5s]"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col lg:flex-row lg:items-center">
      <div className="lg:w-1/2 lg:pr-8">
        <img
          src={product.images[selectedImageIndex]}
          className="w- mb-4 lg:mb-0 rounded-lg"
        />
        <div className="flex space-x-4">
          {product.images.map((image, index) => (
            <img
              key={index}
              src={image}
              className={`w-16 h-16 cursor-pointer border ${
                selectedImageIndex === index
                  ? "border-blue-500"
                  : "border-gray-200"
              } rounded`}
              onClick={() => handleImageClick(index)}
            />
          ))}
        </div>
      </div>
      <div className="lg:w-full lg:pl-8">
        <h2 className="text-xl lg:text-3xl font-bold">{product.title}</h2>
        <p className="text-sm lg:text-base text-gray-600">${product.price}</p>
        <p className="text-sm lg:text-base">
          Category: <b>{product.category.name}</b>
        </p>
        <p className="text-sm lg:text-base">About this product:</p>
        <p className="text-sm lg:text-base">{product.description}</p>
        <div className="flex mt-4 justify-center">
        <button className="bg-green-500 text-white px-4 py-2 mr-4 rounded" onClick={handleEditProduct}>Edit</button>
          <button
            className="bg-red-500 text-white px-4 py-2 rounded"
            onClick={handleDeleteProduct}
          >
            Delete
          </button>
        </div>
      </div>
      {isOpen && product && (
        <UploadForm
          isOpen={isOpen}
          closeModal={closeModal}
          productToEdit={product} mode={"edit"}        />
      )}
    </div>
  );
};

export default ProductDetails;
