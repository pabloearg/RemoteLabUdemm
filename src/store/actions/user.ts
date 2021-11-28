import { AppointmentApi } from '../../APIs/appointments';
import * as types from '../types';

export const userActions = {
  getUser: () => ((dispatch) => (
    new Promise((resolve, reject) => {
      AppointmentApi.getUser().then((responseData) => {
        const user = responseData?.data?.getUserRL;
        dispatch({ type: types.GET_USER_SUCCESS, user });
        resolve(user);
      });
    })
  ))
};
