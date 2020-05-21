export default (state, action) => {
    switch (action.type) {
        case 'Add_Product':
            return {
                ...state,
                cart: [action.payload, ...state.cart]
            }
        case 'Remove_Product':
            return {
                ...state,
                cart: state.cart.filter(item => item.id !== action.payload)
            }
        case 'Update_Cart_Total':
            return {
                ...state,
                // cartTotal: action.payload.operator === '-' ? state.cartTotal - action.payload.amount : state.cartTotal + action.payload.amount,
                cartTotal: action.payload
            }
        default:
            return state;
    }
}