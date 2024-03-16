import React from "react";
import { Table } from 'reactstrap';
import SelectManagerRow from "./SelectManagerRow"
export default ({managers, onSelect})=>{
    return(<div>
 <Table striped>
        <thead>
          <tr>
            <th>S.No</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Username</th>
            <th>Select</th>
          </tr>
        </thead>
        <tbody>
        {managers.map((manager, index)=><SelectManagerRow manager = {manager} key = {index} index ={index} onSelect = {onSelect}/>)}
        </tbody>
      </Table>
    </div>)
}