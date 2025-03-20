import React, { ReactNode, useState } from 'react'

import { Link } from 'react-router-dom'

interface Product {

    _id: string,
    name: string,
    description: string,
    price: number,
    image: any,
    category: string,
    colors: string[],
    date: number,
    popular: boolean,


}

const Item = ({ product }: { product: Product }) => {
    const [hovered, setHovered] = useState(false);
    return (
        <div className="overflow-hidden">
            {/* Image */}
            <Link to={'/'}
                onMouseEnter={() => { setHovered(true) }}
                onMouseLeave={() => { setHovered(false) }}
                className="flexCenter p-2 bg-[#f5f5f5] overflow-hidden relative">
                <img src={product.image.length > 1 && hovered ? product.image[1] : product.image[0]} alt="productImg" className="transition-all duration-300" />
            </Link>
            {/* Content */}
            <div className="p-3">
                <h4 className="bold-15 line-clamp-1 !py-0">{product.name}</h4>
                <div className="flexBetween pt-1">
                    <p className="h5">{product.category}</p>
                    <h5 className="h5 pr-2">$ {product.price}.00</h5>
                </div>
                
            </div>
        </div>
    )
}

export default Item