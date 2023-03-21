import { cartConstants } from "../actions/constant";


const initState = {
    cartItems: {
        // 123: {
        //     _id: 123,
        //     name: 'Samsung mobile',
        //     img: 'some.jpg',
        //     price: 200,
        //     qty: 1,
        // }
    },
    updatingCart:false,
    erro :null
};
export default (state = initState,action) => {
   switch (action.type) {
    case cartConstants.ADD_TO_CART_REQUEST:
        state={
            ...state,
           updatingCart:true
        }
        break;
    case cartConstants.ADD_TO_CART_SUCCESS:
        state={
            ...state,
            updatingCart:false,
            cartItems : action.payload.cartItems
        }
        break;
    case cartConstants.ADD_TO_CART_FAILURE:
        state={
            ...state,
            updatingCart:false,
            cartItems : action.payload.cartItems
        }
        break;
    case cartConstants.RESET_CART:
        state={
            ...initState,
        }
        break;
   
    default:
        break;
   }
   return state;
}