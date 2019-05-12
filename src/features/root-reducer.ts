// 将分散在该目录下的各个 reducer 集中起来
import { combineReducers } from 'redux';

import { routerReducer } from 'react-router-redux';
import counterReducer from './counter/reducer';

const rootReducer = combineReducers({
  router: routerReducer,
  counter: counterReducer,
});

export default rootReducer;
