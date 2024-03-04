import React from 'react'
import Card from 'react-bootstrap/Card';
import banner from './banner.png'
import Products from './Products';
import Slider from './Slider';
import deadpool from './the-mercernary-deadpool-3d0rnmrbypxitwz9.jpg'
import place from './shop.jpg'


const Home = () => {
    return (
        <div className='home-banner'>
          
            <Card className="bg-dark text-white border-0 bannercard">
                <Card.Img src={place} style={{mixBlendMode: 'screen'}} className='bannerimage' alt="banner" />
                <Slider/>
                <Card.ImgOverlay>
                  <div className="container mt-5">
                  <Card.Title className='display-5 fw-bolder'>Hurry ! Last Chance</Card.Title>
                    <Card.Text className='lead fs-1'>
                       Sale Ends Today
                    </Card.Text>
                    
                    <Card.Text className='lead fs-5'>Buy Before It's Over</Card.Text>
                    <Card.Text className='lead fs-2 fw-bold text-dark shoptext' style={{marginTop:'-1rem'}}  >Shop Now <i className='fa fa-shopping-bag'></i></Card.Text>
                  </div>
                </Card.ImgOverlay>
            </Card>
            <Products/>
          
        </div>
    )
}

export default Home