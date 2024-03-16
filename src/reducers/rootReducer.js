import { combineReducers } from "redux";
import { reducer as formReducer } from 'redux-form'
import userReducer from "./userReducer";
import taskReducer from "./taskReducer";
import projectReducer from "./projectReducer";

export default combineReducers({
  user: userReducer,
  task: taskReducer,
  project: projectReducer,
  form: formReducer,
});
