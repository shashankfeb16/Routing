import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Product = () => {
    const [product,setProduct] = useState({})
    const {id} = useParams();

    useEffect(()=>{
        if(id){
            axios.get(`http://localhost:8080/products/${id}`).then((res)=>{
                setProduct(res.data)
            })
        }
    },[id])
  return (
    <div>
        <div>{product.name}</div>
        <div>{product.price}</div>
    
    </div>
  )
}

export default Product