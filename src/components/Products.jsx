import React, { useState, useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Spinner from 'react-bootstrap/Spinner';

const Products = () => {
    const [data, setData] = useState([])
    const [filter, setFilter] = useState(data)
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        getProducts()
    }, [])

    const getProducts = async () => {
        setLoading(true)
        const response = await fetch("https://fakestoreapi.com/products")
        const res = await response.json()
        setData(res)
        setFilter(res)
        setLoading(false)
    }
    const Loading = () => {
        return (
            <>
             <div className="mt-4 ">
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
    const filterProduct = (cat) => {
        const updatedItems = data.filter((item) => item.category === cat)
        setFilter(updatedItems)
    }

    const ShowProducts = () => {
        return (
            <>
                <div className="buttons">
                    <Button onClick={() => setFilter(data)} className='me-2' variant="outline-dark">All Categories</Button>
                    <Button onClick={() => filterProduct("men's clothing")} className='me-2' variant="outline-dark">Men</Button>
                    <Button onClick={() => filterProduct("women's clothing")} className='me-2' variant="outline-dark">Women</Button>
                    <Button onClick={() => filterProduct("jewelery")} className='me-2' variant="outline-dark">Jewelery</Button>
                    <Button onClick={() => filterProduct("electronics")} className='me-2' variant="outline-dark">Electronics</Button>
                </div>
                {filter.map((item, i) => {
                    return (
                        // <div className="col-3 mt-5 col-md-auto" key={i}>
                        <div className="  col-12 col-md-6 col-lg-4 g-3" key={i}>
                        {/* // <div className="  row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3" key={i}> */}
                            <Card key={item.id} className="border border-dark ">
                                <Card.Img variant="top" style={{ height: '300px' }} src={item.image} />
                                <Card.Body>
                                    <Card.Title>{item.title.substring(0, 12)}</Card.Title>
                                    <Card.Text className='fw-bold'>
                                        $ {item.price}
                                    </Card.Text>
                                    <Link to={`/products/${item.id}`}> <Button variant="dark">Buy Now</Button></Link>
                                </Card.Body>
                            </Card>
                        </div>
                    )
                })}
            </>
        )
    }
    return (
        <div>
            <div className="container mt-5 pb-5">
                <div className="row">
                    <div className="col-lg-12">
                        <h1 className='display-6 allproducts' >Our Products</h1>
                        <hr />
                        <div className="row justify-content-center">
                            {loading ? <Loading /> : <ShowProducts />}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Products