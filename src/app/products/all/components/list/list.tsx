/* eslint-disable react-hooks/exhaustive-deps */
// import { ProductsFilterForm } from '../filters/products-filter-form'
import useModal from '../add/hooks/useModal'
import { useProductStore } from '../../../store/use.products.store'
import { ProductCard } from './components'
import UploadForm from '../add/add'
import { useState, useEffect } from 'react'

export const List = () => {
  const { openModal, isOpen, closeModal } = useModal()
  const { products, loading, getAllProducts } = useProductStore()
  const [currentPage, setCurrentPage] = useState(1)

  const loadProducts = async () => {
    const offset = (currentPage - 1) * 10
    getAllProducts({ offset, limit: 10 })
  }

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1)
    }
  }

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1)
  }

  useEffect(() => {
    loadProducts()
  }, [currentPage])

  return (
    <>
      <h1 className='m-8'>All our products:</h1>
      <button
        className='hover:bg-primary text-gray-50 bg-secondary py-2 rounded-md mb-10'
        onClick={openModal}
      >
        Add product
      </button>
      <div className='container mx-auto py-8 bg-white rounded-md shadow-xl mb-10'>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-center'>
          {loading ? (
            <p>Loading...</p>
          ) : (
            products.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
              />
            ))
          )}
        </div>

        <div className='flex justify-center mt-4'>
          <button
            onClick={handlePrevPage}
            disabled={currentPage === 1}
            className='mr-4 px-3 py-1 bg-gray-200 rounded bg-primary text-white'
          >
            Previous
          </button>
          <button
            onClick={handleNextPage}
            className='px-3 py-1 bg-gray-200 rounded bg-primary text-white'
          >
            Next
          </button>
        </div>
      </div>

      <UploadForm
        isOpen={isOpen}
        closeModal={closeModal}
        mode='add'
        productToEdit={undefined}
      />
    </>
  )
}
