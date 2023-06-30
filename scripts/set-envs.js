const { writeFileSync, mkdirSync } = require('fs');

require('dotenv').config();

const targetPath = './src/environments/environments.ts';


const envFileContent = `
    export const environment = {
        mapbox_key:"${process.env['MAPBOX_KEY']}"
    };
`;


mkdirSync('./src/environments', { recursive: true }); // recursive: true :TODO: Si existe no bota error

writeFileSync(targetPath, envFileContent);
