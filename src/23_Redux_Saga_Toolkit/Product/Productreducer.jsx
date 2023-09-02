import { SET_PRODUCT_LIST } from "../Type";

let productData = (data = [], action) => {
    switch(action.type){
        case SET_PRODUCT_LIST:
            console.log("SET_PRODUCT_LIST", action);
            return [...action.data]

        default:
            return data
    }
}

export default productData