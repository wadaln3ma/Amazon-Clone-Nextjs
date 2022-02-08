import Header from '../components/Header'
import { CheckCircleIcon } from '@heroicons/react/solid'
import {useRouter} from 'next/router'

const Success = ()=>{
  const router = useRouter()
  return (
    <div className="h-screen bg-gray-100">
      <Header />

      <main className="max-w-screen-lg mx-auto shadow-lg">
        <div className="flex flex-col bg-white p-10">
          <div className="flex items-center mb-5 space-x-2">
            <CheckCircleIcon className="text-green-500 h-10" />
            <h1 className="text-3xl">Thank You, Your order has been confirmed!</h1>
          </div>
          <p className="mb-4">thank you</p>
          <button
            onClick={()=> router.push('/orders')}
            className="btn mb-8">
            Go to my orders
          </button>
        </div>
      </main>
    </div>
)}

export default Success
