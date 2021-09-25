import * as React from 'react';
import { StackActions } from '@react-navigation/native';

export const navigatorRef = React.createRef();

const navigate = (name, params) => {
  navigatorRef.current?.navigate(name, params);
};
const dispatch = (action) => {
  navigatorRef.current?.dispatch(action);
};
function replace(name, params) {
  navigatorRef.current?.dispatch(StackActions.replace(name, params));
}
function push(name, params) {
  navigatorRef.current?.dispatch(StackActions.push(name, params));
}
function goBack() {
  navigatorRef.current?.goBack();
}
export const Navigator = {
  navigate,
  dispatch,
  replace,
  push,
  goBack,
};
