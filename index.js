const fs = require('fs'); //Standard Node library to read and write files.
const inquirer = require('inquirer'); //Node library to personalize inputs
const markRead = require('./utils/generateMarkdown'); // Path to Javascript file with markdown template


function init() { // Function with all of our code
   inquirer.prompt([ // Prompts questions to users
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
   .then((res) => { //The (res)ponses are taken in

        function writeToFile(fileName, answers) { //Function to make new file, with example parameters
            fs.writeFile(fileName, answers, (err) => //File System Module, (fs), allows us to write a new file
                err ? console.error(err) // Error handling in case things don't go as planned
                : console.log('README successfully created') // If code properly runs, it displays a success message
            )}
        writeToFile('README.md', markRead.generateMarkdown(res)); // Running function above replacing example parameters with our desired parameters
    }).catch((err) => console.error(err)); // More error handling; better safe than sorry.
}

init(); // Runs the function that contains all of our code
