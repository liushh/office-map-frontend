export const CONSTANTS = {
  EMPTY_SPACE_SIZE: 20
}

export const WL2_OFFICE_ID = 'wl2_gdl';
export const WL1_OFFICE_ID = 'wl1_gdl';
export const SAN_FRANCISCO = 'san_francisco';

export const SPACE_TYPES = [
    {
        name: 'Employee Desk',
        backgroundColor: 'red'
    },
    {
        name: 'Empty Desk',
        backgroundColor: 'yellow'
    },
    {
        name: 'Visitor Desk',
        backgroundColor: 'blue'
    },
    {
        name: 'Meeting Room',
        backgroundColor: 'transparent'
    },
    {
        name: 'Name Tag',
        backgroundColor: 'purple'
    },
];

export const OFFICE_STATES = [
    {
        name: 'Wizeline GDL 1',
        id: WL1_OFFICE_ID,
        isSelected: false
    },
    {
        name: 'Wizeline GDL 2',
        id: WL2_OFFICE_ID,
        isSelected: true
    },
    {
        name: 'San Francisco',
        id: SAN_FRANCISCO,
        isSelected: false
    }
];