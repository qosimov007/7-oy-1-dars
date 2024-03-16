import axios from "axios";

const BASE_API_URL = "http://localhost:3030/task";

export const addTask = (task, reset) => async dispatch => {
  try {
    dispatch({ type: "ADD_TASK_PENDING" });
    console.log("add :", task);
    const response = await axios.post(`${BASE_API_URL}/add`, task);
    dispatch({
      type: "ADD_TASK",
      payload: response.data
    });
    reset();
  } catch (e) {
    console.log("error: ", e);
    dispatch({ type: "ADD_TASK_FAILED" });
  }
};

export const updateTask = (task, reset) => async dispatch => {
  try {
    dispatch({ type: "UPDATE_TASK_PENDING" });
    const response = await axios.post(`${BASE_API_URL}/update`, task);
    dispatch({
      type: "UPDATE_TASK",
      payload: response.data
    });
    reset();
  } catch (e) {
    console.log("error: ", e);
    dispatch({ type: "UPDATE_TASK_FAILED" });
  }
};

export const getTasks = () => async dispatch => {
  try {
    dispatch({ type: "GET_TASKS_PENDING" });
    const response = await axios.get(`${BASE_API_URL}/getAll`);
    dispatch({
      type: "GET_TASKS",
      payload: response.data
    });
  } catch (e) {
    console.log("error: ", e);
    dispatch({ type: "GET_TASKS_FAILED" });
  }
};
export const deleteTask = task => async dispatch => {
  try {
    dispatch({ type: "DELETE_TASK_PENDING" });
    await axios.delete(`${BASE_API_URL}/delete/${task.id}`);
    dispatch({
      type: "DELETE_TASK",
      payload: task.id
    });
  } catch (e) {
    console.log("error: ", e);
    dispatch({ type: "DELETE_TASK_FAILED" });
  }
};

export const editTask = task => {
  return {
    type: "EDIT_TASK",
    payload: task
  };
};
