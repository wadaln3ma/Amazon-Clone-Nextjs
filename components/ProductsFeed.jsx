import ProductItem from '../components/ProductItem'

const ProductsFeed = ({ products })=>{

  return (
    <div className='grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:-mt-52 mx-auto'>
        
                {products.slice(0,4).map(({id, title, price,description,category, image})=>(
                <ProductItem 
                    key={id}
                    id={id}
                    title={title}
                    price={price}
                    description={description}
                    category={category}
                    image={image} />
                
            ))}

            
            <img className='md:col-span-full' src="/images/adv.jpg" alt="addvert" />
                    <div className='md:col-span-2'>
                    {products.slice(4,5).map(({id, title, price,description,category, image, hasPrime})=>(
                <ProductItem 
                    key={id}
                    id={id}
                    title={title}
                    price={price}
                    description={description}
                    category={category}
                    image={image} />
                
            ))}
            </div>

            {/* last display of products */}
            {products.slice(5,products.length).map(({id, title, price,description,category, image, hasPrime})=>(
                <ProductItem 
                    key={id}
                    id={id}
                    title={title}
                    price={price}
                    description={description}
                    category={category}
                    image={image} />
                
            ))}

        </div>
)}

export default ProductsFeed
