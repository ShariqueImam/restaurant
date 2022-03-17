
// { id: 1, amount: 1, name: 'Sushi', imgURL: 'https://res.cloudinary.com/shariqcloud/image/upload/v1628759614/samples/food/dessert.jpg', price: 10.99 }, { id: 2, name: 'Mix vegatable', amount: 1, imgURL: 'https://res.cloudinary.com/shariqcloud/image/upload/v1628759616/samples/food/pot-mussels.jpg', price: 19.99 }, { name: 'Hot Sauces', amount: 1, imgURL: 'https://res.cloudinary.com/shariqcloud/image/upload/v1628759622/samples/food/spices.jpg', price: 12.99, id: 3 }
import { createSlice } from '@reduxjs/toolkit'
const cartItemsInitialState = { items: [], totalAmount: 0 }
const cartItems = createSlice({
    name: 'CartItems',
    initialState: cartItemsInitialState,
    reducers: {
        addItem(state, action) {
            // action.payload 
            const existingCartItemIndex = state.items.findIndex(item => item.id === action.payload.id)
            const existingCartItem = state.items[existingCartItemIndex]
            let updatedTotalAmount
            let updatedItems;
            if (existingCartItem) {
                const newUpdatedItem = {
                    ...existingCartItem,
                    // updating the items and limit the items by 3
                    amount: ((existingCartItem.amount + action.payload.amount) <= 3) ? existingCartItem.amount + action.payload.amount : existingCartItem.amount
                }
                updatedItems = [...state.items]
                updatedItems[existingCartItemIndex] = newUpdatedItem
            } else {
                updatedItems = state.items.concat(action.payload)
            }
            if (existingCartItem) {
                updatedTotalAmount = state.totalAmount + (existingCartItem.amount < 3 ? action.payload.price * action.payload.amount : 0)
            } else {
                updatedTotalAmount = state.totalAmount + action.payload.price * action.payload.amount
            }
            // updating the total amount and items of the store
            state.totalAmount = updatedTotalAmount
            state.items = updatedItems
        },
        removeItem(state, action) {
            //   payload includes the id
            const existingCartItemIndex = state.items.findIndex(item => item.id === action.payload)
            const existingCartItem = state.items[existingCartItemIndex]
            let updatedItems;

            if (existingCartItem.amount === 1) {
                updatedItems = state.items.filter(item => item.id !== action.payload)

            } else {
                const newUpdatedItem = {
                    ...existingCartItem,
                    amount: existingCartItem.amount - 1
                }
                updatedItems = [...state.items]
                updatedItems[existingCartItemIndex] = newUpdatedItem

            }
            const updatedTotalAmount = state.totalAmount - existingCartItem.price
            // updating the total amount and items of the store
            state.totalAmount = updatedTotalAmount ? updatedTotalAmount : 0
            state.items = updatedItems
        }
    }
})

export const cartItemsActions = cartItems.actions
export default cartItems.reducer