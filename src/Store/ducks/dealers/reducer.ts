import { createReducer } from 'Store/createReducer';

const initialState = {
  data: [],
  loading: false,
  error: null,
};

export const reducer = createReducer(initialState)({});
