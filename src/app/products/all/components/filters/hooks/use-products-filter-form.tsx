import { useForm } from 'react-hook-form'
import { IFormValues, filterSchema } from '../models'
import { yupResolver } from '@hookform/resolvers/yup'
import { useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { IGetAllProductsReq } from '../../../../../../core/new-products/domain/get-all-products'
import { useProductStore } from '../../../../store/use.products.store'

export const useProductsFilterForm = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const methods = useForm<IFormValues>({
    defaultValues: {
      categoryId: searchParams.get('categoryId') || '',
      limit: searchParams.get('limit') || '',
      offset: searchParams.get('offset') || '',
      price_max: searchParams.get('price_max') || '',
      price_min: searchParams.get('price_min') || '',
      title: searchParams.get('title') || ''
    },
    resolver: yupResolver(filterSchema)
  })

  const { categoryId, limit, offset, price_max, price_min, title } =
    methods.watch()

  const onChange = async () => {
    const params = new URLSearchParams()

    categoryId && params.append('categoryId', categoryId)
    limit && params.append('limit', limit)
    offset && params.append('offset', offset)
    price_max && params.append('price_max', price_max)
    price_min && params.append('price_min', price_min)
    title && params.append('title', title)

    setSearchParams(params.toString())
  }

  useEffect(() => {
    onChange()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [categoryId, limit, offset, price_max, price_min, title])

  const { getAllProducts } = useProductStore()

  useEffect(() => {
    const body: IGetAllProductsReq = {
      categoryId: searchParams.get('categoryId')
        ? parseInt(searchParams.get('categoryId') || '0')
        : undefined,
      limit: searchParams.get('limit')
        ? parseInt(searchParams.get('limit') || '0')
        : undefined,
      offset: searchParams.get('offset')
        ? parseInt(searchParams.get('offset') || '0')
        : undefined,

      price_max: searchParams.get('price_max')
        ? parseInt(searchParams.get('price_max') || '0')
        : undefined,
      price_min: searchParams.get('price_min')
        ? parseInt(searchParams.get('price_min') || '0')
        : undefined,
      title: searchParams.get('title') || undefined
    }

    getAllProducts(body)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams])

  return {
    methods
  }
}
