const fs = require('fs'); //Standard Node library to read and write files.
const inquirer = require('inquirer'); //Node library to personalize inputs
const markRead = require('./utils/generateMarkdown'); // Path to Javascript file with licensing information

// Creating an array 
// const questions = ['Enter README description:', ''];
function init() { 
inquirer
    .prompt([
        {
            type: 'input',
            message: 'Enter Project Title:',
            name: 'title',
        },
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
            choices: ['MIT', 'Apache','BSD 2-clause', 'BSD 3-clause'],
            name: 'lic',
        },
        {
            type: 'input',
            message: 'Enter Email Users Can Send Questions To:',
            name: 'email',
        },
    ])
    .then((response)=>{
        function writeToFile(fileName, data) {
            fs.writeFile(fileName, data, (err) =>
            err ? console.error(err) : console.log('Success!')
          );
        }
        writeToFile('README.md', markRead(response), (err)=>{
            err ?console.error(err) : console.log('README successfully created')
        })
    }).catch((err)=>{err ?console.error(err) : console.log('README successfully created')})
}

init();
