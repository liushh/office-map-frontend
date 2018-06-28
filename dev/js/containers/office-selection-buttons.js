import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { selectOffice } from '../actions/index';
import Dropdown from 'react-dropdown'
import {OFFICE_STATES} from '../constants';


class OfficeSelectionButtons extends Component {
  constructor(props) {
    super(props);

    this.office_names = OFFICE_STATES.map(office => office.name);
    this.offices_map = {};
    this.offices_map[OFFICE_STATES[0].name] = OFFICE_STATES[0];
    this.offices_map[OFFICE_STATES[1].name] = OFFICE_STATES[1];
    this.offices_map[OFFICE_STATES[2].name] = OFFICE_STATES[2];
  }

  selectOffce(option) {
    this.props.selectOffice(this.offices_map[option.value]);
  }

  render() {
    return (
      <Dropdown
          options={this.office_names}
          onChange={(option) => this.selectOffce(option)}
          value={this.props.selectedOffice.name}
      />
    );
  }
}

function mapStateToProps(state) {
  return {
    selectedOffice: state.selectedOffice
  };
}

function matchDispatchToProps(dispatch) {
  var actionCreators = {
    selectOffice: selectOffice
  };
  return bindActionCreators(actionCreators, dispatch);
}


export default connect(mapStateToProps, matchDispatchToProps)(OfficeSelectionButtons);
