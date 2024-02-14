import { createSlice } from '@reduxjs/toolkit';

type UIState = {
	isModalOpens: boolean;
	isToastOpens: boolean;
};

const initialState: UIState = {
	isModalOpens: false,
	isToastOpens: false,
};

const uiSlice = createSlice({
	name: 'ui',
	initialState,
	reducers: {
		openModal: state => {
			state.isModalOpens = true;
		},
		closeModal: state => {
			state.isModalOpens = false;
		},
	},
});

export const { openModal, closeModal } = uiSlice.actions;
export default uiSlice.reducer;
