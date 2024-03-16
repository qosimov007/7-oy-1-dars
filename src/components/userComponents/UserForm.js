import React from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import * as userAction from "../../actions/userActions";
import validate from "./formValidation";

class UserForm extends React.Component {

  handleOnSubmit = (e, action) => {
    e.preventDefault();
    if(action === "update"){
      this.props.updateUser(this.props.user, this.props.reset());
    } else{
      this.props.addUser(this.props.user, this.props.reset());
    }
  };

  renderInput = ({ input, meta, label, col }) => {
    return (
      <>
        <div className={`col-sm-${col}`}>
          <input {...input} className="form-control" placeholder={label} autoComplete="off" />{" "}
          {/* all the meta info are injuected into component here*/}
          {meta.error && meta.touched && <span>{meta.error}</span>}
        </div>
      </>
    );
  };

  render() {
    const { buttonType, pristine, submitting } = this.props;
    console.log("t ", this.props)
    return (
      <div>
        <div className="form-component">
          <form className="form-horizontal" onSubmit={(e)=>this.handleOnSubmit(e, buttonType)}>
            <div className="container">
              <div className="form-group">
                <div className="row">
                  <div className="col-sm-2 col-form-label">
                    <label>First Name: </label>
                  </div>
                  <Field
                    name="firstName"
                    label="First Name"
                    col="6"
                    component={this.renderInput}
                  />{" "}
                  {/* all the meta info are injuected into component here*/}
                </div>
              </div>
              <div className="form-group">
                <div className="row">
                  <div className="col-sm-2 col-form-label">
                    <label>Last Name: </label>
                  </div>
                  <Field
                    name="lastName"
                    label="Last Name"
                    col="6"
                    autoComplete="off"
                    component={this.renderInput}
                  />{" "}
                  {/* all the meta info are injuected into component here*/}
                </div>
              </div>
              <div className="form-group">
                <div className="row">
                  <div className="col-sm-2 col-form-label">
                    <label>Employee Id: </label>
                  </div>
                  <Field
                    name="employeeId"
                    label="employeeId"
                    col="3"
                    component={this.renderInput}
                  />{" "}
                  {/* all the meta info are injuected into component here*/}
                </div>
              </div>
              <div className="form-group2">
                <div className="row">
                  <div className="col-sm-5" />
                  <div className="col-sm-4">
                    <span className="button-space">
                      <input
                        type="submit"
                        id="formSubmit"
                        value={buttonType == "update" ? "Update":"Add"}
                        className="btn btn-outline-dark custom"
                        disabled={ submitting}
                      />
                    </span>
                    <span className="button-space">
                      <button
                        type="button"
                        className="btn btn-outline-dark custom"
                        disabled={pristine || submitting}
                      >
                        Reset
                      </button>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

const mapStatetoProps = state => {
  return {
    initialValues: state.user.formData,
    buttonType: state.user.buttonType,
    user: state.form && state.form.user && state.form.user.values,
  };
};
const mapDisptachToProps = dispatch => {
  return {
    addUser: (user, reset) => dispatch(userAction.addUser(user, reset)),
    updateUser: (user, reset) => dispatch(userAction.updateUser(user, reset)),
  };
};

 UserForm = reduxForm({
  form: "user",
  destroyOnUnmount: false, //to not destroy from data on unmount
  validate: validate,
  enableReinitialize: true 
})(UserForm);

export default 
  connect(
    mapStatetoProps,
    mapDisptachToProps
  )(UserForm);
