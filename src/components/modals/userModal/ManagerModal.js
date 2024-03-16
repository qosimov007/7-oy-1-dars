import React from 'react';
import { connect } from "react-redux";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import SelectManagerTable from "./SelectManagerTable";

//user and manager are same
class ManagerModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  componentDidMount(){
      this.props.onRef(this);
  }
open =()=>{
    this.setState({modal: true});
}
  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }
  render() {
    const { users, onSelect } =this.props;
    const externalCloseBtn = <button className="close" style={{ position: 'absolute', top: '15px', right: '15px' }} onClick={this.toggle}>&times;</button>;
    return (
      <div>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className} external={externalCloseBtn}>
          <ModalHeader>Select Manager</ModalHeader>
          <ModalBody>
           <SelectManagerTable  managers = {users} onSelect = {this.props.onSelect}/>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggle}>Confirm</Button>{' '}
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}


const mapStatetoProps = state => {
  return {
    users: state.user.users || []
  };
};

export default connect(mapStatetoProps)(ManagerModal);