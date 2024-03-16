import React from "react";
import Project from './Project';
export default ({projects = []}) => ( projects.map((project, index) => <Project project = {project}/>)
);
