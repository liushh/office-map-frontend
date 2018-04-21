import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  updateOffices,
  selectOffice
} from '../actions/index';

import OfficeSelectionButton from '../components/OfficeSelectionButton';

class OfficeSelectionButtons extends Component {

  onButtonClicked(office) {
    this.props.offices.forEach((currentOffice) => {
      if (office.id === currentOffice.id) {
        currentOffice.isSelected = true;
      } else {
        currentOffice.isSelected = false;
      }
    });
    this.props.updateOffices(this.props.offices);
    this.props.selectOffice(office);
  }

  createOfficeSelectionButtons() {
    if (this.props.offices) {
      return this.props.offices.map((office, index) => {
        return (
          <OfficeSelectionButton office={office}
                                 key={office.id}
                                 index={index}
                                 isSelected={office.isSelected}
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
  return {
    offices: state.offices,
    selectedOffice: state.selectedOffice
  };
}

function matchDispatchToProps(dispatch) {
  var actionCreators = {
    selectOffice: selectOffice,
    updateOffices: updateOffices
  };
  return bindActionCreators(actionCreators, dispatch);
}


export default connect(mapStateToProps, matchDispatchToProps)(OfficeSelectionButtons);
