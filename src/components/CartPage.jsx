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
    <div style={{
      display: 'flex'
    }}>
      <div>
      {
        cartData.map((x, i) => {
          let item = x.product

          return (
          <div style={{
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
            {item.description}
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
      <div>
        <button onClick={clearAll} className='placeorder'>Place Order</button>
      </div>
      {showPopup &&
        <div className="popup">
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