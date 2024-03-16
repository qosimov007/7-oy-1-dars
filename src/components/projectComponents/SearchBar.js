import React from "react";

export default ({ selectSortBy, onSearchChange }) => (<div>
    <div class="container search-bar">
    <div class="row form-group ">
      <div class="col-sm-8">
        <input type="text" class="form-control" placeholder="Search..." onChange = {(e)=>onSearchChange(e.target.value)}/>
      </div>
    </div>
    <div class="row form-group">
      <div class="col-sm form-group">
        <span>Sort By: </span>
        <span>
          <button type="button" className="btn btn-outline-dark " onClick = {()=>selectSortBy("startDate")}>
            Start Date
          </button>
        </span>
        <span>
          {" "}
          <button type="button" className="btn btn-outline-dark" onClick = {()=>selectSortBy("endDate")}>
            End Date
          </button>{" "}
        </span>
        <span>
          {" "}
          <button type="button" className="btn btn-outline-dark" onClick = {()=>selectSortBy("priority")}>
            Priority
          </button>
        </span>
        <span>
          {" "}
          <button type="button" className="btn btn-outline-dark" onClick = {()=>selectSortBy("completed")}>
            Completed
          </button>
        </span>
      </div>
      </div>
      </div>
      </div>
);
