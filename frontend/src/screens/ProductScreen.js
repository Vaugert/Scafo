import React from 'react'
import { Link, useParams } from 'react-router-dom'

import Rating from '../components/Rating'
import products from '../products'        

function ProductScreen() {
    const { id } = useParams()
    const product = products.find((p) => p._id === id);
  return (
    <div>
        <Link to='/' className='btn btn-light my-3'>Go Back</Link>
        
    </div>
  )
}

export default ProductScreen