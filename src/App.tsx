import { Navbar } from './components/Navbar';
import { DrawnChampions } from './components/DrawnChampions/DrawnChampions';
import { useSelector } from 'react-redux';
import { RootState } from './store';
import { Toast } from './components/UI/Toast';

export function App() {
	const draftStatus = useSelector((state: RootState) => state.draw.draftStatus);

	return (
		<>
			{draftStatus === 'SAVED' ? (
				<Toast message="Saved." variant="success" />
			) : (
				<Toast message="Error." variant="danger" />
			)}
			<Navbar />
			<DrawnChampions />
		</>
	);
}
