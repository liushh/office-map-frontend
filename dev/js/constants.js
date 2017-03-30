export const CONSTANTS = {
  EMPTY_SPACE_SIZE: 20
}

export const WL2_OFFICE_ID = 'wl2_gdl';
export const WL1_OFFICE_ID = 'wl1_gdl';

export const OFFICE_STATES = [
    {
        name: 'Wizeline1(GDL)',
        id: WL1_OFFICE_ID,
        selected: false
    },
    {
        name: 'Wizeline2(GDL)',
        id: WL2_OFFICE_ID,
        selected: true
    }
];

export const ROOM_SPACE_STATES = {
  wl1_gdl: [],
  wl2_gdl: [
    {
        name: 'ENTRANCE',
        id: 'wl2_entrance',
        top: 590,
        left: 10,
        height: 120,
        width: 100
    },
    {
        name: 'GALILEO',
        id: 'wl2_galile',
        top: 410,
        left: 10,
        height: 180,
        width: 100
    },
    {
        name: 'GOPPERT',
        id: 'wl2_goppert',
        top: 310,
        left: 10,
        height: 100,
        width: 100
    },
    {
        name: 'GRAHAM',
        id: 'wl2_Garham',
        top: 210,
        left: 10,
        height: 100,
        width: 100
    },
    {
        name: 'COFFE',
        id: 'wl2_coffe',
        top: 150,
        left: 10,
        height: 60,
        width: 100
    },
    {
        name: 'BATHROOM',
        id: 'wl2_Bathroom',
        top: 10,
        left: 10,
        height: 140,
        width: 140
    },
    {
        name: 'GRIFFIN',
        id: 'wl2_griffin',
        top: 10,
        left: 190,
        height: 140,
        width: 140
    },
    {
        name: 'HEISENBERG',
        id: 'wl2_heisengerg',
        top: 10,
        left: 330,
        height: 140,
        width: 140
    },
    {
        name: 'HIGGS',
        id: 'wl2_higgs',
        top: 10,
        left: 470,
        height: 80,
        width: 60
    },
    {
        name: 'FINANCE OFFICE',
        id: 'wl2_finance_office',
        top: 830,
        left: 430,
        height: 120,
        width: 120
    },
    {
        name: 'HR OFFICE',
        id: 'wl2_hr_office',
        top: 650,
        left: 430,
        height: 120,
        width: 120
    },
    {
        name: 'WRIKE',
        id: 'wl2_wrike',
        top: 550,
        left: 430,
        height: 100,
        width: 120
    },
    {
        name: 'HOPPER',
        id: 'wl2_hopper',
        top: 490,
        left: 430,
        height: 60,
        width: 120
    },
    {
        name: 'Hoover',
        id: 'wl2_hoover',
        top: 410,
        left: 430,
        height: 80,
        width: 120
    },
    {
        name: 'WELLNESS',
        id: 'wl2_wellness',
        top: 290,
        left: 550,
        height: 120,
        width: 100
    },
    {
        name: 'BATHROOM',
        id: 'wl2_small_bathroom',
        top: 290,
        left: 670,
        height: 120,
        width: 100
    },
    {
        name: 'KITCHEN',
        id: 'wl2_kitchen',
        top: 290,
        left: 770,
        height: 120,
        width: 260
    }
  ]
}
