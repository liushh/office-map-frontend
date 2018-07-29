import React from 'react';
import { Line } from 'rc-progress';
import {
    EMPLOYEE_DESK,
    EMPTY_DESK,
    VISTITOR_DESK,
    SPACE_TYPES
} from '../constants';

const spaceTypeTobackgroundColor = {};
SPACE_TYPES.forEach(spaceType => {
    spaceTypeTobackgroundColor[spaceType.name] = spaceType.backgroundColor;
});

const AvailableSpaceIndicator = ({
    availableCount,
    spaceType,
    color
}) => (
    <div className='available-space-indicator'>
        {availableCount} available
        <div className='indicator-label'>{spaceType}</div>
        <Line
            percent="90"
            strokeWidth="15"
            strokeLinecap="square"
            trailColor='grey'
            trailWidth="15"
            strokeColor={spaceTypeTobackgroundColor[spaceType]} />
    </div>
);

const AvailableSpaceIndicators = () => (
    <div className='available-space-indicators'>
        <AvailableSpaceIndicator
            availableCount={10}
            spaceType={EMPLOYEE_DESK}/>
        <AvailableSpaceIndicator
            availableCount={15}
            spaceType={EMPTY_DESK}/>
        <AvailableSpaceIndicator
            availableCount={24}
            spaceType={VISTITOR_DESK}/>

    </div>
);


export default AvailableSpaceIndicators;