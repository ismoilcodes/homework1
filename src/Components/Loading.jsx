import React from 'react'
import { useState, useEffect } from 'react'

const products = [
    {
        id: 1,
        name: 'Product 1',
        price: 10.99,
        color: black,
        img: "https://www.atlasandboots.com/wp-content/uploads/2019/05/ama-dablam2-most-beautiful-mountains-in-the-world.jpg"
    },
    {
        id: 2,
        name: 'Product 2',
        price: 15.99,
        color: white,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGbe2qlDl3Fn4vunTr6B77R_TnO_YX85lNkw&s"
    },
    {
        id: 3,
        name: 'Product 3',
        price: 20.99,
        color: blue,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWRDGi1QIRJ-5RWb_y89rRAAdW5t03pFdl9g&s"
    },

]
const Loading = () => {
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false)
        }, 3000)
        return () => clearTimeout(timer)
    }, [])

    return (
        <div>
            {loading ? <h1 className='text-2xl font-bold w-full items-center text-center justify-center h-screen'>loading...</h1> : <div className='grid grid-cols-3 gap-4'>{
                products.map((
                    <div className='border p-4 ' key={item.id}>
                        <img src={item.img} alt={item.title} />
                        <h1>{item.name}</h1>
                        <p>{item.price.toFixed(2)}</p>
                        <p>{item.color}</p>
                    </div>
                ))
            }</div>}
        </div>
    )
}

export default Loading