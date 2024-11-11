import {all} from 'redux-saga/effects';
import actionWatcherDecrement from './decrementSaga';
import actionWatcherIncrement from './incrementSaga';

export default function* rootSaga(){
    yield all([actionWatcherIncrement(),actionWatcherDecrement()]);
}