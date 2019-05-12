import { combineReducers } from 'redux';
import { ActionType } from 'typesafe-actions';

import * as counter from './actions';
import { ADD, INCREMENT } from './constants';

export type CounterAction = ActionType<typeof counter>;

export type CounterState = {
  readonly reduxCounter: number;
};

export default combineReducers<CounterState, CounterAction>({
  reduxCounter: (state = 0, action) => {
    switch (action.type) {
      case INCREMENT:
        return state + 1;

      case ADD:
        return state + 1;  // action(ADD, amount)

      default:
        return state;
    }
  },
});
