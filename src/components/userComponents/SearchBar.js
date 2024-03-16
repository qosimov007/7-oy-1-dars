import React from "react";
export default ({onFilterTextChange, onSortClick})=>(
    <div className="container search-bar">
    <div className="row">
    <div className="col-sm-3">
        <input
          className="form-control"
          type="text"
          id="searchFilter"
          placeholder="Search..."
          onChange = {(e) => onFilterTextChange(e.target.value)}
        />
        </div>
        <div className="col-sm-8">
        <span className = "sort">
            <strong>Sort:</strong>
        </span>
          <span className = "search-bar-button">
        <button
              type="button"
              className="btn btn-outline-dark custom-sort-name"
                onClick ={()=>onSortClick("firstName")}
            >
              
              First Name
            </button>
            </span>
            <span className = "search-bar-button">
        <button
              type="button"
              className="btn btn-outline-dark custom-sort-name"
              onClick ={()=>onSortClick("lastName")}
            >
              Last Name
            </button>
        </span>
        <span className = "search-bar-button">
        <button
              type="button"
              className="btn btn-outline-dark custom-sort-id"
              onClick ={()=>onSortClick("employeeId")}
            >
             Id
            </button>
            </span>
        </div>
        </div>
        </div>
)         
