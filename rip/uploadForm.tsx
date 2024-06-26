// import React, { useEffect } from 'react'
// import './uploadForm.css'
// import { useForm } from 'react-hook-form'
// import { ProductsRepository } from '../../../core/products/infraestructure/products.repository'
// import { Product } from '../../../core/products/domain/product.interface'

// interface UploadFormProps {
//   isOpen: boolean
//   closeModal: () => void
//   productToEdit?: Product
//   mode: 'add' | 'edit'
// }

// const UploadForm: React.FC<UploadFormProps> = ({
//   isOpen,
//   closeModal,
//   productToEdit,
//   mode
// }) => {
//   const { register, handleSubmit, reset, setValue } = useForm()
//   useEffect(() => {
//     // Set default values if in edit mode and product to edit exists
//     if (mode === 'edit' && productToEdit) {
//       setValue('title', productToEdit.title)
//       setValue('price', productToEdit.price)
//       setValue('description', productToEdit.description)
//       setValue('categoryId', productToEdit.category.id)
//       // Assuming images is a string array, you might need to adjust if it's different
//       setValue('images', productToEdit.images.join(','))
//     }
//   }, [mode, productToEdit, setValue])

//   // eslint-disable-next-line @typescript-eslint/no-explicit-any
//   const onSubmit = async (data: any) => {
//     const productsRepository = new ProductsRepository()
//     try {
//       const images = Array.isArray(data.images) ? data.images : [data.images]
//       const productData = { ...data, images }
//       if (mode === 'edit' && productToEdit) {
//         console.log('editing product', productToEdit)
//         await productsRepository.updateProduct(productToEdit.id, productData)
//       } else {
//         await productsRepository.createProduct(productData)
//         console.log('Product created:', productData)
//       }
//       // await productsRepository.createProduct(productData);
//       closeModal()
//       window.location.reload()
//     } catch (error) {
//       console.error('Error creating product:', error)
//     }
//   }

//   const handleClose = () => {
//     closeModal()
//     reset()
//     console.log('el pepe')
//   }

//   return (
//     <div className={`modal ${isOpen ? 'open' : 'closed'}`}>
//       <div className='modal-overlay'></div>
//       <div className='modal-content'>
//         <form
//           className='px-7 grid justify-center items-center'
//           onSubmit={handleSubmit(onSubmit)}
//         >
//           <b>
//             <h2 className='mb-8'>Upload a Product</h2>
//           </b>
//           <div
//             className='grid gap-6'
//             id='form'
//           >
//             <div className='w-full flex gap-3'>
//               <label>Product Name</label>
//               <input
//                 className='capitalize shadow-2xl p-3 ex w-full outline-none focus:border-solid focus:border-[1px] border-[#035ec5] placeholder:text-gray'
//                 type='text'
//                 placeholder='Product Name'
//                 {...register('title')}
//               />
//               <label htmlFor='Price'>Product Price</label>
//               <input
//                 className='p-3 capitalize shadow-2xl  glass w-full placeholder:text-gray outline-none focus:border-solid focus:border-[1px] border-[#035ec5]'
//                 type='number'
//                 placeholder='Product Price'
//                 {...register('price')}
//               />
//             </div>
//             <div className='grid gap-6 w-full'>
//               <label>Description</label>
//               <textarea
//                 className='p-3 shadow-2xl glass w-full placeholder:text-gray outline-none focus:border-solid border-[#035ec5] focus:border-[1px]'
//                 placeholder='Description'
//                 id='description'
//                 rows={4}
//                 {...register('description')}
//               ></textarea>
//               <label htmlFor='Date'>Select a Category</label>
//               <input
//                 className='capitalize shadow-2xl p-3 ex w-full outline-none focus:border-solid focus:border-[1px] border-[#035ec5] placeholder:text-gray'
//                 type='number'
//                 placeholder='Category'
//                 {...register('categoryId')}
//               />
//               <label htmlFor='Date'>Upload your images</label>
//               <input
//                 className='capitalize shadow-2xl p-3 ex w-full outline-none focus:border-solid focus:border-[1px] border-[#035ec5] placeholder:text-gray'
//                 type='text'
//                 placeholder='Paste your link here'
//                 {...register('images')}
//               />
//             </div>

//             <button className='outline-none glass shadow-2xl  w-full p-3  bg-[#ffffff42] hover:border-[#035ec5] hover:border-solid hover:border-[1px]  hover:text-[#035ec5] font-bold'>
//               Submit
//             </button>
//           </div>
//         </form>
//         <button
//           className='modal-close'
//           onClick={handleClose}
//         >
//           Close
//         </button>
//       </div>
//     </div>
//   )
// }

// export default UploadForm
