import { combineReducers } from '@reduxjs/toolkit';
import uiReducer from './UI/uiSlice';

export const rootReducer = combineReducers({
	ui: uiReducer,
});
