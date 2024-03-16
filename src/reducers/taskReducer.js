
const INITIAL_STATE = {
    tasks:[],
    formData: {}
    }
    
    
    export default (state=INITIAL_STATE, action)=>{
        switch (action.type){
            case "ADD_TASK_PENDING":
                return { ...state, addPending: true, addFailed: false}
            case "ADD_TASK":
                return{ ...state, tasks: state.tasks.concat(action.payload), addPending: false, buttonType: "add", formData:{}}
            case "ADD_TASK_FAILED":
                        return{ ...state, addFailed: true, addPending: false}
            case "GET_TASKS":
               return { ...state, tasks: action.payload}
            case "DELETE_TASK":
                return { ...state, tasks: state.tasks.filter((task)=>task.id !== action.payload)}
            case "UPDATE_TASK":
                const updatedTask = action.payload;
                return { ...state, tasks: state.tasks.map((task) => task.id === updatedTask.id ? updatedTask : task), buttonType: "add", formData:{}}
            case "EDIT_TASK":
                return { ...state, formData: action.payload, buttonType: "update" };
          default:
                return state;
        }
    }
    
    
    