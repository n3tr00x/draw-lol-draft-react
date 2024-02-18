import { Navbar } from './components/Navbar';
import { DrawnChampions } from './components/DrawnChampions/DrawnChampions';
import { useSelector } from 'react-redux';
import { RootState } from './store';
import { Toast } from './components/UI/Toast';
import { SavedDrafts } from './components/SavedDrafts/SavedDrafts';

export function App() {
	const draftStatus = useSelector((state: RootState) => state.draw.draftStatus);

	return (
		<>
			{draftStatus === 'SAVED' ? (
				<Toast message="The draft has been saved correctly." variant="success" />
			) : (
				<Toast message="The draft has already been saved." variant="danger" />
			)}
			<Navbar />
			<DrawnChampions />
			<SavedDrafts />
		</>
	);
}
