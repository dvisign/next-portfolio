import { combineReducers } from 'redux';
import common from './common';
import invitation from './invitation';
import bmw from './bmw';

export default combineReducers({
  // 다른 리듀서를 만들게되면 여기에 넣어줌..
  common,
  invitation,
  bmw
});