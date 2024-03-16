import React from 'react';
import { connect } from "react-redux";
import ProjectForm from "./ProjectForm";
import ViewProject from "./ViewProject";
import SearchBar from "./SearchBar";
import selector from "../../common/selector";

import { getProjects } from "../../actions/projectActions";

 class ProjectDashboard extends React.Component{
   state={
     sortBy:undefined,
     searchBy: undefined,
   }

   selectSortBy = (sortBy)=>{
     this.setState({sortBy})
   }

   onSearchTextChange = (searchBy)=>{
    this.setState({searchBy})
   }
    componentDidMount(){
        this.props.getProjects();
    }
    render(){
      const { projects } = this.props;
      const { sortBy, searchBy } = this.state;
        return <div>
            <ProjectForm />
            <SearchBar selectSortBy = {this.selectSortBy} onSearchChange = {this.onSearchTextChange}/>
            <ViewProject projects = {selector(projects, sortBy, "project", searchBy)}/>
        </div>
    }
}

const mapStatetoProps = state => {
    return {
      projects: state.project.projects || []
    };
  };
  const mapDisptachToProps = dispatch => {
      return{
        getProjects : () => dispatch(getProjects())
      }
   
  };
  
  export default connect(mapStatetoProps, mapDisptachToProps)(ProjectDashboard);