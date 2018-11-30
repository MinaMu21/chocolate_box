// Permet de combiner les reducers
import { combineReducers } from 'redux';
// Import du reducer box
import box from './box';
const allReducers = combineReducers ({
    box,
})

export default allReducers;