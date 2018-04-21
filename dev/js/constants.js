export const CONSTANTS = {
  EMPTY_SPACE_SIZE: 20
}

export const WL2_OFFICE_ID = 'wl2_gdl';
export const WL1_OFFICE_ID = 'wl1_gdl';
export const SAN_FRANCISCO = 'san_francisco';

export const OFFICE_STATES = [
    {
        name: 'Wizeline1(GDL)',
        id: WL1_OFFICE_ID,
        isSelected: false
    },
    {
        name: 'Wizeline2(GDL)',
        id: WL2_OFFICE_ID,
        isSelected: true
    },
    {
        name: 'San Francisco',
        id: SAN_FRANCISCO,
        isSelected: false
    }
];
    
export const ROOM_SPACE_STATES = {
  wl1_gdl: [
    {
        name: 'BASKETBALL COURT',
        id: 'wl1_basketball_court',
        top: 710,
        left: 370,
        height: 280,
        width: 280
    },
    {
        name: 'CLASSROOM',
        id: 'wl1_classroom',
        top: 410,
        left: 650,
        height: 120,
        width: 200
    },
    {
        name: 'ELION',
        id: 'wl1_elion',
        top: 410,
        left: 850,
        height: 120,
        width: 60
    },
    {
        name: 'KITCHEN',
        id: 'wl1_kitchen',
        top: 410,
        left: 910,
        height: 120,
        width: 60
    },
    {
        name: 'BATHROOM',
        id: 'wl1_bathroom',
        top: 170,
        left: 970,
        height: 200,
        width: 240
    },
    {
        name: 'STORAGE',
        id: 'wl1_storage',
        top: 50,
        left: 870,
        height: 80,
        width: 160
    },
    {
        name: 'Einstein',
        id: 'wl1_einstein',
        top: 50,
        left: 1050,
        height: 80,
        width: 80
    },
    {
        name: 'Edison',
        id: 'wl1_edison',
        top: 50,
        left: 1130,
        height: 80,
        width: 80
    },
    {
        name: 'ENTRANCE',
        id: 'wl1_ENTRANCE',
        top: 50,
        left: 1210,
        height: 80,
        width: 60
    },
    {
        name: 'FAHRENHEIT',
        id: 'wl1_fahrenheit',
        top: 410,
        left: 210,
        height: 80,
        width: 60
    },
    {
        name: 'FARADAY',
        id: 'wl1_faraday',
        top: 410,
        left: 130,
        height: 100,
        width: 80
    },
    {
        name: 'FORBES',
        id: 'wl1_forbes',
        top: 410,
        left: 10,
        height: 100,
        width: 120
    },
    {
        name: 'FORD',
        id: 'wl1_ford',
        top: 510,
        left: 10,
        height: 80,
        width: 100
    },
    {
        name: 'FRANKLIN',
        id: 'wl1_franklin',
        top: 590,
        left: 10,
        height: 80,
        width: 80
    },
  ],
  wl2_gdl: [
    {
        name: 'ENTRANCE',
        id: 'wl2_entrance',
        top: 630,
        left: 10,
        height: 120,
        width: 100
    },
    {
        name: 'GALILEO',
        id: 'wl2_galile',
        top: 450,
        left: 10,
        height: 180,
        width: 100
    },
    {
        name: 'GOPPERT',
        id: 'wl2_goppert',
        top: 350,
        left: 10,
        height: 100,
        width: 100
    },
    {
        name: 'GRAHAM',
        id: 'wl2_Garham',
        top: 250,
        left: 10,
        height: 100,
        width: 100
    },
    {
        name: 'COFFE',
        id: 'wl2_coffe',
        top: 190,
        left: 10,
        height: 60,
        width: 100
    },
    {
        name: 'BATHROOM',
        id: 'wl2_Bathroom',
        top: 50,
        left: 10,
        height: 140,
        width: 140
    },
    {
        name: 'GRIFFIN',
        id: 'wl2_griffin',
        top: 50,
        left: 190,
        height: 140,
        width: 140
    },
    {
        name: 'HEISENBERG',
        id: 'wl2_heisengerg',
        top: 50,
        left: 330,
        height: 140,
        width: 140
    },
    {
        name: 'HIGGS',
        id: 'wl2_higgs',
        top: 50,
        left: 470,
        height: 80,
        width: 60
    },
    {
        name: 'Hubble',
        id: 'wl2_hubble',
        top: 870,
        left: 430,
        height: 120,
        width: 120
    },
    {
        name: 'HR OFFICE',
        id: 'wl2_hr_office',
        top: 690,
        left: 430,
        height: 120,
        width: 120
    },
    {
        name: 'FINANCE OFFICE',
        id: 'wl2_finance_office',
        top: 590,
        left: 430,
        height: 100,
        width: 120
    },
    {
        name: 'HOPPER',
        id: 'wl2_hopper',
        top: 530,
        left: 430,
        height: 60,
        width: 120
    },
    {
        name: 'Hoover',
        id: 'wl2_hoover',
        top: 450,
        left: 430,
        height: 80,
        width: 120
    },
    {
        name: 'WELLNESS',
        id: 'wl2_wellness',
        top: 330,
        left: 550,
        height: 120,
        width: 100
    },
    {
        name: 'BATHROOM',
        id: 'wl2_small_bathroom',
        top: 330,
        left: 670,
        height: 120,
        width: 100
    },
    {
        name: 'KITCHEN',
        id: 'wl2_kitchen',
        top: 330,
        left: 770,
        height: 120,
        width: 260
    }
  ],
  san_francisco: [
    {
        name: 'The Great Race',
        id: 'the_great_race',
        top: 50,
        left: 10,
        height: 180,
        width: 180
    },
    {
        name: 'Anderson',
        id: 'anderson',
        top: 50,
        left: 290,
        height: 180,
        width: 260
    },
    {
        name: 'Brown',
        id: 'brown',
        top: 50,
        left: 550,
        height: 100,
        width: 100
    },
    {
        name: 'Bessemer',
        id: 'bessemer',
        top: 230,
        left: 10,
        height: 180,
        width: 100
    },
    {
        name: 'Archimedes',
        id: 'archimedes',
        top: 410,
        left: 10,
        height: 300,
        width: 100
    },
    {
        name: 'Agricola',
        id: 'agricola ',
        top: 710,
        left: 10,
        height: 180,
        width: 100
    },
    {
        name: 'Bell',
        id: 'bell',
        top: 770,
        left: 110,
        height: 120,
        width: 120
    },
    {
        name: 'Bose',
        id: 'bose',
        top: 770,
        left: 230,
        height: 120,
        width: 120
    },
    {
        name: 'Dining 1',
        id: 'dining_1',
        top: 270,
        left: 330,
        height: 160,
        width: 100
    },
    {
        name: 'Kitchen',
        id: 'kitchen',
        top: 270,
        left: 430,
        height: 160,
        width: 120
    },
    {
        name: 'Bentz',
        id: 'bentz',
        top: 550,
        left: 430,
        height: 60,
        width: 120
    },
    {
        name: 'STAIRS',
        id: 'stairs',
        top: 150,
        left: 590,
        height: 160,
        width: 200
    },
    {
        name: 'Elevator Lobby',
        id: 'elevator_lobby',
        top: 310,
        left: 650,
        height: 420,
        width: 80
    },
    {
        name: 'Storage Unit',
        id: 'storage_unit',
        top: 570,
        left: 590,
        height: 160,
        width: 100
    },
    {
        name: 'Elevator D',
        id: 'elevator_d',
        top: 330,
        left: 730,
        height: 80,
        width: 60
    },
    {
        name: 'Elevator E',
        id: 'elevator_e',
        top: 430,
        left: 730,
        height: 80,
        width: 60
    },
    {
        name: 'Elevator F',
        id: 'elevator_f',
        top: 530,
        left: 730,
        height: 80,
        width: 60
    },
    {
        name: 'Elevator G',
        id: 'elevator_g',
        top: 630,
        left: 730,
        height: 80,
        width: 60
    },
  ]
}
