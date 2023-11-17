import { configureStore } from '@reduxjs/toolkit'
import cartReducer from "../redux/CartSlice"

 const Appstore = configureStore({
  reducer: {
    cart: cartReducer
  },
})
export default Appstore