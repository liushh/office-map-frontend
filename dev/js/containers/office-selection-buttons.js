import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import OfficeSelectionButton from '../components/OfficeSelectionButton';
import {updateOffices} from '../actions/index';



class OfficeSelectionButtons extends Component {

  onButtonClicked(office) {
    this.props.offices.forEach((currentOffice) => {
      if (office.id === currentOffice.id) {
        currentOffice.selected = true;
      } else {
        currentOffice.selected = false;
      }
    });
    this.props.updateOffices(this.props.offices);
  }

  createOfficeSelectionButtons() {
    if (this.props.offices) {
      return this.props.offices.map((office, index) => {
        return (
          <OfficeSelectionButton office={office}
                                 key={office.id}
                                 index={index} 
                                 onButtonClicked={(office) => this.onButtonClicked(office)}/>
        );
      });
    }
  }

  render() {
    return (
      <div>
        {this.createOfficeSelectionButtons()}
      </div>
    );
  }  
}

function mapStateToProps(state) {
  console.log('offices = ', state.offices);
  return {
    offices: state.offices
  };
}

function matchDispatchToProps(dispatch) {
  var actionCreators = {
    updateOffices: updateOffices
  };
  return bindActionCreators(actionCreators, dispatch);
}


export default connect(mapStateToProps, matchDispatchToProps)(OfficeSelectionButtons);
