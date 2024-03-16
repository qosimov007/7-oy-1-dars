import axios from "axios";
const BASE_API_URL = "http://localhost:3030/project";


export const addProject = (project, reset) => async dispatch => {
    try {
      dispatch({ type: "ADD_PROJECT_PENDING"});
      const response = await axios.post(`${BASE_API_URL}/add`, project);
      dispatch({
        type: "ADD_PROJECT",
        payload: response.data
      });
      reset();
    } catch (e) {
      console.log("error: ", e);
      dispatch({ type: "ADD_PROJECT_FAILED"});
    }
  };


  export const getProjects = () => async dispatch => {
    try {
      dispatch({ type: "GET_PROJECTS_PENDING"});
      const response = await axios.get(`${BASE_API_URL}/getAll`);
      dispatch({
        type: "GET_PROJECTS",
        payload: response.data
      });
    } catch (e) {
      console.log("error: ", e);
      dispatch({ type: "ADD_PROJECT_FAILED"});
    }
  };