import useModal from '../../hooks/useModal'
import UploadForm from '../uploadForm/uploadForm'
import { CategoryCard } from './components'
import { useCategoryStore } from '../../../store/use.category.store'
import { useEffect } from 'react'

const CategoryList = () => {
  const { categories, getAllCategories } = useCategoryStore()
  useEffect(() => {
    getAllCategories()
  }),
    []

  const { isOpen, openModal, closeModal } = useModal()

  return (
    <div className='container mx-auto py-8'>
      <div className='flex flex-col items-center'>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-center'>
          {categories.map((category) => (
            <CategoryCard
              key={category.id}
              category={category}
            />
          ))}
         
        </div>
        <UploadForm
          isOpen={isOpen}
          closeModal={closeModal}
        />
      </div>
      <button
            className=' hover:bg-primary text-gray-50 bg-secondary rounded-md w-full sm:w-auto mt-10'
            onClick={openModal}
          >
            Add Category
          </button>
    </div>
  )
}

export default CategoryList
