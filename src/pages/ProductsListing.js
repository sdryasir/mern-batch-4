import React from 'react'
import { useParams } from "react-router-dom";
import { products } from '../data'
import Card from '../components/Card'

function ProductsListing() {

    let { category } = useParams();

    const prods = products.filter((p) => category === p.category)

    return (
        <div>
            <h1>Product Listing of {category} </h1>
            <div className="row">
                {
                    prods.map((product) => <Card p={product} />)
                }
            </div>
        </div>
    )
}
export default ProductsListing
