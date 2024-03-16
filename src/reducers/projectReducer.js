
const INITIAL_STATE = {
    projects: []
}


export default (state=INITIAL_STATE, action)=>{
    switch (action.type){
        case "GET_PROJECTS":
            return {...state, projects: action.payload};
        case "ADD_PROJECT":
            return{ ...state, projects: state.projects.concat(action.payload) }
        case "DELETE_PROJECT":
            return { ...state, projects: state.projects.filter((project)=>project.id !== action.payload)}
        default:
            return state;
    }
}

