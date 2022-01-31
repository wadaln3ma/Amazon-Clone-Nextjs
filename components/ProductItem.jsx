
import {useState} from 'react'
import Image from 'next/image'
import Currency from 'react-currency-formatter';
import {StarIcon} from '@heroicons/react/solid'

const MAX_RATING = 5;
const MIN_RATING = 1;

const ProductItem = ({ id, title, price, description,category, image })=>{

  const [rating] = useState(
        Math.floor(Math.random()*(MAX_RATING - MIN_RATING)+1)+MIN_RATING
        );
        const [hasPrime] = useState(Math.floor(Math.random() < 8.5))
        return (
          <div className='relative flex flex-col m-5 bg-white z-30 p-10  '>

            <p className='absolute top-2 right-2 text-xs italic text-gray-400'>{category}</p>
            <h4 className='my-3 text-yellow-500'>{title}</h4>
            <Image alt="" src={image} height={200} width={200} objectFit='contain' />
            <h4>{title}</h4>
            <div className='mb-2'>
            <Currency quantity={price} currency="USD"   />
            </div>

            <div className='flex'> 
                {Array(rating).fill().map((_,i)=>(
                    <StarIcon key={i} className='h-5 text-yellow-400'/>
                ))}
            </div>
            <p className='text-xs my-2 line-clamp-2'>{description}</p>
                    {hasPrime && (
                        <div className='flex items-center -mt-5 space-x-2' >
                             <img className='w-12' src="/images/prime-tag.png" alt="prime" />
                             <p className='text-gray-500 text-xs'>Free on Next-day Delivery</p>
                             </div>
                    )}
                    <button className='btn'>Add to basket</button>
      </div>  
)}

export default ProductItem
