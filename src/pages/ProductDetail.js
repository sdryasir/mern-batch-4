import React, { useState } from 'react'
import { useParams } from "react-router-dom";

import { products } from '../data'

function ProductDetail() {

    const { slug } = useParams()

    const prod = products.find((product) => slug === product.slug)

    const [overlay, setOverlay] = useState(false)


    // const handleClick = () => {
    //     setOverlay(true)
    // }

    return (
        <div>
            <div className="product-wrapper">
                <div className="product-image">
                    <img src={prod.image} alt="" />
                </div>
                <div className="product-description">
                    <h2>{prod.title}</h2>
                    <p>{prod.description}</p>
                    <p>Stock {prod.stock}</p>
                    <p><strong>PKR. {prod.price}</strong></p>
                    <button className="btn btn-danger btn-bucket">-</button>
                    <button className="btn btn-outline-secondary btn-bucket">1</button>
                    <button className="btn btn-danger btn-bucket">+</button>
                    <button className="btn btn-danger btn-bucket ms-4" onClick={() => setOverlay(true)}>Add to bucket</button>
                </div>
            </div>
            {
                overlay ? <div className="overlay-wrapper" onClick={() => setOverlay(false)}>
                    <div className="overlay-inner-sidebar">

                    </div>
                </div> : ''
            }
        </div>
    )
}
export default ProductDetail
