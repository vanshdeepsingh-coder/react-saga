import rootReducer from "../reducer/rootReducer"
import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga"
import rootSaga from "../saga/rootSaga";

const sagaMiddleWare=createSagaMiddleware();

const store=configureStore({
    reducer:rootReducer,
    middleware:()=>[sagaMiddleWare]
})

sagaMiddleWare.run(rootSaga);

export default store;