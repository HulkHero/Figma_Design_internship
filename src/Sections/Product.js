import React from 'react'
import ProductLeft from '../Components/Product/ProductLeft'
import ProductRight from '../Components/Product/ProductRight'
const Product = () => {
    return (
        <section>
            <div className='pl-[2%]  text-black my-28  flex flex-row   '>
                <ProductLeft />
                <ProductRight />
            </div>
        </section>
    )
}

export default Product