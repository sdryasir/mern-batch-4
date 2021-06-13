import React from 'react'
import { Link } from 'react-router-dom'

function Card(props) {
    const product = props.p
    return (
        <div className="col-md-4 mb-4">
            <div class="card">
                <img src={product.image} alt="" />
                <div class="card-body">
                    <h5 class="card-title">{product.title}</h5>
                    <p class="card-text">{product.description}</p>
                    <Link to="#" class="btn btn-primary m-2">PKR. {product.price}</Link>
                    <Link to={`/product/${product.slug}`} class="btn btn-primary m-2">Add to Bucket</Link>
                </div>
            </div>
        </div>
    )
}
export default Card
