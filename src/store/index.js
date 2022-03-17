import { configureStore } from '@reduxjs/toolkit'

import cartItemsReducer from './cartItemsReducer'
const store = configureStore({
    reducer: { cartItems: cartItemsReducer }
});


export default store;