import { AppointmentApi } from '../../APIs/appointments';
import * as types from '../types';

export const userActions = {
  getUser: () => ((dispatch: any) => (
    new Promise((resolve, reject) => {
      AppointmentApi.getUser().then((responseData: any) => {
        const user = responseData?.data?.getUserRL;
        dispatch({ type: types.GET_USER_SUCCESS, user });
        resolve(user);
      });
    })
  )),
  getUserSubjects: (subjects: string[]) => ((dispatch: any) => (
    new Promise((resolve, reject) => {
      AppointmentApi.getSubjects(subjects).then((responseData: any) => {
        const subjectsData = responseData?.data?.listSubjectRLs?.items;
        dispatch({ type: types.GET_USER_SUBJECTS_SUCCESS, subjects: subjectsData });
        resolve(subjectsData);
      });
    })
  )),
  logout: () => ((dispatch: any) => (
    dispatch({ type: types.LOGOUT, })
  ))
};
