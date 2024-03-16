import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "../reducers/rootReducer";

export default function (initialState) {
  const reduxDevtools =
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__();
  return createStore(
    rootReducer,
    initialState,
    compose(
      applyMiddleware(thunk),
      reduxDevtools
    )
  );
};
