import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import Cocoreducer from './Coco/Cocoreducer';

let store = createStore(Cocoreducer, applyMiddleware(logger));

export default store