import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { selectOffice } from '../actions/index';
import Dropdown from 'react-dropdown'
import {OFFICE_STATES} from '../constants';


class OfficeSelectionButtons extends Component {
  constructor(props) {
    super(props);

    this.offices_map = {};
    this.office_names = [];

    for (const [ _, office ] of Object.entries(OFFICE_STATES)) {
      this.offices_map[office.name] = office;
      this.office_names.push(office.name);
    }

  }

  selectOffce(option) {
    this.props.selectOffice(this.offices_map[option.value]);
  }

  render() {
    return (
      <div className='office-dropdown'>
        <Dropdown
            options={this.office_names}
            onChange={(option) => this.selectOffce(option)}
            value={this.props.selectedOffice.name}
        />
      </div>
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
