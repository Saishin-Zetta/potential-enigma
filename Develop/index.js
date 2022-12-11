// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const { create } = require("domain");
const {writeFile} = require('fs').promises;

// TODO: Create an array of questions for user input
// const questions = [];

const generateReadme = ({title, description, table_of_contents, installation, usage, license, contributing, tests, questions, badge}) =>
`# ${title}

## Description
    ${description}
## Table of Contents
    ${table_of_contents}
## Installation
    ${installation}
## Usage
    ${usage}
## Liscense
    The current licence in use is ${license}.
## Contributing
    ${contributing}
## Tests
    ${tests}
## Questions
    ${questions}`
;

// function Question(title, description, table_of_contents, installation, usage, license, contributing, tests, questions) {
//     this.title = title;
//     this.description = description;
//     this.table_of_contents = table_of_contents;
//     this.installation = installation;
//     this.usage = usage;
//     this.license = license;
//     this.contributing = contributing;
//     this.tests = tests;
//     this.questions = questions;
//     console.log("Question is working!!!")
// }

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
            choices: ["None", "Apache License 2.0", "GNU General Public License v3.0", "MIT License", `BSD 2-Clause "Simplified" License`, `BSD 3-Clause "New" or "Revised" License`, "Boost Software License 1.0", "Creative Commons Zero v1.0 Universal", "Eclipse Public License 2.0", "GNU Affero General Public License v3.0", "GNU General Public License v2.0", "GNU Lesser General Public License v2.1", "Mozilla Public License 2.0", "The Unlicense"],
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
    ])
    .then((info) => {
        createBadge(info.license)
        const readmeContent = generateReadme(info, badge)
        fs.writeFile("README.md", readmeContent, (err) =>
            err ? console.log(err): console.log("Successfully created your README.md file."))
    })
;

// On the to do list to finish up. Most of below is not correctly formatted
function createBadge() {
    let badge = ""
    if (license === `Apache License 2.0`){
        badge = `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
        }
    else if (license === "GNU General Public License v3.0"){
        badge = `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`
        }
    else if (license === "MIT License"){
        badge = `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
        }
    else if (license === `BSD 2-Clause "Simplified" License`){
        badge = `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
        }
    else if (license === `BSD 3-Clause "New" or "Revised" License`){
        badge = `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
        }
    else if (license === "Boost Software License 1.0"){
        badge = `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
        }
    else if (license === "Creative Commons Zero v1.0 Universal"){
        badge = `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
        }
    else if (license === "Eclipse Public License 2.0"){
        badge = `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
        }
    else if (license === "GNU Affero General Public License v3.0"){
        badge = `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
        }
    else if (license === "GNU General Public License v2.0"){
        badge = `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
        }
    else if (license === "GNU Lesser General Public License v2.1"){
        badge = `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
        }
    else if (license === "Mozilla Public License 2.0"){
        badge = `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
        }
    else if (license === "The Unlicense"){
        badge = `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
        }                
}






// TODO: Create a function to write README file


// TODO: Create a function to initialize app
// function init() {}

// Function call to initialize app
// init();
