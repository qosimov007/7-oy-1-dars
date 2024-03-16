import React from 'react';
import moment from "moment";
export default ({project})=>{
    console.log("project  : ", project);
    return (
        <div class="container view-content">
        <div class="row form-group">
          <div class="col-sm-5 project-box" >
          
          <div class="col-sm-12" >
              <label>Project:</label>
              <span>{project.project}</span>
              </div>
          <div class="col-sm-12" >
              <div class="row">
          <div class="col-sm-6" >
              <label>No. Of Tasks:</label>
              <span>{}</span>
              </div>
              <div class="col-sm-6" >
                  <label>Completed: </label>
              
              </div>
              </div>
              </div>
            
          <div class="col-sm-12" >
          <div class="row">
          <div class="col-sm-6" >
              <label>Start Date: </label>
              <span>{moment(project.startDate).format("DD-mm-YYYY")}</span>
              </div>
              <div class="col-sm-6" >
              <label>End Date: </label>
              <span>{moment(project.endDate).format("DD-mm-YYYY")}</span>
              </div>
              </div>
              </div>
          
              </div>
          <div class="col-sm-1 priority-box" >
            <div class="row ">
                  <label>priority: </label>
                  </div>
                  <div class="row project-box">
                  {project.priority}
                  </div>
              
              </div>
          <div class="col-sm-2">
            <div>
              {" "}
              <button type="button" className="btn btn-outline-dark ">
                Update
              </button>
            </div>
            <div>
              {" "}
              <button type="button" className="btn btn-outline-dark ">
                Suspend
              </button>
            </div>
          </div>
        </div>
      </div>
    )
}