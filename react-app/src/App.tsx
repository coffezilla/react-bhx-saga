import { useSelector, useDispatch } from 'react-redux';
import { IRdxState, numberIncrease, numberDecrease } from './redux/ducks/Reducer';

const App = () => {
	const dispatch = useDispatch();
	const RdxCount = useSelector((state: IRdxState) => state.count);

	const handleIncrease = () => {
		dispatch(numberIncrease(3));
	};
	const handleDecrease = () => {
		dispatch(numberDecrease(3));
	};

	return (
		<div className="App">
			<h1>Redux + Saga + Typescript</h1>
			<p>Count: {RdxCount}</p>

			<button onClick={handleIncrease}>Increase Plus 3</button>
			<button onClick={handleDecrease}>Decrease Minor 3</button>

			<p>* Stop increasing if it's highter than 10</p>
		</div>
	);
};

export default App;
