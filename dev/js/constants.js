export const CONSTANTS = {
  EMPTY_SPACE_SIZE: 20
}

export const EMPLOYEE_DESK = 'Employee Desk';
export const EMPTY_DESK = 'Empty Desk';
export const VISTITOR_DESK = 'Visitor Desk';
export const MEETING_ROOM = 'Meeting Room';
export const MEETING_ROOM_DESK = 'Meeting Room Desk';

export const AUTH0_USER_EMAIL_STORE_KEY = 'auth0_email';
export const EDITOR_WHITELIST = [
    'liusha@wizeline.com',

    'gabriela@wizeline.com',
    'vanessa.diaz@wizeline.com',
    'karina.gutierrez@wizeline.com',
    'raul.lopez@wizeline.com',
    'wendolyn.herrera@wizeline.com',

    'ericka.veliz@wizeline.com',
    'tara@wizeline.com',
    'itzel.cortes@wizeline.com',
    'gina.martinez@wizeline.com',
    'myan.hoang@wizeline.com',
    'anh.le@wizeline.com',

    'cindy@startupgdl.com',
    'santiago@startupgdl.com',
    'sofia@startupgdl.com'
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

export const GDL_1_ID = 'wl1_gdl';
export const GDL_2_ID = 'wl2_gdl';
export const GDL_3_ID = 'gdl_3';

export const QUERETARO_1_ID = 'queretaro_1';
export const MEXICO_CITY_1_ID = 'mexico_city_1';
export const VIETNAM_1_ID = 'vietnam_1';
export const SAN_FRANCISCO_ID = 'san_francisco';

export const OFFICE_STATES = {}
OFFICE_STATES[GDL_1_ID] = {
    name: 'GDL 1',
    id: GDL_1_ID,
    isSelected: false
};
OFFICE_STATES[GDL_2_ID] = {
    name: 'GDL 2',
    id: GDL_2_ID,
    isSelected: true
};
OFFICE_STATES[GDL_3_ID] = {
    name: 'GDL 3',
    id: GDL_3_ID,
    isSelected: false
};
OFFICE_STATES[SAN_FRANCISCO_ID] = {
    name: 'San Francisco',
    id: SAN_FRANCISCO_ID,
    isSelected: false
};
OFFICE_STATES[QUERETARO_1_ID] = {
    name: 'Queretaro',
    id: QUERETARO_1_ID,
    isSelected: false
};
OFFICE_STATES[MEXICO_CITY_1_ID] = {
    name: 'Mexico City',
    id: MEXICO_CITY_1_ID,
    isSelected: false
};
OFFICE_STATES[VIETNAM_1_ID] = {
    name: 'Vietnam',
    id: VIETNAM_1_ID,
    isSelected: false
};
