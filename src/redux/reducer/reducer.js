
const INIT_STATE = {
    carts: []
}
export const cartReducer = (state = INIT_STATE, action) => {
    switch (action.type) {
        case "CLEAR_ALL":
            return{
                ...state,
                carts: []
            }
        case "ADD_TO_CART":
            let foundItem = state.carts.find(item => item.product.id === action.payload.id)
            if(foundItem) {
                let cartData = state.carts.map(item => {
                    if(foundItem.product.id === item.product.id) {
                        return {
                            product: item.product,
                            count: item.count ? item.count + 1 : 1
                        }
                    }
                    return item
                })
                return {
                    ...state,
                    carts: cartData
                }
            }
            return {
                ...state,
                carts: [...state.carts, {product: action.payload, count: 1}]
            }
            
      case "REMOVE_TO_CART":
        let count = -1
        state.carts.forEach(item => {
            if(item.product.id === action.payload) count = item.count
        })
        if(count === 1) return {
            ...state,
            carts: state.carts.filter(item => item.product.id !== action.payload)
        }
        return {
            ...state,
            carts: state.carts.map(item => {
                if(item.product.id === action.payload) return {
                    product: item.product,
                    count: item.count - 1
                }
                return item
            })
        }
        default:
            return state
    }
}