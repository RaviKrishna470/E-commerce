import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';
import { useDispatch } from 'react-redux';
import { ADD } from '../redux/actions/action';


const Product = () => {
    const dispatch = useDispatch()
    const { id } = useParams()
    const [product, setProduct] = useState([])
    const [loading, setLoading] = useState(false)

    const send = (item) => {
        dispatch(ADD(item))
        // alert("Item added successfully")
    }
    useEffect(() => {
        getProduct()
    }, [])
    const getProduct = async () => {
        setLoading(true)
        const response = await fetch(`https://fakestoreapi.com/products/${id}`)
        setProduct(await response.json())
        setLoading(false)
    }
    const Loading = () => {
        return (
            <>
                <div className="mt-4">
                    <Spinner animation="grow" />
                    <Spinner animation="grow" />
                    <Spinner animation="grow" />
                    <Spinner animation="grow" />
                    <Spinner animation="grow" />
                    <Spinner animation="grow" />
                    <Spinner animation="grow" />
                </div>
            </>
        )
    }
    const ShowProduct = () => {
        return (
            <>
                {/* <div className="container">
                    <div className="row">
                        <div className="col-lg-6 mt-5">
                            <img src={product.image} alt={product.image} height={400} width={500} />
                        </div>
                        <div className="col-lg-6 mt-5">
                            <h4 className='texr-uppercase'>{product.category}</h4>
                            <h1 className='display-5'>{product.title}</h1>
                            <p className='fw-bolder'>Rating {product.rating && product.rating.rate}</p>
                            <h3>$ {product.price}</h3>
                            <p>{product.description}</p>
                            <Button onClick={() => send(product)} variant="dark">Add to Cart</Button>
                            <Button className='ms-3' variant="dark">  <Link to='/' style={{textDecoration:'none',color:'white'}}>Back to shopping</Link></Button>
                          
                        </div>
                    </div>
                </div> */}

{/* edited area */}

<div className="container">
    <div className="row">
        <div className="col-lg-6 mt-5 text-center">
            <img src={product.image} alt={product.image} className="img-fluid" style={{maxWidth: '100%', height: 'auto', maxWidth: '300px'}} />
        </div>
        <div className="col-lg-6 mt-5 pb-5" >
            <h4 className='text-uppercase'>{product.category}</h4>
            <h1 className='display-5'>{product.title}</h1>
            <p className='fw-bolder'>Rating {product.rating && product.rating.rate}</p>
            <h3>$ {product.price}</h3>
            <p>{product.description}</p>
            <Button onClick={() => send(product)} variant="dark">Add to Cart</Button>
            <Button className='ms-3' variant="dark">  
                <Link to='/' style={{textDecoration:'none',color:'white'}}>Back to shopping</Link>
            </Button>
        </div>
    </div>
</div>



            </>
        )
    }
    return (
        <div>
            <div className="container">
                {loading ? <Loading /> : <ShowProduct />}
            </div>
        </div>
    )
}

export default Product