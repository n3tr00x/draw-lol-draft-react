import { SavedDraft } from '../types';

const LOCAL_STORAGE_DRAFT_KEY = 'DRAFTS';

export const getSavedDrafts = () => {
	const drafts = window.localStorage.getItem(LOCAL_STORAGE_DRAFT_KEY);

	if (!drafts) {
		window.localStorage.setItem(LOCAL_STORAGE_DRAFT_KEY, JSON.stringify([]));
	}

	return drafts ? (JSON.parse(drafts) as SavedDraft[]) : [];
};

export const saveDraftToStorage = (draft: SavedDraft) => {
	const savedDrafts = getSavedDrafts();
	const newDraftsState = [draft, ...savedDrafts];

	window.localStorage.setItem(LOCAL_STORAGE_DRAFT_KEY, JSON.stringify(newDraftsState));
};

export const removeDraftFromStorage = (id: number) => {
	const savedDrafts = getSavedDrafts();
	const draftsAfterRemove = savedDrafts.filter(draft => draft.id !== id);

	window.localStorage.setItem(LOCAL_STORAGE_DRAFT_KEY, JSON.stringify(draftsAfterRemove));
};
