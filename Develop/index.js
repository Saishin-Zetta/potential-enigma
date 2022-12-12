// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const {create} = require("domain");
const {writeFile} = require('fs').promises;

// TODO: Create an array of questions for user input
// const questions = [];

const generateReadme = ({title, description, table_of_contents, installation, usage, license, contributing, tests, questions, email, badge}) =>
`# ${title} ${badge}

## Description
    ${description}
## Table of Contents
    ${table_of_contents}
## Installation
    ${installation}
## Usage
    ${usage}
## Liscense
    The current license in use is ${license}.
## Contributing
    ${contributing}
## Tests
    ${tests}
## Questions
    If you have any questions please contact ${questions} for a look at the repo checkout: https://github.com/${questions}/${title}.
    
    For any additional questions please contact ${email}`
;

inquirer
    .prompt([
        {
            type: 'input',
            message: 'What the title of your project?',
            name: 'title',
        },
        {
            type: 'input',
            message: 'Provide a description of your project.',
            name: 'description',
        },
        {
            type: 'input',
            message: 'List key contents to create a table of contents',
            name: 'table_of_contents',
        },
        {
            type: 'input',
            message: 'Please provide installation instructions if applicable.',
            name: 'installation',
        },
        {
            type: 'input',
            message: 'Please provide information on how to use the application.',
            name: 'usage',
        },
        {
            type: 'list',
            message: 'What type of license will you be using for this application?',
            name: 'license',
            choices: ["None", "Apache License 2.0", "GNU General Public License v3.0", "MIT License", `BSD 2-Clause "Simplified" License`, `BSD 3-Clause "New" or "Revised" License`, "Boost Software License 1.0", "Creative Commons Zero v1.0 Universal", "Eclipse Public License 2.0", "GNU Affero General Public License v3.0", "GNU General Public License v2.0", "GNU Lesser General Public License v3.0", "Mozilla Public License 2.0", "The Unlicense"],
        },
        {
            type: 'input',
            message: 'How would you like other developers to contribute?',
            name: 'contributing',
        },
        {
            type: 'input',
            message: 'What are some test for your application and how do you run them?',
            name: 'tests',
        },
        {
            type: 'input',
            message: 'Please provide your Github username.',
            name: 'questions',
        },
        {
            type: 'input',
            message: 'Please provide your email for additional questions about your application.',
            name: 'email',
        },
    ])
    .then((info) => {
        const badge = createBadge(...info.license)
        const readmeContent = generateReadme({info, badge})
        fs.writeFile("README.md", readmeContent, (err) =>
            err ? console.log(err): console.log("Successfully created your README.md file."))
    })
;

// list of badges and it's matching data type
function createBadge(license) {
    let badge = ``
    if (license === `Apache License 2.0`){
        badge = `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
        }
    else if (license === "GNU General Public License v3.0"){
        badge = `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`
        }
    else if (license === "MIT License"){
        badge = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
        }
    else if (license === `BSD 2-Clause "Simplified" License`){
        badge = `[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)`
        }
    else if (license === `BSD 3-Clause "New" or "Revised" License`){
        badge = `[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`
        }
    else if (license === "Boost Software License 1.0"){
        badge = `[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)`
        }
    else if (license === "Creative Commons Zero v1.0 Universal"){
        badge = `[![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)](http://creativecommons.org/publicdomain/zero/1.0/)`
        }
    else if (license === "Eclipse Public License 2.0"){
        badge = `[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)`
        }
    else if (license === "GNU Affero General Public License v3.0"){
        badge = `[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)`
        }
    else if (license === "GNU General Public License v2.0"){
        badge = `[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)`
        }
    else if (license === "GNU Lesser General Public License v3.0"){
        badge = `[![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)`
        }
    else if (license === "Mozilla Public License 2.0"){
        badge = `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`
        }
    else if (license === "The Unlicense"){
        badge = `[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)`
        }
    else {
        badge = ``
    }
    return badge;                
}






// TODO: Create a function to write README file


// TODO: Create a function to initialize app
// function init() {}

// Function call to initialize app
// init();
