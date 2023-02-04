const fs = require('fs/promises');

// try {
//     const RESULTS = process.argv[2];
//     const README_PATH = './README.md';
//     const OK_URL = 'https://img.shields.io/badge/tested%20with-Jest-04C38E.svg';
//     const BAD_URL = 'https://img.shields.io/badge/test-failure-red';
//     const URL = RESULTS === 'success' ? OK_URL : BAD_URL;
//     const README_DATA = await fs.readFile(README_PATH, 'utf-8');
//     const NEW_READE = README_DATA.search(OK_URL) !== -1 ? README_DATA.replace(OK_URL, URL) : README_DATA.replace(BAD_URL, URL);
//     await fs.writeFile(README_PATH, NEW_READE);
//     process.exit(0);
// } catch (error) {
//     console.error(error);
//     process.exit(1);
// }

console.log(process.argv[2]);