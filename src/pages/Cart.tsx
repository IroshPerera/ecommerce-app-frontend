import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../components/context/ShopContext'
import Title from '../components/Title'
import { FaMinus, FaPlus, FaRegWindowClose } from 'react-icons/fa'
import { CartTotal } from '../components/CartTotal'
import Footer from '../components/Footer'

export const Cart = () => {

    const { navigate, products, currency, cartItems, getCartCount, updateQuantity }: any = useContext(ShopContext)

    const [cartData, setCartData] = useState<any>([])
    const [quantities, setQuantities] = useState<any>({})

    useEffect(() => {
        if (products.length > 0) {
            const tempData = [];
            const initialQuantities: any = {};
            for (const itemId in cartItems) {
                for (const color in cartItems[itemId]) {
                    if (cartItems[itemId][color] > 0) {
                        tempData.push({
                            _id: itemId,
                            color: color,
                            quantity: cartItems[itemId][color],
                        });

                        // Correct the key format
                        initialQuantities[`${itemId}-${color}`] = cartItems[itemId][color];
                    }
                }
            }
            setCartData(tempData);
            setQuantities(initialQuantities);
        }
    }, [cartItems, products]);


    const increment = (id: any, color: any) => {
        const key = `${id}-${color}`;
        setQuantities((prev: any) => {
            const newQuantities = (prev[key] || 0) + 1;
            updateQuantity(id, color, newQuantities);  // Update global state
            return { ...prev, [key]: newQuantities };
        });
    };

    const decrement = (id: any, color: any) => {
        const key = `${id}-${color}`;
        setQuantities((prev: any) => {
            if (prev[key] > 1) {
                const newQuantities = prev[key] - 1;
                updateQuantity(id, color, newQuantities);
                return { ...prev, [key]: newQuantities };
            }
            return prev;  // Avoid negative values
        });
    };


    return (
        <section>
            <div className='bg-primary mb-16'>
                <div className='max-padd-container py-10'>
                    <div className='flexStart gap-x-4 '>
                        <Title title={'Cart'} title2={'List'} titleStyles={'h3'} paraStyles={''} />

                        <h5 className='medium-15 text-gray-30 relative bottom-1.5'>({getCartCount()} Items)</h5>
                    </div>
                    {/* CONTAINER */}
                    <div className='mt-6'>
                        {cartData.map((item, i) => {
                            const productDate = products.find((product: any) => product._id === item._id)
                            const key = `${item._id}-${item.color}`
                            return (
                                <div key={i} className='bg-white p-4 mb-3 rounded-lg flex items-center gap-4'>

                                    <div className='w-24 flex-shrink-0'>
                                        <img
                                            src={productDate.image[0]}
                                            alt="productImg"
                                            className='w-full rounded'
                                        />
                                    </div>

                                    <div className='flex-grow'>
                                        <div className='flexBetween'>
                                            <h5 className='h5 !my-0 line-clamp-1'>{productDate.name}</h5>
                                            <FaRegWindowClose
                                                onClick={() => {
                                                    updateQuantity(item._id, item.color, 0)
                                                }} className='cursor-pointer text-secondary' />
                                        </div>
                                        <p className='bold-14 my-0.5'>{item.color}</p>
                                        <div className='flexBetween'>

                                            <div className='flex items-center ring-1 ring-slate-900/5 rounded-full overflow-hidden bg-primary'>
                                                <button className='p-1.5 bg-white text-secondary rounded-full shadow-md'>
                                                    <FaMinus
                                                        onClick={() => {
                                                            decrement(item._id, item.color)
                                                        }}
                                                        className='text-xs' />
                                                </button>
                                                <p className='px-2'>{quantities[key]}</p>
                                                <button className='p-1.5 bg-white text-secondary rounded-full shadow-md'>
                                                    <FaPlus
                                                        onClick={() => {
                                                            increment(item._id, item.color)
                                                        }
                                                        }

                                                        className='text-xs' />
                                                </button>
                                            </div>

                                            <h4 className='h4'>{currency}{productDate.price}.00</h4>
                                        </div>
                                    </div>
                                </div>

                            )

                        })}
                    </div>
                    <div className='flex my-20'>
                        <div className='w-full sm:w-[450px]'>
                            <CartTotal />
                            <button
                                onClick={() => {
                                    navigate('/place-order')
                                }}
                                className='btn-secondary mt-7'>Proceed to Checkout</button>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </section>
    )
}
