import React from "react";

export default ({project, index, onSelect})=>{
    return<tr>
    <th scope="row">{index+1}</th>
    <td>{project.project}</td>
    <td><input type="checkbox" name="project" onChange = {()=>onSelect("project", project)}/></td>
  </tr>}