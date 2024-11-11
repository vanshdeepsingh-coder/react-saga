import {put,takeLatest} from "redux-saga/effects"

export function* incrementSaga(){
    yield put({type:"incrementSaga",payload:2})
}

export default function* actionWatcherIncrement(){
    yield takeLatest('increment',incrementSaga)
}
