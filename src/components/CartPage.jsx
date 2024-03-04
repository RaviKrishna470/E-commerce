import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ADD, CLEAR_CART, REMOVE } from '../redux/actions/action'
import { Link } from 'react-router-dom'

const CartPage = () => {
  const [showPopup, setShowPopup] = useState(false)
  const cartData = useSelector(state => state.cartReducer.carts)
  const dispatch = useDispatch()

  const removeItem = (id) => {
    dispatch(REMOVE(id))


    
  }

  const addItem = (item) => {
    dispatch(ADD(item))
  }
  const closePopup = () => {
    setShowPopup(false)
  }
  const clearAll = () =>{

    dispatch(CLEAR_CART())

    setShowPopup(true)
  } 

  return (
    <div className='main-container' style={{
      display: 'flex',
      
    
    }}>
      <div>
      {
        cartData.map((x, i) => {
          let item = x.product

          return (
          <div className='items-card' style={{
            height:'auto',
            width: '50%',
            margin: '50px',
            padding: '4px',
            border: '0px solid black',
            borderRadius:'15px',
            boxShadow:'0 5px 5px aqua'
            
         

          }}>
            {item.title}
            <br />
            <img src={x.product.image} alt={x.product.image} height={140} width={150} style={{mixBlendMode:'multiply'}}/>
            <br />
            <span className="disc">
            {item.description}
            </span>
            <br />
            
            <div style={{
              display: 'flex',
              flexDirection: 'row-reverse'
              ,justifyContent:'center'
            }}>
              
              <button onClick={() => removeItem(item.id)} className='plusminus' style={{marginLeft:'15px'}}>-</button>
              {x.count}
              <button onClick={() => addItem(item)} className='plusminus ' style={{marginRight:'15px'}}>+</button>
            </div>
          </div>
          )
        })
      }
      </div>
    <div className="left "
    style={{backgroundColor:'pink',width:"100%",height:"100%",position:'sticky',top:"1rem"}}>

<div className='summary-box' style={{ 
    width: 'auto', 
    position: 'sticky', 
   height:'auto',
    right: '1rem', 
    top: '0rem', 
    height: 'auto', 
   
    overflow: 'hidden',
    padding: '20px',
    boxShadow: '-2px 0 5px rgba(0,0,0,0.1)',
    // backgroundColor:'pink'
  }}>
    <h2>Cart Summary</h2>
    {cartData.map((x, i) => (
      <div key={i} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
        <span>{x.product.title} x {x.count}</span>
        <span>${x.product.price * x.count}</span>
      </div>
    ))}
    <hr />
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      <strong>Total:</strong>
      <strong>${cartData.reduce((acc, curr) => acc + (curr.product.price * curr.count), 0).toFixed(2)}</strong>
    </div>
    <button onClick={clearAll} className='placeorder' style={{ marginTop: '20px' }}>Place Order</button>
    
  </div>
 </div>
 {showPopup &&
        <div className="popup al-center">
          <div className="popup-content">
            {/* <span className="close" onClick={closePopup}>×</span> */}
            <br />
            <div className="check"><span>✓</span></div>
            
            <p>Order has been placed!</p>
            <Link to='/'> <button onClick={closePopup } style={{border:'none', borderRadius:'5px',marginRight:'5px'}}>Close</button></Link>
          </div>
        </div>
      }
 </div>




 


   


  
  
  
  
  
  )
}

export default CartPage