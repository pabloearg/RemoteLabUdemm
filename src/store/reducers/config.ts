import { convertExperimentArray } from '../../utils/utils';
import { initialState } from '../initialState';
import * as types from '../types';

export default (state = initialState.config, action) => {
  // We save existing data to prevent losing it in updates since its used in many places
  // let data = Object.assign(state.data, action.kid)
  switch (action.type) {
    case types.GET_CONFIG_SUCCESS:
      return {
        ...state,
        experimentsArray: action.experimentsArray,
        experiments: action.experiments,
      };
    case types.LOGOUT:
      return {
        ...initialState.config
      }
    default:
      return state;
  }
};
