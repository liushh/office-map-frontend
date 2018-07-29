
import React from 'react';
import OfficeSelectionButtons from '../containers/OfficeSelectionButtons';
import EditRoomButton from '../containers/EditRoomButton';

import AvailableSpaceIndicators from '../components/AvailableSpaceIndicator';

const Header = () => (
    <div>
        <OfficeSelectionButtons />
        <AvailableSpaceIndicators />
    </div>
);

export default Header;