import { BUY_COCO, ADD_COCO } from "./Cocotype";

export let buyCoco = () => {
    return {
        type: BUY_COCO
    }
}

export let addCoco = () => {
    return{
        type: ADD_COCO
    }
}