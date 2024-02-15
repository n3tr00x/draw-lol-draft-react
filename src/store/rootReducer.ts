import { combineReducers } from '@reduxjs/toolkit';
import uiReducer from './UI/uiSlice';
import drawReducer from './draw/drawSlice';

export const rootReducer = combineReducers({
	ui: uiReducer,
	draw: drawReducer,
});
