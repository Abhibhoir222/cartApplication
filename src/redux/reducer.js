import { ADD_TO_CART, EMPTY_CART, REMOVE_TO_CART } from "./constant";

export const cartData = (data = [], action) => {
//   if (action.type === ADD_TO_CART) {
//     console.log("Reducer called", action);
//     return action.data;
//   } else {
//     return "No Action matched ";
switch(action.type){
    case ADD_TO_CART:
        // add to cart logic 
    console.log("ADD_TO_CART condiation", action);  
        return [action.data, ...data]
    case REMOVE_TO_CART:
        console.log("REMOVE_TO_CART condtion", action);
        // data.length = data.length?data.length-1:[];
        const remainingItem= data.filter((item)=>item.id!==action.data);
        console.log("remaningItem",remainingItem );
        return[...remainingItem]
    case EMPTY_CART:
        console.log("EMPTY_CART", action);
        data=[]
        return [...data]
        default:
            return  data;
  }
  }

