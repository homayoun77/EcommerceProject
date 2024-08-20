import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    selectedItems: [],
    itemsCounter: 0,
    total: 0,
    checkout: false
}

const itemsCount = items => {
    const itemsCounter = items.reduce((total, product) => total + product.quantity, 0)
    return ({ itemsCounter })
}

const total = items => {
    const total = items.reduce((total, product) => total + product.price * product.quantity, 0).toFixed(2)
    return ({ total })
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem: (state, action) => {
            if (!state.selectedItems.find(item => item.id === action.payload.id)) {
                state.selectedItems.push({ ...action.payload, quantity: 1 })
                state.itemsCounter = itemsCount(state.selectedItems)
                state.total = total(state.selectedItems)
                state.checkout = false
            }
        },


        removeItem : (state , action) => {
            const newSelectedItem = state.selectedItems.filter(item => item.id !== action.payload.id)
            state.selectedItems = newSelectedItem
            state.itemsCounter = itemsCount(newSelectedItem)
            state.total = total(newSelectedItem)
        },


        increase: (state, action) => {
            const indexI = state.selectedItems.findIndex(item => item.id === action.payload.id)
            state.selectedItems[indexI].quantity++
            state.itemsCounter = itemsCount(state.selectedItems)
            state.total = total(state.selectedItems)
        },


        decrease: (state, action) => {
            const indexD = state.selectedItems.findIndex(item => item.id === action.payload.id)
            state.selectedItems[indexD].quantity--
            state.itemsCounter = itemsCount(state.selectedItems)
            state.total = total(state.selectedItems)
        },

        checkout: (state) => {
            state.itemsCounter = 0
            state.selectedItems = []
            state.total = 0
            state.checkout = true
        },

        clear: (state) => {
            state.itemsCounter = 0
            state.selectedItems = []
            state.total = 0
            state.checkout = false
        }
    }
})

export default cartSlice.reducer
export const { addItem, increase , decrease , removeItem , checkout , clear } = cartSlice.actions