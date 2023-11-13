// Packages needed for this application
const fs = require('fs');
const inq = require("inquirer");
const generateMarkdown = require('./utils/generateMarkdown')

// Array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is the name of your project?',
        name: 'title'
    },
    {
        type: 'input',
        message: 'Give a short description of the app:',
        name: 'description'
    },
    {
        type: 'input',
        message: 'What is the installation process of your app?',
        name: 'installation'
    },
    {
        type: 'input',
        message: 'How do you use the app?',
        name: 'usage'
    },
    {
        type: 'input',
        message: 'Please add test instructions:',
        name: 'tests'
    },
    {
        type: 'input',
        message: 'What are the contribution guidelines?',
        name: 'contributing'
    },
    {
        type: 'input',
        message: 'Please enter your GitHub username:',
        name: 'githubName'
    },
    {
        type: 'input',
        message: 'Please enter your email:',
        name: 'email'
    },
    {
        type: 'list',
        message: 'What type of licnese are you using?',
        choices: ['MIT', 'Apache 2.0', 'Boost Software 1.0', 'Eclipse Public 1.0', 'ISC', 'Other'],
        name: 'license'
    }
];

// Function to initialize app and write file
function init() {
    inq
        .prompt(questions)
        .then((data) => {
            fs.writeFileSync("./MYREADME.md", generateMarkdown(data));
        })
}

// Function call to initialize app
init();