import {getSession, useSession} from "next-auth/react"
import Header from "../components/Header"
import db from "../firebase"
import moment from 'moment'
import Order from '../components/Order'
import { collection, getDocs } from "firebase/firestore"

const Orders = ({ orders })=>{
//  console.log(orders)
  const { data : session } = useSession()
  return (
    <div>
      <Header />

      <main className="max-w-screen-lg p-10 mx-auto">
        <h1 className="text-3xl border-b border-yellow-400 pb-1 mb-2 shadow-md">Your Orders</h1>

        
        {session ? (<h2>{orders?.length} Orders</h2>) : (<h2>Please sign in to see your orders</h2>)}
        
        <div className="mt-5 space-x-4">
          {orders?.map(order => (<Order key={order.id} order={order}/>))}
      </div>
          
      
      </main>
    </div> 
)}

export default Orders


export const getServerSideProps = async (context)=>{
  const session = await getSession(context)
  const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)

  if(!session) return { props : {} }
  

  const ordersRef = collection(db, `users/${session.user.email}/orders`)


  const orders = await getOrders(session, stripe, ordersRef)
          

    return {
      props : {
        orders,
      },
    }

}

const getOrders = async (session, stripe, ref)=>{
  const ordersFirestore = []
  const orderSnapchot = await getDocs(ref)
    orderSnapchot.forEach(async order =>ordersFirestore.push(({
    id : order.id,
    amount : order.data().amount,
    amountShipping : order.data().amount_shipping,
    images : order.data().images,
    timestamp : moment(order.data().timestamp.toDate()).unix(),
  
    })))
  const orders = Promise.all(
    ordersFirestore.map(async order =>({
      ...order,
      items : (
        await stripe.checkout.sessions.listLineItems(order.id, {limit:30}))
    }))
)

  return orders
}
