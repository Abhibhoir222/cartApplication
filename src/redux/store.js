// import {createStore} from 'redux'
import {configureStore} from '@reduxjs/toolkit'
import rootReducer from './rootReducer'
import productSaga from './productSaga'
import createSagaMiddleWare from 'redux-saga'


// const store  = createStore(rootReducer);
const sagaMiddleWare = createSagaMiddleWare();
const store = configureStore({
    reducer:rootReducer,
    middleware: ()=>[sagaMiddleWare]
})
sagaMiddleWare.run(productSaga);
export default store;