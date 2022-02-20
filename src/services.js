import { createStore } from 'redux';
import { rootReducer } from './store/index';

export const store = createStore(rootReducer);
