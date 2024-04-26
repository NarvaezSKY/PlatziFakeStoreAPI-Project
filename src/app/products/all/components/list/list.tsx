// import { ProductsFilterForm } from '../filters/products-filter-form'
import useModal from '../add/hooks/useModal'
import { useProductStore } from '../../../store/use.products.store'
import { ProductCard } from './components'
import UploadForm from '../add/add'

export const List = () => {
  const { products } = useProductStore()

  const { openModal, isOpen, closeModal } = useModal()

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
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}
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
