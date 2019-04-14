import {
  combineReducers,
} from 'redux';

import reducerTags from './tags';
/**
 *  tags: <object>
 */

 
const reducers = combineReducers({
  tags: reducerTags,
});

export default reducers;
