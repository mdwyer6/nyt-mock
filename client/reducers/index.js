import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import listings from './listings';
import departments from './departments';

const rootReducer = combineReducers({listings, departments, routing: routerReducer});

export default rootReducer;
