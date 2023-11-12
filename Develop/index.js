// Packages needed for this application
const fs = require('fs');
const inq = require("inquirer");

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
        type: 'list',
        message: 'What type of licnese are you using?',
        choices: ['MIT', 'other'],
        name: 'license'
    }
];

// Function to write README file
function writeToFile(data) {

    fileName = data.title
    description = data.description

    fs.appendFile(
        `README.md`,

        `# ${fileName} \n \n ${description}`,

        (err) => err ? console.error(err) : console.log('Commit logged!'))
}

// Function to initialize app
function init() {
    inq
        .prompt(questions)
        .then((data) => {
            writeToFile(data)
        });
}

// Function call to initialize app
init();