import React from "react";
import { Table } from 'reactstrap';
import SelectProjectRow from "./SelectProjectRow";

export default ({projects, onSelect})=>{
    return(<div>
 <Table striped>
        <thead>
          <tr>
            <th>S.No</th>
            <th>Project Name</th>
            <th>Select</th>
          </tr>
        </thead>
        <tbody>
        {projects.map((project, index)=><SelectProjectRow project = {project} key = {index} index ={index} onSelect = {onSelect}/>)}
        </tbody>
      </Table>
    </div>)
}