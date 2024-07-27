import React, { useContext } from 'react'
import './Cart.css'
import { StoreContext } from '../../context/StoreContext'

const Cart = () => {

  const {cartItems,food_list,removeFromCart,getTotalCartAmount} = useContext(StoreContext);

  return (
    <div className='cart'>
      <div className='cart-items'>
        <div className='cart-items-title'>
            <p>Items</p>
            <p>Title</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
        </div>
        <br />
        <hr />
        {food_list.map((item,index)=>{
            if(cartItems[item._id]>0){
              return (
                <div className='cart-items-title cart-items-item'>
                  <img src={item.image} alt="" img/>
                  <p>{item.name}</p>
                  <p>Php {item.price}</p>
                  <p>{cartItems[item._id]}</p>
                  <p>Php {item.price * cartItems[item._id]}</p>
                  <p onClick={()=>removeFromCart(item._id)} className='remove-btn'>Remove</p>
                </div>
              )
            }
        })}
      </div>
      <div className='cart-bottom'>
          <div className='cart-total'>
              <h2>Cart Total</h2>
              <div>
                  <div className="cart-total-details">
                    <p>Subtotal</p>
                    <p>Php {getTotalCartAmount()}</p>
                  </div>
                  <hr />
                  <div className="cart-total-details">
                    <p>Delivery Fee</p>
                    <p>Php {10}</p>
                  </div>
                  <hr />
                  <div className="cart-total-details">
                      <b>Total</b>
                      <b>Php {getTotalCartAmount()+10}</b>
                  </div>
              </div>
              <button>PROCCED TO CHECKOUT</button>
          </div>
          <div className='cart-promocode'>
            <p>If available, enter your promo code here</p>
            <div className='cart-promocode-input'>
                <input type='text' placeholder ='promo code'/>
                <button>Submit</button>
            </div>
          </div>
      </div>
    </div>
  )
}

export default Cart
