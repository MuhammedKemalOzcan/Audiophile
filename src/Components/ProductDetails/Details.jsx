import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function Details() {

    const { id } = useParams();

    const [products, setProducts] = useState([]);


    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get("/data.json");
                console.log(response.data.products);
                setProducts(response.data.products);
            } catch (error) {
                console.log("Products verilerinde bir hata oluştu: ", error)
            }
        }
        fetchProducts();
    }, [])

    if (!products.length) {
        return <p>Loading...</p>
    }

    const handlePlus = (() => {
        setProducts((prev) => (
            prev.map((product) => (
                product.id === currentProduct.id ? { ...product, quantity: product.quantity + 1 } : product
            ))
        ))
    })

    const handleMinus = (() => {
        setProducts((prev) => (
            prev.map((product) => (
                product.id === currentProduct.id ? { ...product, quantity: product.quantity > 1 ? product.quantity - 1 : 1 } : product
            ))
        ))
    })

    const currentProduct = products.find((item) => item.id === parseInt(id));

    console.log("currentProduct: ", currentProduct);

    return (
        <div className='w-full h-auto pl-[190px]'>
            <button>
                <p className='text-[#000000] opacity-50'>Go Back</p>
            </button>
            <div className='w-[89%] h-[776px] flex items-center gap-32'>
                <div className='w-[50%] h-[560px] '>
                    <img src={currentProduct.image} />
                </div>
                <div className='w-[40%] h-[372px] flex flex-col justify-center gap-12 '>
                    {
                        currentProduct.isNew &&
                        <p className='text-[#D87D4A]'>N E W P R O D U C T</p>
                    }
                    <h1>{currentProduct.name}</h1>
                    <p>{currentProduct.description}</p>
                    <p>{"$ " + currentProduct.price}</p>
                    <div className='flex gap-4'>
                        <div className='w-[120px] h-[48px] bg-[#F1F1F1] flex justify-center items-center gap-8 '>
                            <button
                                onClick={handleMinus}
                            >
                                -
                            </button>
                            <p>{currentProduct.quantity}</p>
                            <button
                                onClick={handlePlus}
                            >
                                +
                            </button>
                        </div>
                        <button className='button-1'>
                            <p>ADD TO CART</p>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Details
