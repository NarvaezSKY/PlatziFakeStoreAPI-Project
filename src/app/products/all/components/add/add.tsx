import React, { useEffect } from 'react'
import './styles/uploadForm.css'
import { useForm } from 'react-hook-form'
// import { ProductsRepository } from '../../../../../core/products/infraestructure/products.repository'
import { useProductStore } from '../../../store/use.products.store'
import { IUpdateProductReq } from '../../../../../core/new-products/domain/update-products'

interface UploadFormProps {
  isOpen: boolean
  closeModal: () => void
  productToEdit?: IUpdateProductReq
  mode: 'add' | 'edit'
}

const UploadForm: React.FC<UploadFormProps> = ({
  isOpen,
  closeModal,
  productToEdit,
  mode
}) => {
  const { register, handleSubmit, reset, setValue } = useForm()
  useEffect(() => {
    if (mode === 'edit' && productToEdit) {
      setValue('title', productToEdit.title)
      setValue('price', productToEdit.price)
      setValue('description', productToEdit.description)
      setValue('categoryId', productToEdit.categoryId)

      setValue('images', productToEdit.images.join(','))
    }
  }, [mode, productToEdit, setValue])

  const { createProduct, updateProduct } = useProductStore()

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onSubmit = async (data: any) => {
    try {
      const images = Array.isArray(data.images) ? data.images : [data.images]
      const productData = { ...data, images }
      if (mode === 'edit' && productToEdit) {
        console.log('editing product', productToEdit)
        updateProduct(productToEdit.id, productData)
      } else {
        createProduct(productData)
        console.log('Product created:', productData)
      }
      closeModal()
    } catch (error) {
      console.error('Error creating product:', error)
    }
  }

  const handleClose = () => {
    closeModal()
    reset()
  }

  return (
    <div className={`modal ${isOpen ? 'open' : 'closed'}`}>
      <div className='modal-overlay'></div>
      <div className='modal-content'>
        <form
          className='px-7 grid justify-center items-center'
          onSubmit={handleSubmit(onSubmit)}
        >
          <b>
            <h2 className='mb-8'>Upload a Product</h2>
          </b>
          <div
            className='grid gap-6'
            id='form'
          >
            <div className='w-full flex gap-3'>
              <label>Product Name</label>
              <input
                className='capitalize shadow-2xl p-3 ex w-full outline-none focus:border-solid focus:border-[1px] border-[#035ec5] placeholder:text-gray'
                type='text'
                placeholder='Product Name'
                {...register('title')}
              />
              <label htmlFor='Price'>Product Price</label>
              <input
                className='p-3 capitalize shadow-2xl  glass w-full placeholder:text-gray outline-none focus:border-solid focus:border-[1px] border-[#035ec5]'
                type='number'
                placeholder='Product Price'
                {...register('price')}
              />
            </div>
            <div className='grid gap-6 w-full'>
              <label>Description</label>
              <textarea
                className='p-3 shadow-2xl glass w-full placeholder:text-gray outline-none focus:border-solid border-[#035ec5] focus:border-[1px]'
                placeholder='Description'
                id='description'
                rows={4}
                {...register('description')}
              ></textarea>
              <label htmlFor='Date'>Select a Category</label>
              <input
                className='capitalize shadow-2xl p-3 ex w-full outline-none focus:border-solid focus:border-[1px] border-[#035ec5] placeholder:text-gray'
                type='number'
                placeholder='Category'
                {...register('categoryId')}
              />
              <label htmlFor='Date'>Upload your images</label>
              <input
                className='capitalize shadow-2xl p-3 ex w-full outline-none focus:border-solid focus:border-[1px] border-[#035ec5] placeholder:text-gray'
                type='text'
                placeholder='Paste your link here'
                {...register('images')}
              />
            </div>

            <button className='outline-none glass shadow-2xl  w-full p-3  bg-[#ffffff42] hover:border-[#035ec5] hover:border-solid hover:border-[1px]  hover:text-[#035ec5] font-bold'>
              Submit
            </button>
          </div>
        </form>
        <button
          className='modal-close'
          onClick={handleClose}
        >
          Close
        </button>
      </div>
    </div>
  )
}

export default UploadForm
