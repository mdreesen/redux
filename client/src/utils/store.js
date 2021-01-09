import { createStore } from 'redux';
import rootReducer from '../utils/features/reducer';

const store = createStore(rootReducer)

export default store