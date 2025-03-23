import React from 'react'
import { RiSecurePaymentLine } from 'react-icons/ri'
import { TbArrowBack, TbArrowBackUp, TbArrowRight, TbTruckDelivery } from 'react-icons/tb'

export const ProductFeatures = () => {
    return (
        <div className='bg-primary rounded-xl mt-6'>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 rounded-xl'>
                <div className='flexCenter gap-x-4 p-2 rounded-3xl'>
                    <div className='text-3xl'>
                        <TbArrowBackUp
                            className='mb-3 text-yellow-500'
                        />
                    </div>
                    <div>
                        <h4 className='h4 capitalize'>Easy Return</h4>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis culpa ipsum iusto illum, exercitationem tempore esse. Tenetur, iure quas similique dicta voluptas quibusdam natus earum praesentium nobis voluptatem quisquam qui!</p>
                    </div>
                </div>

                <div className='flexCenter gap-x-4 p-2 rounded-3xl'>
                    <div className='text-3xl'>
                        <TbTruckDelivery
                            className='mb-3 text-red-500'
                        />
                    </div>
                    <div>
                        <h4 className='h4 capitalize'>Fast Delivery</h4>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis culpa ipsum iusto illum, exercitationem tempore esse. Tenetur, iure quas similique dicta voluptas quibusdam natus earum praesentium nobis voluptatem quisquam qui!</p>
                    </div>
                </div>

                <div className='flexCenter gap-x-4 p-2 rounded-3xl'>
                    <div className='text-3xl'>
                        <RiSecurePaymentLine
                            className='mb-3 text-blue-500'
                        />
                    </div>
                    <div>
                        <h4 className='h4 capitalize'>Easy Return</h4>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis culpa ipsum iusto illum, exercitationem tempore esse. Tenetur, iure quas similique dicta voluptas quibusdam natus earum praesentium nobis voluptatem quisquam qui!</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
