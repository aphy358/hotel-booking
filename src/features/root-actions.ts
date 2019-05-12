// 将分散在该目录下的各个 actions 集中起来
import { routerActions } from 'react-router-redux';
import * as counterActions from './counter/actions';

export default {
  router: routerActions,
  counter: counterActions,
};
