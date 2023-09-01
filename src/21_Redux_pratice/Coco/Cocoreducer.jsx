import { BUY_COCO, ADD_COCO } from "./Cocotype";

let initial = {
    coco: 10,
}

let Reducer = (state = initial, action) => {
    switch(action.type){
        case BUY_COCO:
            if(state.coco !== 0){
                return{
                    ...state,
                    coco: state.coco - 1
                }
            }
            else{
                return{
                    ...state,
                    coco: 0
                }
            }

        case ADD_COCO:
                return{
                    ...state,
                    coco: state.coco + 1
                }

        default:
            return initial
    }
}

export default Reducer