import Image from 'next/image'
import {useSelector} from 'react-redux'
import Header from '../components/Header'
import CheckoutItem from '../components/CheckoutItem'
import {useSession} from 'next-auth/react'
import Currecncy from 'react-currency-formatter'

const Checkout = ()=>{
  const products = useSelector(state => state.basket.value)
  const total = products.reduce((total, item) => total + item.price, 0)
  const {data : session} = useSession()
  
  return (
    <div className="bg-gray-100">
      <Header />

      <main className="lg:flex max-w-screen-2xl mx-auto">
        {/** left*/}
        <div className="flex-grow m-5 shadow-sm">
          <Image alt="" src={'/images/Prime-day-banner.png'}
                 width={1020}
                 height={250}
                 objectFit="contain" />

          <div className="flex flex-col p-5 bg-white space-y-10">
            <h1 className="text-xl sm:text-3xl border-b pb-3 font-bold">
              { products.length === 0 ? 'Your Shopping Cart is Empty' : 'Shopping Cart' }
            </h1>
          
          { products.map(({id, title, price, rating, description,category, image, hasPrime}, i) =>(
              <CheckoutItem key={i} 
                            id={id}
                            title={title}
                            price={price}
                            rating={rating}
                            description={description}
                            category={category}
                            hasPrime={hasPrime}
                            image={image}/>
           ))}
          </div>

        </div>


        {/** right */}
        <div className="flex flex-col p-10 bg-white shadow-md">
          { products.length > 0 && (
            <div className="flex flex-col">
              <h2 className="whitespace-nowrap">
                Subtotal ({products.length} items):
                <span className="ml-2 font-bold">
                  <Currecncy quantity={total} currency='USD' />
                </span>
              </h2>
              <button
                    disabled={!session}
                    className={`mt-2 ${session ? 'btn' : 'btn_disabled'}`} >
                        {!session ? "Sign in to checkout"
                                : "Proceed to checkout"}
              </button>
            </div>
          )}
        </div>

      </main>
    </div>
)}

export default Checkout
