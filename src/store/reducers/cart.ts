import { createSlice, type PayloadAction } from '@reduxjs/toolkit';


type CartItem = {
    id: number
    nome: string
    preco: number
    imagem: string
    quantity: number
}

const initialState: { items: CartItem[]; isOpen: boolean } = {
    items: [],
    isOpen: false
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        add: (state, action: PayloadAction<Omit<CartItem, 'quantity'>>) => {
            const item = state.items.find((i) => i.id === action.payload.id)
            if (item) {
                item.quantity += 1
            } else {
                state.items.push({ ...action.payload, quantity: 1 })
            }
        },
        remove: (state, action: PayloadAction<number>) => {
            const item = state.items.find((i) => i.id === action.payload)
            if (item) {
                if (item.quantity > 1) {
                    item.quantity -= 1
                } else {
                    state.items = state.items.filter((i) => i.id !== action.payload)
                }
            }
        },
        clear: (state) => {
            state.items = []
        },
        open: (state) => {
            state.isOpen = true
        },
        close: (state) => {
            state.isOpen = false
        },
    },
})

export const { add, remove, clear, open, close } = cartSlice.actions
export default cartSlice.reducer