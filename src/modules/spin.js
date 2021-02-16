import { createAction, handleActions } from 'redux-actions';

const RIGHT = 'spin/RIGHT';
const LEFT = 'spne/LEFT';

export const right = createAction(RIGHT);
export const left = createAction(LEFT);

const initState = {
  flow: 'right',
};

const spin = handleActions(
  {
    [RIGHT]: (state, action) => ({
      flow: 'right',
    }),
    [LEFT]: (state, action) => ({
      flow: 'left',
    }),
  },
  initState
);

export default spin;
