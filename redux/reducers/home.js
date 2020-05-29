import { actionTypes } from 'actions/actionTypes';

const initialState = {
  testData: false,
};

const handlers = {
  [actionTypes.SET_TEST_DATA]: (state, { payload }) => ({ ...state, testData: payload }),
  DEFAULT: (state) => state,
};

export default (state = initialState, action) => {
  const handler = handlers[action.type] || handlers.DEFAULT;
  return handler(state, action);
};
