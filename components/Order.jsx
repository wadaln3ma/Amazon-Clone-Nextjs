import moment from 'moment'
import Currency from 'react-currency-formatter'

const Order = ({ order })=>{
  const { id, amount, amountShipping, items, timestamp, images } = order
  return (
    <div className="relative border rounded-md">
      <div className="flex items-center bg-gray-100 text-sm text-gray-600 p-5 space-x-10">
        <div>
          <p className="text-xs font-bold">ORDER PLACED</p>
          <p>{moment.unix(timestamp).format("DD MM YYYY")}</p>
        </div>
        <div>
          <p className="text-xs font-bold">TOTAL</p>
          <p>
            <Currency quantity={amount} currency="AED" /> - Next day delivery {" "}
            <Currency quantity={amountShipping} currency="AED" />
          </p>
        </div>

        <p className="flex-1 self-end text-blue-500 text-sm sm:text-xl text-right whitespace-nowrap">
          {items.length} items
        </p>

        <p className="absolute top-2 right-2 w-40 truncate whitespace-nowrap lg:w-72 text-xs">
          ORDER # {id}
        </p>
      </div>

      <div className="p-5 sm:p-10">
        <div className="flex space-x-6 overflow-x-auto">
          {images.map((image, i) =>(
            <img key={i} alt="" src={image} className="h-20 sm:h32 object-contain" />
          ))}
        </div>
      </div>
    </div>
)}

export default Order
