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
    space,
    spaceType
}) => {
    let percent = 0;
    if (space.available && space.total) {
        percent = ((space.available / space.total) * 100).toFixed(2);
    }
    return (
        <div className='available-space-indicator'>
            {space.available} available
            <div className='indicator-label'>{spaceType}</div>
            <Line
                percent={percent}
                strokeWidth="15"
                strokeLinecap="square"
                trailColor='grey'
                trailWidth="15"
                strokeColor={spaceTypeTobackgroundColor[spaceType]} />
        </div>
    )
};

const AvailableSpaceIndicators = ({ availableSpaceCount }) => (
    <div className='available-space-indicators'>
        <AvailableSpaceIndicator
            space={availableSpaceCount.employee_desk}
            spaceType={EMPLOYEE_DESK}/>
        <AvailableSpaceIndicator
            space={availableSpaceCount.empty_desk}
            spaceType={EMPTY_DESK}/>
        <AvailableSpaceIndicator
            space={availableSpaceCount.visitor_desk}
            spaceType={VISTITOR_DESK}/>

    </div>
);


export default AvailableSpaceIndicators;