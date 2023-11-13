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
        choices: ['MIT', 'Other'],
        name: 'license'
    }
];

// Function to write README file
// function writeToFile(data) { }

// Function to initialize app
function init() {
    inq
        .prompt(questions)
        .then((data) => {
            fs.writeFileSync("./READMETEST.md", generateMarkdown(data));
        })
}

// Function call to initialize app
init();