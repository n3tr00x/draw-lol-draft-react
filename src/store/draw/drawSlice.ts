import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { DrawnChampion, SavedDraft } from '../../types';
import { drawChampions } from './drawChampions';
import {
	getSavedDrafts,
	removeDraftFromStorage,
	saveDraftToStorage,
} from '../../utilities/localStorage';

type DraftStatus = 'DRAWED' | 'SAVED' | 'ERROR';

type DrawState = {
	drawnChampions: DrawnChampion[];
	draftStatus: DraftStatus;
	savedDrafts: SavedDraft[];
};

const initialState: DrawState = {
	drawnChampions: drawChampions(),
	draftStatus: 'DRAWED',
	savedDrafts: getSavedDrafts(),
};

const drawSlice = createSlice({
	name: 'draw',
	initialState,
	reducers: {
		draw: state => {
			state.drawnChampions = drawChampions();
			state.draftStatus = 'DRAWED';
		},
		saveDraft: (state, action: PayloadAction<DrawnChampion[]>) => {
			if (state.draftStatus !== 'DRAWED') {
				state.draftStatus = 'ERROR';
				return;
			}

			const draft = {
				id: Date.now(),
				draft: action.payload,
			};

			saveDraftToStorage(draft);
			state.savedDrafts.unshift(draft);
			state.draftStatus = 'SAVED';
		},
		removeDraft: (state, action: PayloadAction<number>) => {
			state.savedDrafts = state.savedDrafts.filter(draft => draft.id !== action.payload);
			removeDraftFromStorage(action.payload);
			state.draftStatus = 'DRAWED';
		},
	},
});

export const { draw, saveDraft, removeDraft } = drawSlice.actions;
export default drawSlice.reducer;
