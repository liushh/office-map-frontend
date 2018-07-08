export const CONSTANTS = {
  EMPTY_SPACE_SIZE: 20
}

export const WL2_OFFICE_ID = 'wl2_gdl';
export const WL1_OFFICE_ID = 'wl1_gdl';
export const SAN_FRANCISCO = 'san_francisco';

export const EMPLOYEE_DESK = 'Employee Desk';
export const EMPTY_DESK = 'Empty Desk';
export const VISTITOR_DESK = 'Visitor Desk';
export const MEETING_ROOM = 'Meeting Room';
export const MEETING_ROOM_DESK = 'Meeting Room Desk';

export const AUTH0_USER_EMAIL_STORE_KEY = 'auth0_email';
export const EDITOR_WHITELIST = [
    'liusha@wizeline.com',
    'hlswh1021@gmail.com',
    'gabriela@wizeline.com',
    'ericka.veliz@wizeline.com',
    'vanessa.diaz@wizeline.com',
    'karina.gutierrez@wizeline.com',
    'raul.lopez@wizeline.com',
    'cindy@startupgdl.com'
];

export const SPACE_TYPES = [
    {
        name: EMPLOYEE_DESK,
        backgroundColor: '#6DD1E1'
    },
    {
        name: EMPTY_DESK,
        backgroundColor: '#63CF6E'
    },
    {
        name: VISTITOR_DESK,
        backgroundColor: '#BE67EF'
    },
    {
        name: MEETING_ROOM
    },
    {
        name: MEETING_ROOM_DESK,
        backgroundColor: '#BD6482'
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