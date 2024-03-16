import React from "react";

export default ({ user, deleteUser, editUser, index,length }) => {
    const position = (index+length)%2 === 0 ? "even" :"odd"; // length is used to make the color dynamic... 
    //...observe by removing lenght....the color postion will be constant
    return(
        <div className = {`view-content ${position}`}>
        <div className="row form-group">
          <div className="col-sm-6">
            <input
              className="form-control"
              type="text"
              placeholder={user.firstName}
              readOnly
            />
          </div>
          <div className="col-sm-4">
            <span className="button-space">
              <button
                type="button"
                className="btn btn-outline-dark custom"
                onClick={() => editUser(user)}
              >
                Edit
              </button>
            </span>
          </div>
        </div>
        <div className="row form-group">
          <div className="col-sm-6">
            <input
              className="form-control"
              type="text"
              placeholder={user.lastName}
              readOnly
            />
          </div>
          <div className="col-sm-4">
            <span className="button-space">
              <button
                type="button"
                className="btn btn-outline-dark custom"
                onClick={()=>deleteUser(user)}
              >
                Delete
              </button>
            </span>
          </div>
        </div>
        <div className="row form-group">
          <div className="col-sm-6">
            <input
              className="form-control"
              type="text"
              placeholder={user.employeeId}
              readOnly
            />
          </div>
        </div>
      </div>
    );
}
 
