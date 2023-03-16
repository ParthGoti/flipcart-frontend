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
    }
};
export default (state = initState,action) => {
   switch (action.type) {
    case cartConstants.ADD_TO_CART:
        state={
            ...state,
            cartItems : action.payload.cartItems
        }
        break;
   
    default:
        break;
   }
   return state;
}