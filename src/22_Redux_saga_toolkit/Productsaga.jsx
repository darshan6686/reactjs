import { takeEvery } from 'redux-saga/effects'
import { PRODUCT_LIST } from './Type'

function* getProduct(){
    console.log("call api here");
    let data = yield fetch('http://localhost:3000/posts')
    data = data.json()
    console.warn("action called", data)
}

function* ProductSaga(){
    yield takeEvery(PRODUCT_LIST, getProduct)
}

export default ProductSaga