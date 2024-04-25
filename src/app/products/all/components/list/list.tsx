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
      <div className='container mx-auto py-8'>
        {/* <ProductsFilterForm /> */}
        <button
          className='hover:bg-primary text-gray-50 bg-secondary py-2 rounded-md mb-7'
          onClick={openModal}
        >
          Add product
        </button>

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
