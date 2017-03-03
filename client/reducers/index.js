import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import listings from './listings';

const rootReducer = combineReducers({listings, router: routerReducer});

export default rootReducer;
