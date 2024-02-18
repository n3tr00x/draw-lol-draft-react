import { Button, Stack } from 'react-bootstrap';
import { DrawnChampion } from '../../types';
import { SavedDraftChampion } from './SavedDraftChampion';
import { removeDraft } from '../../store/draw/drawSlice';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../store';

type SavedDraftProps = {
	id: number;
	champions: DrawnChampion[];
};

export function SavedDraft({ id, champions }: SavedDraftProps) {
	const savedDraftDate = new Date(id).toLocaleDateString();
	const dispatch = useDispatch<AppDispatch>();

	return (
		<div className="border-1 border-primary rounded-1">
			<Stack direction="horizontal" gap={2} className="mb-2">
				<p className="align-self-center mb-0">Saved at: {savedDraftDate}</p>
				<Button
					variant="danger"
					className="ms-auto"
					onClick={() => dispatch(removeDraft(id))}
				>
					Remove
				</Button>
			</Stack>
			<Stack direction="horizontal">
				{champions.map(champion => (
					<SavedDraftChampion {...champion} />
				))}
			</Stack>
		</div>
	);
}
