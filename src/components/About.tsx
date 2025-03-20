import React from 'react'
import Title from './Title'
import testimonial from "../assets/testimonial.png"
import { TbLocation } from 'react-icons/tb'
import { RiAdminLine,RiSecurePaymentLine, RiSoundModuleLine } from 'react-icons/ri'
import { FaQuoteLeft, FaUsersLine } from 'react-icons/fa6'
import about from "../assets/about.png"
const About = () => {
  return (
    <section className='max-padd-container py-16'>
      {/* Container */}
      <div className='flex flex-col md:flex-row gap-5 gap-y-10'>
         {/* Testimonial */}
        <div className='flex flexCenter flex-col'>
          <Title title={'People'} title2={'Says'} titleStyles={"h3"} paraStyles={''}  />
          <img src={testimonial} alt="testimonial" height={55} width={55} className='rounded-full' />
          <h4 className='h4 mt-6'>John Doe</h4>
          <p className='relative bottom-2'>CEO at MobileExpo</p>
          <FaQuoteLeft className='text-3xl' />
          <p className='max-w-[222px] mt-5 text-center'>Great experience! Friendly staff, excellent selection, and reasonable prices. Highly recommend!</p>
        </div>
        {/* Banner */}
        <div className='flex-[2] flex-rounded-2xl relative'>
          <img src={about} alt="" className='rounded-2xl' />
          <div className='absolute h-full w-full bg-white/20 top-0 left-0 '>
          <div className='absolute top-1/2 left-1/2  -translate-x-1/2 -translate-y-1/2 bg-white/80 p-6 rounded-xl'>
          <h4 className='bold-18 text-center'>
              Top view in this <br />
              week
            </h4>
            <h2 className='h2 uppercase'>Trending</h2>
          </div>
            
          </div>
        </div>
        {/* About */}
        <div className='flex-[1] flexCenter flex-col'>
        <Title title={'About'} title2={'Us'} titleStyles={"h3"} paraStyles={''}  />
        <div className='flex flex-col item-start'>
          <div className='flexCenter gap-3 mb-3 !justify-start'>
            <RiSecurePaymentLine className='text-xl' />
            <div>
              <h5 className="h5">Fast & Secure</h5>
              <p>Optimized performance</p>
            </div>
          </div>

          <div className='flexCenter gap-3 mb-3 !justify-start'>
            <RiSoundModuleLine className='text-xl' />
            <div>
              <h5 className="h5">Advanced Filtering</h5>
              <p>Find items quickly</p>
            </div>
          </div>

          <div className='flexCenter gap-3 mb-3 !justify-start'>
            <FaUsersLine className="text-xl" />
            <div>
              <h5 className="h5">User Reviews</h5>
              <p>Ratings and feedbacks</p>
            </div>
          </div>

          <div className='flexCenter gap-3 mb-3 !justify-start'>
            <TbLocation className="text-xl"/>
            <div>
              <h5 className="h5">Order Tracking</h5>
              <p>Live order status</p>
            </div>
          </div>

          <div className='flexCenter gap-3 mb-3 !justify-start'>
            <RiAdminLine className="text-xl" />
            <div>
              <h5 className="h5">Admin Dashboard</h5>
              <p>Manage store easily</p>
            </div>
          </div>

        </div>
        </div>
      </div>
    </section>
  )
}

export default About