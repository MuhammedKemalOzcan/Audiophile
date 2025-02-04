import React from 'react'
import { useNavigate } from 'react-router-dom'

function Products({ products }) {

    const navigate = useNavigate();


    return (
        <div className='w-full h-auto flex flex-col gap-40 mt-40 justify-center items-center'>
            {
                products.map((product) => (

                    product.id % 2 === 1 ?
                        <div
                            key={product.id}
                            className='w-[75%] flex justify-center items-center gap-80'
                        >
                            <img src={product.image} />
                            <div className='w-[55%] flex flex-col'>
                                <div className='w-[50%] flex flex-col gap-8'>
                                    {
                                        product.isNew &&
                                        <p className='text-[#D87D4A]'>N E W P R O D U C T</p>
                                    }
                                    <h1>{product.name}</h1>
                                    <p className='opacity-50'>{product.description}</p>
                                    <button
                                        onClick={() => navigate(`/product-details/${product.id}`)}
                                        className='button-1'>
                                        <p>SEE PRODUCT</p>
                                    </button>
                                </div>

                            </div>
                        </div>
                        :
                        <div
                            key={product.id}
                            className='w-[75%] flex justify-center items-center gap-28'
                        >
                            <div className='w-[45%] flex flex-col'>
                                <div className='w-[52%] flex flex-col gap-8'>
                                    {
                                        product.isNew &&
                                        <p className='text-[#D87D4A]'>N E W P R O D U C T</p>
                                    }
                                    <h1>{product.name}</h1>
                                    <p className='opacity-50'>{product.description}</p>
                                    <button
                                        onClick={() => navigate(`/product-details/${product.id}`)}
                                        className='button-1'>
                                        <p>SEE PRODUCT</p>
                                    </button>
                                </div>
                            </div>
                            <img src={product.image} />
                        </div>
                ))
            }

        </div>
    )
}

export default Products
