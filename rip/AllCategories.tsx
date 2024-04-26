// import { useEffect } from 'react'
// import { useSetCategories, useCategories } from '../store/use.categories.store'
// import { CategoryRepository } from '../../../core/categories/infraestructure/categories.repository'
// import { Link } from 'react-router-dom'
// import { Category } from '../../../core/categories/domain/category.interface'
// import UploadForm from '../components/uploadForm'
// import useModal from '../hooks/useModal'

// const CategoryCard = ({ category }: { category: Category }) => (
//   <Link to={`/categories/${category.id}`}>
//     <div className='relative group cursor-pointer overflow-hidden duration-500 w-64 h-80 bg-secondary text-gray-50 p-5'>
//       <div className='w-full '>
//         <div className='group-hover:scale-110 w-full h-60 bg-blue-400 duration-500'>
//           <img
//             className='h-full w-full object-cover'
//             src={category.image}
//             alt={category.name}
//           />
//         </div>
//         <div className='absolute w-56 left-0 p-5 -bottom-16 duration-500 group-hover:-translate-y-12'>
//           <div className='absolute -z-10 left-0 w-64 h-28 opacity-0 duration-500 group-hover:opacity-50 group-hover:bg-blue-900'></div>
//           <span className='text-xl font-bold mb-8'>{category.name}</span>
//           <p className='group-hover:opacity-100 w-full duration-500 opacity-0 mt-8'>
//             Go to products
//           </p>
//         </div>
//       </div>
//     </div>
//   </Link>
// )

// const CategoryList = () => {
//   const setCategories = useSetCategories()
//   const categories = useCategories()

//   useEffect(() => {
//     const fetchCategories = async () => {
//       try {
//         const categoriesRepository = new CategoryRepository()
//         const categories = await categoriesRepository.getAllCategories()
//         setCategories(categories)
//       } catch (error) {
//         console.error('Error obteniendo categorías:', error)
//       }
//     }

//     fetchCategories()
//   }, [setCategories])
//   const { isOpen, openModal, closeModal } = useModal()

//   return (
//     <div className='container mx-auto py-8'>
//       <div className='flex flex-col items-center'>
//         <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-center'>
//           {categories.map((category) => (
//             <CategoryCard
//               key={category.id}
//               category={category}
//             />
//           ))}
//           <button
//             className=' hover:bg-primary text-gray-50 bg-secondary rounded-md w-full sm:w-auto'
//             onClick={openModal}
//           >
//             Add Category
//           </button>
//         </div>
//         <UploadForm
//           isOpen={isOpen}
//           closeModal={closeModal}
//         />
//       </div>
//     </div>
//   )
// }

// export default CategoryList
