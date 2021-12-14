// type
export interface IRdxState {
	count: number;
}

export interface IActIncrease {
	type: 'INCREASE_CHECK';
	payload: {
		sum: number;
	};
}

export interface IActDecrease {
	type: 'DECREASE_CHECK';
	payload: {
		sum: number;
	};
}

type Action = IActIncrease | IActDecrease;

// constrain
const INCREASE = 'INCREASE';
const INCREASE_CHECK = 'INCREASE_CHECK';
const DECREASE = 'DECREASE';
const DECREASE_CHECK = 'DECREASE_CHECK';

// action
export const numberIncrease = (numberIncrease: number) => {
	return {
		type: INCREASE,
		payload: {
			sum: numberIncrease,
		},
	};
};

// action
export const numberDecrease = (numberIncrease: number) => {
	return {
		type: DECREASE,
		payload: {
			sum: numberIncrease,
		},
	};
};

// reducer
const INITIAL_STATE: IRdxState = {
	count: 0,
};
const Reducer = (state = INITIAL_STATE, action: Action) => {
	switch (action.type) {
		case INCREASE_CHECK: {
			return { ...state, count: state.count + action.payload.sum };
		}
		case DECREASE_CHECK: {
			return { ...state, count: state.count - action.payload.sum };
		}
		default: {
			return state;
		}
	}
};
export default Reducer;
