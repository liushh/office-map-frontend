
import React from 'react';
import OfficeSelectionButtons from '../containers/OfficeSelectionButtons';
import EditRoomButton from '../containers/EditRoomButton';

import AvailableSpaceIndicators from '../components/AvailableSpaceIndicator';

const Header = () => (
    <div className='header'>
        <OfficeSelectionButtons />
        <EditRoomButton />
        <AvailableSpaceIndicators />
    </div>
);

export default Header;