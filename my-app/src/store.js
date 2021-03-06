import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import { notesReducer } from './notesReducer';


export const store = createStore(notesReducer, applyMiddleware(thunk)); 