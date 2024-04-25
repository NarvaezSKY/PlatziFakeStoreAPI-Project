import { useProductsFilterForm } from './hooks/use-products-filter-form'

export const ProductsFilterForm = () => {
  const { methods } = useProductsFilterForm()

  return (
    <form className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 p-4  shadow-md'>
      <input
        {...methods.register('title')}
        placeholder='Title'
        type='text'
      />

      <input
        {...methods.register('price_min')}
        placeholder='Price min'
        type='number'
      />

      <input
        {...methods.register('price_max')}
        placeholder='Price max'
        type='number'
      />

      <input
        {...methods.register('categoryId')}
        placeholder='Category'
        type='number'
      />

      <input
        {...methods.register('limit')}
        placeholder='Limit'
        type='number'
      />

      <input
        {...methods.register('offset')}
        placeholder='Offset'
        type='number'
      />
    </form>
  )
}
