import React from 'react'
import ItemList from '../Component/itemlist/ItemList'
import { useDispatch, useSelector } from 'react-redux'
import { clearItems } from '../redux/CartSlice'

const Cart = () => {
    const dispatch = useDispatch()
    const cartitems = useSelector((store)=> store.cart.items)
    
    const handelClearCart = () =>{
     dispatch(clearItems())
    }
  return (
    <div className='text-center m-4 p-4'>
        <h1 className='text-2xl font-bold'>cart</h1>
        <button className='p-2 m-2 bg-black text-white rounded-lg' onClick={handelClearCart}>Clear Cart</button>
        <div className='w-6/12 m-auto'>
            <ItemList items={cartitems}/>
        </div>
</div>
  )
}

export default Cart