import Image from "next/image"
import { MenuIcon, SearchIcon, ShoppingCartIcon } from '@heroicons/react/outline'

const Header = ()=>{
  return (
    <header>
      {/*header top*/}
      <div className="bg-amazon_blue flex items-center flex-grow p-1 py-2">
        <div className="flex items-center flex-grow mt-2 mr-4 sm:flex-grow-0">
          <Image alt="" src={"/images/Amazon_logo.svg"} height={40} width={150}
            objectFit="contain"
            className="cursor-pointer" />
        </div>

        <div className="hidden sm:flex flex-grow items-center h-10 rounded-md bg-yellow-400 hover:bg-yellow-500 cursor-pointer">
          <input type="text" className="flex-grow flex-shrink w-6 h-full p-2 rounded-l-md cursor-pointer focus:outline-nonepx-4" />
          <SearchIcon className="h-12 p-4 text-white"/>
        </div>

        <div className="flex items-center mx-6 space-x-6 text-xs text-white whitespace-nowrap">
          <div className="link">
            <p>Hello Abdulrahmn</p>
            <p className="font-extrabold md:text-sm">{'Account & Lists'}</p>
          </div>
          <div className="link">
            <p>Returns</p>
            <p className="font-extrabold md:text-sm">{'& Orders'}</p>
          </div>
          <div className="link relative flex items-center">
            <span className="absolute h-4 w-4 right-0 top-0 sm:right-10 bg-yellow-400 text-black text-center font-bold rounded-full">
              0
            </span>
            <ShoppingCartIcon className="h-10" />
            <p className="font-extrabold md:text-sm hidden md:inline mt-2">Basket</p>
          </div>
        </div>

      </div>

      {/*header top*/}
      <div className="flex items-center text-sm sm:text-base pl-3 sm:pl-6 p-2 space-x-3 bg-amazon_blue-light text-white whitespace-nowrap">
        <p className="link flex items-center">
          <MenuIcon className="h-6 mr-1"/>
          All
        </p>
        <p className="link">Prime Videos</p>
        <p className="link">Amazon Business</p>
        <p className="link">{"Today's Deals"}</p>
        <p className="link hidden lg:inline-flex">Electronics</p>
        <p className="link hidden lg:inline-flex">{'Food & Grocery'}</p>
        <p className="link hidden lg:inline-flex">Prime</p>
        <p className="link hidden lg:inline-flex">Buy Again</p>
        <p className="link hidden lg:inline-flex">Shop Again</p>
        <p className="link hidden lg:inline-flex">{'Health & Personal Care'}</p>
      </div>
    </header>
)}

export default Header
