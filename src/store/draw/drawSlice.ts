import { createSlice } from '@reduxjs/toolkit';
import { DrawnChampion } from '../../types';
import { drawChampions } from './drawChampions';

type DraftStatus = 'DRAWED' | 'SAVED' | 'ERROR';

type DrawState = {
	drawnChampions: DrawnChampion[];
	draftStatus: DraftStatus;
};

const initialState: DrawState = {
	drawnChampions: drawChampions(),
	draftStatus: 'DRAWED',
};

const drawSlice = createSlice({
	name: 'draw',
	initialState,
	reducers: {
		draw: state => {
			state.drawnChampions = drawChampions();
			state.draftStatus = 'DRAWED';
		},
		saveDraft: state => {
			if (state.draftStatus !== 'DRAWED') {
				state.draftStatus = 'ERROR';
				return;
			}

			state.draftStatus = 'SAVED';
		},
	},
});

export const { draw, saveDraft } = drawSlice.actions;
export default drawSlice.reducer;
