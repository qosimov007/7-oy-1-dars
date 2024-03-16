import axios from "axios";

const BASE_API_URL = "http://localhost:3030/user";


export const addUser = (user, reset) => async dispatch => {
      try {
        dispatch({ type: "ADD_USER_PENDING"});
        const response = await axios.post(`${BASE_API_URL}/add`, user);
        dispatch({
          type: "ADD_USER",
          payload: response.data
        });
        reset();
      } catch (e) {
        console.log("error: ", e);
        dispatch({ type: "ADD_USER_FAILED"});
      }
    };

    export const updateUser = (user, reset) => async dispatch => {
      try {
        dispatch({ type: "UPDATE_USER_PENDING"});
        const response = await axios.post(`${BASE_API_URL}/update`, user);
        dispatch({
          type: "UPDATE_USER",
          payload: response.data
        });
        reset();
      } catch (e) {
        console.log("error: ", e);
        dispatch({ type: "UPDATE_USER_FAILED"});
      }
    };
    
    export const getUsers = () => async dispatch => {
        try {
          dispatch({ type: "GET_USERS_PENDING"});
          const response = await axios.get(`${BASE_API_URL}/getAll`);
          dispatch({
            type: "GET_USERS",
            payload: response.data
          });
        } catch (e) {
          console.log("error: ", e);
          dispatch({ type: "GET_USERS_FAILED"});
        }
      };
      export const deleteUser = (user) => async dispatch => {
        try {
          dispatch({ type: "DELETE_USER_PENDING"});
          await axios.delete(`${BASE_API_URL}/delete/${user.id}`);
          dispatch({
            type: "DELETE_USER",
            payload: user.id
          });
        } catch (e) {
          console.log("error: ", e);
          dispatch({ type: "DELETE_USER_FAILED"});
        }
      };

      export const editUser = (user)=>{
        return{
          type: "EDIT_USER",
          payload: user
        }
      }
