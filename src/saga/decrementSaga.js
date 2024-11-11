import {put,takeLatest} from 'redux-saga/effects'

export function* decrementSaga(){
    yield put({type:'decrementSaga',payload:2})
}

export default function* actionWatcherDecrement(){
    yield takeLatest('decrement',decrementSaga)
}