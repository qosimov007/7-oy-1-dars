import React from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import { bindActionCreators } from 'redux'
import { change } from "redux-form";
import ManagerModal from "../modals/userModal/ManagerModal";
import * as projectActions from "../../actions/projectActions";
class ProjectForm extends React.Component {
  state = {
    setDate: false
  };

  selectDate = e => {
    console.log("select");
    this.setState(preState => ({ ...this.state, setDate: !preState.setDate }));
  };
  
  onManagerSelect =(fieldName, manager)=>{
    console.log("manager selec", manager, fieldName)
    console.log("p : ", this.props)
    this.props.change(fieldName, manager.firstName);
  }
  onSubmit = (e)=>{
    e.preventDefault();
    this.props.addProject(this.props.project);
  }
  renderInput = ({ input, meta, label, col, type, disabled }) => {
    console.log("input : ", input, meta);
    return (
      <>
        <div className={`col-sm-${col}`}>
          <input
            {...input}
            className="form-control"
            placeholder={label}
            disabled={disabled}
            autocomplete="off"
            type={type}
          />{" "}
          {/* all the meta info are injuected into component here*/}
          {meta.error && meta.touched && <span>{meta.error}</span>}
        </div>
      </>
    );
  };
  renderDate = ({ input, meta, label, col, type, setDate }) => {
    console.log("input : ", input, meta);
    return (
      <>
        <div className={`col-sm-${col}`}>
          <input
            {...input}
            className="form-control"
            placeholder={label}
            disabled={!setDate}
            autoComplete="off"
            type={type}
          />
          {/* all the meta info are injuected into component here*/}
          {meta.error && meta.touched && <span>{meta.error}</span>}
        </div>
      </>
    );
  };
  renderCheckbox = ({ input, meta, label, col }) => {
    return (
      <>
        <div className={`col-sm-${col}`}>
          <input
            {...input}
            type="checkbox"
            className="form-control"
            placeholder={label}
            autocomplete="off"
          />{" "}
          {/* all the meta info are injuected into component here*/}
          {meta.error && meta.touched && <span>{meta.error}</span>}
        </div>
      </>
    );
  };
  renderRange = ({ input, meta, label, col }) => {
    return (
      <div className={`col-sm-${col}`}>
        <input
          {...input}
          type="range"
          class="custom-range"
          min="0"
          max="30"
        />
        {/* all the meta info are injuected into component here*/}
        {meta.error && meta.touched && <span>{meta.error}</span>}
      </div>
    );
  };
  render() {
    return (
      <div class="container">
        <div className="form-component">
        <form onSubmit ={this.onSubmit}  >
          <div class="form-group">
            <div class="row">
              <div className="col-sm-2">
                <label>Project: </label>
              </div>
              <Field
                name="project"
                component={this.renderInput}
                type="text"
                col="6"
              />
            </div>
          </div>
          <div className="form-group">
          <div class="row">
            <div className="col-sm-4">
              <span className = "custom-checkbox">
              <input
                type="checkbox"
                className="form-check-input "
                autocomplete="off"
                onChange={this.selectDate}
              />
              </span>
              <label>Set Start and End date</label>
            </div>
            <Field
              name="startDate"
              component={this.renderDate}
              type="date"
              col="2"
              setDate={this.state.setDate}
            />
            <Field
              name="endDate"
              component={this.renderDate}
              type="date"
              col="2"
              setDate={this.state.setDate}
            />
          </div>
          </div>
          <div className="form-group">
          <div class="row">
            <div className="col-sm-2">
              <label>priority: </label>
            </div>
            <Field
              name="priority"
              component={this.renderRange}
              type="range"
              col="6"
            />
          </div>
          </div>
          <div className="form-group">
          <div class="row">
            <div className="col-sm-2">
              <label>Manager: </label>
            </div>
            <Field
              name="manager"
              component={this.renderInput}
              type="text"
              col="4"
              disabled={true}
            />
            <div className="col-sm-4">
              <button
                type="button"
                className="btn btn-outline-dark custom"
                onClick={() => this.managerModal.open()}
              >
                Search
              </button>
            </div>
          </div>
          </div>
          <div className="form-group">
          <div class="row">
            <div className="col-sm-4" />
            <div className="col-sm-4">
              <span className="button-space">
                <button type="submit" className="btn btn-outline-dark custom">
                  Add
                </button>
              </span>
              <span className="button-space">
                <button type="button" className="btn btn-outline-dark custom">
                  Reset
                </button>
              </span>
            </div>
            </div>
          </div>
          
        </form>
        <ManagerModal
        onSelect = {this.onManagerSelect}
          onRef={ref => {
            this.managerModal = ref;
          }}
        />
      </div>
      </div>
    );
  }
}

const mapStatetoProps = state => {
  return {
    project: state.form && state.form.project && state.form.project.values
  };
};
const mapDisptachToProps = dispatch => {
  return  {
    addProject: (project, reset) => dispatch(projectActions.addProject(project, reset)),
  }
};

ProjectForm = reduxForm({
  form: "project",
  destroyOnUnmount: false, //to not destroy from data on unmount
  enableReinitialize: true
})(ProjectForm);

export default connect(
  mapStatetoProps,
  mapDisptachToProps
)(ProjectForm);


//return  bindActionCreators({change}, dispatch);;