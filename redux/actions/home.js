import { actionTypes } from './actionTypes';

export const setTestData = (payload) => ({
  type: actionTypes.SET_TEST_DATA,
  payload,
});
