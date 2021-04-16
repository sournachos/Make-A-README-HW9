const fs = require('fs'); //Standard Node library to read and write files.
const inquirer = require('inquirer'); //Node library to personalize inputs
const markRead = require('./utils/generateMarkdown'); // Path to Javascript file with licensing information

// Prompts questions to users
function init() {
    inquirer.prompt([
        { type: 'input', name: 'title', message: 'Enter Project Title:' },
        { type: 'input', name: 'desc', message: 'Enter README Description:' },
        { type: 'input', name: 'inst', message: 'Enter Installation Instructions:' },
        { type: 'input', name: 'use', message: 'Enter Usage Information:' },
        { type: 'input', name: 'cont', message: 'Enter Contribution Guidelines:' },
        { type: 'input', name: 'test', message: 'Enter Test Instructions:' },
        { type: 'input', name: 'gituser', message: 'Enter Github Username:' },
        { type: 'input', name: 'email', message: 'Enter Email Users Can Send Questions To:' },
        { type: 'list', name: 'lic', message: 'Choose License(s) For Your Project:', choices: ['MIT', 'Apache', 'BSD 2-clause', 'BSD 3-clause'] }
    ])
        .then((res) => {
            function writeToFile(fileName, res) {
                fs.writeFile(fileName, res, (err) =>
                    err ? console.error(err) : console.log('README successfully created')
                );
            }
            writeToFile('README.md', markRead.generateMarkdown(res))
        })
        .catch((err) => console.error(err))
}

init();
