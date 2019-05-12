import { createStore } from 'redux';
import rootReducer from '../features/root-reducer';
import initialState from './initState';

const store = createStore(rootReducer, {})
export default store;