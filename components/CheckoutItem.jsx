import Image from "next/image"
import { StarIcon } from '@heroicons/react/solid'
import Currency from 'react-currency-formatter'
import {useDispatch} from "react-redux"
import { removeFromBasket } from "../features/basketSlice"


const CheckoutItem = ({id, title, price, rating, description,category, image, hasPrime})=>{
  const dispatch = useDispatch()
  const removeItemFromBasket = ()=>{
    dispatch(removeFromBasket({ id }))
  }
  return (
    <div className="grid grid-cols-5">
      <Image alt="" src={image} width={200} height={200} objectFit='contain' />
      <div className="col-span-3 mx-5">
        <p>{title}</p>
        <div className="flex">
          {Array(rating).fill().map((_, i) =>(
            <StarIcon key={i} className="h-5 text-yellow-500" />
          ))}
        </div>
        <p className="line-clamp-3 my-2 text-xs">
          {description}
        </p>
          <Currency currency="USD" quantity={price} />
          { hasPrime && (
              <div className="flex items-center space-x-2">
                <Image alt="" src="/images/prime-tag.png" height={30} width={30} objectFit="contain" />
                <p className="text-xs text-gray-500">Free Next Day Delivery</p>
              </div>
          )}
      </div>
      <div className="flex flex-col my-auto justify-self-end">
        <button className="btn" onClick={removeItemFromBasket}>Remove from Basket</button>
      </div>
    </div>    
)}

export default CheckoutItem 
