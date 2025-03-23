
// import products from '../path/to/products' // Adjust the import path as necessary
import Title from './Title'
import 'swiper/css';



// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Item from './Item';


import { useContext, useEffect, useState } from 'react';
import { ShopContext } from './context/ShopContext'






const NewArrivals = () => {
  const [PopularProducts, setPopularProducts] = useState([])
  const { products }:any = useContext(ShopContext)

  useEffect(() => {
    const data = products.slice(0, 7);
    console.log("data",data);
    setPopularProducts(data);
  
  }, [products]);
  return (
    <section className='max-padd-container pt-16'>
      <Title title={'New'} title2={'Arrivals'} titleStyles={'pb-14'} paraStyles={'!block !pb-10'} />
      {/* Container */}
      <Swiper
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        breakpoints={{
          300: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          666: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          900: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
          1300: {
            slidesPerView: 5,
            spaceBetween: 30,
          },
        }}

        modules={[Autoplay]}
        className="h-[500 px]"
      >{PopularProducts.map((product) => (
        <SwiperSlide key={product._id}>
          <Item product={product} />
        </SwiperSlide>

      ))
        }




      </Swiper>

    </section>
  )
}

export default NewArrivals

