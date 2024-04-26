import { Link } from "react-router-dom";
import { IGetAllCategoriesRes } from "../../../../../../core/new-categories/domain/get-all-categories";

export const CategoryCard = ({ category }: { category: IGetAllCategoriesRes }) => (
    <Link to={`/categories/${category.id}`}>
      <div className='relative group cursor-pointer overflow-hidden duration-500 w-64 h-80 bg-secondary text-gray-50 p-5'>
        <div className='w-full '>
          <div className='group-hover:scale-110 w-full h-60 bg-blue-400 duration-500'>
            <img
              className='h-full w-full object-cover'
              src={category.image}
              alt={category.name}
            />
          </div>
          <div className='absolute w-56 left-0 p-5 -bottom-16 duration-500 group-hover:-translate-y-12'>
            <div className='absolute -z-10 left-0 w-64 h-28 opacity-0 duration-500 group-hover:opacity-50 group-hover:bg-blue-900'></div>
            <span className='text-xl font-bold mb-8'>{category.name}</span>
            <p className='group-hover:opacity-100 w-full duration-500 opacity-0 mt-8'>
              Go to products
            </p>
          </div>
        </div>
      </div>
    </Link>
  )