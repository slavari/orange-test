import { combineReducers } from 'redux';

import GeneralReducer from './general/reducers';

const rootReducer = combineReducers({
    GeneralReducer,
});

/**
 * Here are merged all reducers together
 */
export default rootReducer;
