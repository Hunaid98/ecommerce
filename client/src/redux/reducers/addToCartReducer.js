import * as actionType from '../constants/addtoCartType';

export const addToCartReducer = (state = { cartItem: [] }, action)=>{
    switch (action.type) {
        case actionType.ADD_TO_CART:
            const item = action.payload;
            const exist = state.cartItem.find(product=> product._id === item._id );

            if(exist) return;
            return( { ...state, cartItem:[...state.cartItem, item] } );

        case actionType.REMOVE_TO_CART:
            return( {...state, cartItem: state.cartItem.filter(product=> product._id !== action.payload) } )

        default:
            return state;
    }
}

