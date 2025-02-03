import { createStore } from "../custom-redux/store";

const defaultState = { count: 0, text: "constant text" };

const rootReducer = (state, action) => {
  switch (action?.type) {
    case "increment":
      return {
        ...state,
        count: (state.count || 0) + 1,
      };

    default:
      return state;
  }
};

export const store = createStore(rootReducer, defaultState);
