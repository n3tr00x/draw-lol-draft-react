import { useSelector } from 'react-redux';
import { Modal } from '../UI/Modal';
import { RootState } from '../../store';
import { Stack } from 'react-bootstrap';
import { SavedDraft } from './SavedDraft';

export function SavedDrafts() {
	const savedDrafts = useSelector((state: RootState) => state.draw.savedDrafts);

	return (
		<Modal title="Saved drafts">
			{savedDrafts.length === 0 && <p className="m-0 text-center">No saved drafts found.</p>}
			<Stack gap={3}>
				{savedDrafts.map(draft => (
					<SavedDraft key={draft.id} id={draft.id} champions={draft.draft} />
				))}
			</Stack>
		</Modal>
	);
}
