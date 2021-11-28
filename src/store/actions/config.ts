import AsyncStorage from '@react-native-async-storage/async-storage';
import { AppointmentApi } from '../../APIs/appointments';
import { convertExperimentArray } from '../../utils/utils';
import { initialState } from '../initialState';
import * as types from '../types';

export const configActions = {
  getConfig: () => ((dispatch) => (
    new Promise((resolve, reject) => {
      AppointmentApi.getExperiments().then((experimentsData) => {
        const experimentsArray = experimentsData?.data?.getConfigRL?.experiments ?? [];
        const experiments = convertExperimentArray(experimentsArray);
        dispatch({ type: types.GET_CONFIG_SUCCESS, experimentsArray, experiments });
        resolve(experimentsArray);
      });
    })
  ))
};
