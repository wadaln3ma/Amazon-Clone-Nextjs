import Head from 'next/head'
import Header from '../components/Header'
import Banner from '../components/Banner'
import ProductsFeed from '../components/ProductsFeed'
import axios from 'axios'
import { getSession } from 'next-auth/react'

export default function Home({ products }) {

  return (
    <div className="bg-gray-100">
      <Head>
        <title>Amazon</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

        <Header />

      <main className="max-w-screen-xl mx-auto">
        <Banner />

        <ProductsFeed products={products}/>
      </main>

    </div>
  )
}

export const getServerSideProps = async (context)=>{
  const session = await getSession(context)
  const BASE_URL = 'https://fakestoreapi.com/products/'

  const products = await axios.get(BASE_URL)
                              .then(res => res.data)


  return {
    props :{
      products,
      session,
    },
  }
}
