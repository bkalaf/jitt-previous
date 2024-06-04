export const consoleTypes = {
    nes: { text: 'Nintendo (NES)', key: 'nes' },
    snes: { text: 'Super Nintendo', key: 'snes' },
    n64: { text: 'Nintendo 64', key: 'n64' },
    gameboy: { text: 'Nintendo Gameboy', key: 'gameboy' },
    'gameboy-advance': { text: 'Nintendo Gameboy Advance', key: 'gameboy-advance' },
    ds: { text: 'Nintendo DS', key: 'ds' },
    ps1: { text: 'Playstation 1', key: 'ps1' },
    ps2: { text: 'Playstation 2', key: 'ps2' },
    ps3: { text: 'Playstation 3', key: 'ps3' },
    ps4: { text: 'Playstation 4', key: 'ps4' },
    ps5: { text: 'Playstation 5', key: 'ps5' },
    wii: { text: 'Nintendo Wii', key: 'wii' },
    xbox: { text: 'Microsoft XBox', key: 'xbox' }
};

// console.log(Object.fromEntries(Object.entries(consoleTypes).map(([k, v]) => [k, { text: v, key: k }])))