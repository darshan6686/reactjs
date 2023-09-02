import { takeEvery, put } from 'redux-saga/effects'
import { PRODUCT_LIST, SET_PRODUCT_LIST } from '../Type'

function* getProduct(){
    let data = yield fetch('http://localhost:3000/posts')
    data = yield data.json()
    console.warn("action called", data)
    yield put({type: SET_PRODUCT_LIST, data})
}

function* ProductSaga(){
    yield takeEvery(PRODUCT_LIST, getProduct)
}

export default ProductSaga