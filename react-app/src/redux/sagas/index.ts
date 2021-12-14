import { all, fork } from 'redux-saga/effects';
import { watchNumberInscrease, watchNumberDecrease } from './saga';

// root saga
export function* rootSaga() {
	yield all([fork(watchNumberInscrease), fork(watchNumberDecrease)]);
}
