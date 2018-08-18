
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import OfficeSelectionButtons from '../containers/OfficeSelectionButtons';
import EditRoomButton from '../containers/EditRoomButton';

import AvailableSpaceIndicators from '../components/AvailableSpaceIndicator';
import { getAvailableSpaceCount } from '../actions';

class Header extends Component {
    constructor(props) {
      super(props);
    }

    componentWillMount() {
        this.props.getAvailableSpaceCount(this.props.selectedOffice.id);
    }

    componentWillReceiveProps(nextProps) {
      if (this.props.selectedOffice.id !== nextProps.selectedOffice.id) {
        this.props.getAvailableSpaceCount(nextProps.selectedOffice.id);
      }
    }

    getAvailableSpaceIndicators() {
      if (this.props.availableSpaceCount) {
        return <AvailableSpaceIndicators availableSpaceCount={this.props.availableSpaceCount} />
      }
    }

    render() {
      return (
        <div className='header'>
            <OfficeSelectionButtons />
            <EditRoomButton />
            {this.getAvailableSpaceIndicators()}
        </div>
      );
    }
  }

function mapStateToProps(state) {
  return {
    selectedOffice: state.selectedOffice,
    availableSpaceCount: state.availableSpaceCount
  };
}

function matchDispatchToProps(dispatch) {
    var actionCreators = {
        getAvailableSpaceCount: getAvailableSpaceCount
    };
    return bindActionCreators(actionCreators, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(Header);
