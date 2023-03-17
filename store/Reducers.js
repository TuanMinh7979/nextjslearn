import { ACTIONS } from "./Actions";

const reducers = (state, action) => {
  switch (action.type) {
    case ACTIONS.NOTIFY:
      console.log("dp NOTIFY: payload: ", action.payload)
      return {
        ...state,
        notify: action.payload,
      };
    case ACTIONS.AUTH:
      console.log("dp AUTH: payload: ", action.payload)
      return {
        ...state,
        auth: action.payload,
      };

    default:
      return state;
  }
};

export default reducers;
