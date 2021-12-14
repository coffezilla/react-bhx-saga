import { takeLatest, takeEvery, put, delay, select } from 'redux-saga/effects';
import { IActIncrease, IActDecrease, IRdxState } from '../ducks/Reducer';

// middleware functions
function* numberIncreaseCheck({ payload }: IActIncrease): unknown {
	yield delay(1000);

	// current state
	const RdxCount = (state: IRdxState) => state.count;
	const currentCount = yield select(RdxCount);

	// check if is highter than 10
	const newBonusIncrease = currentCount > 10 ? 0 : payload.sum;
	yield put({ type: 'INCREASE_CHECK', payload: { sum: newBonusIncrease } });
}

function* numberDecreaseCheck({ payload }: IActDecrease) {
	yield delay(1000);
	yield put({ type: 'DECREASE_CHECK', payload: { sum: payload.sum } });
}

// watches
export function* watchNumberInscrease() {
	yield takeEvery('INCREASE', numberIncreaseCheck);
}

export function* watchNumberDecrease() {
	yield takeLatest('DECREASE', numberDecreaseCheck);
}
