
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
        this.props.getAvailableSpaceCount('san_francisco')
    }

    render() {
      return (
        <div className='header'>
            <OfficeSelectionButtons />
            <EditRoomButton availableSpaceCount={this.props.availableSpaceCount} />
            <AvailableSpaceIndicators />
        </div>
      );
    }
  }

function mapStateToProps(state) {
  return {
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
