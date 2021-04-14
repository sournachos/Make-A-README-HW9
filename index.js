const fs = require('fs'); //Standard Node library to read and write files.
const inquirer = require('inquirer'); //Node library to personalize inputs
const licenses = require('./utils/generateMarkdown'); // Path to Javascript file with licensing information

// Creating an array 
// const questions = ['Enter README description:', ''];
inquirer
    .prompt([
        {
            type: 'input',
            message: 'Enter README Description:',
            name: 'desc',
        },
        {
            type: 'input',
            message: 'Enter Installation Instructions:',
            name: 'inst',
        },
        {
            type: 'input',
            message: 'Enter Usage Information:',
            name: 'use',
        },
        {
            type: 'input',
            message: 'Enter Contribution Guidelines:',
            name: 'cont',
        },
        {
            type: 'input',
            message: 'Enter Test Instructions:',
            name: 'test',
        },
        {
            type: 'input',
            message: 'Enter Github Username:',
            name: 'gituser',
        },
        {
            type: 'list',
            message: 'Choose License(s) For Your Project:',
            choices: ['MIT', 'Apache', 'GPLv2', 'GPLv3', 'BSD 2-clause', 'BSD 3-clause'],
            name: 'lic',
        },
        {
            type: 'input',
            message: 'Enter Email Users Can Send Questions To:',
            name: 'email',
        },
    ])
    .then((response)=>{
        const lic = `${response.lic}`
        
    })

// TODO: Create a function to write README file
function writeToFile(fileName, response) {

}

// TODO: Create a function to initialize app
function init() { 
    
}

// Function call to initialize app
init();
