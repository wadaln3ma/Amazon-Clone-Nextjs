
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const Banner = ()=>{
  return (
      <div className="relative">
      <div className='absolute w-full h-32 bg-gradient-to-t from-gray-200 to-transparent bottom-0 z-20' />
      <Carousel 
            autoPlay
            infiniteLoop
            showStatus={false}
            showIndicators={false}
            interval={5000}
            showThumbs={false} >

        <div><img alt="" loading="lazy" src={"/images/banner1.jpg"} /></div>
        <div><img alt="" loading="lazy" src={"/images/banner2.jpg"} /></div>
        <div><img alt="" loading="lazy" src={"/images/banner3.jpg"} /></div>

        </Carousel>
      </div>
)}

export default Banner
