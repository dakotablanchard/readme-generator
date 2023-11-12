// TODO: Include packages needed for this application
const fs = require('fs');
const inq = require("inquirer");

// TODO: Create an array of questions for user input
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
    }
];

// TODO: Create a function to write README file
function writeToFile(data) {

    fileName = data.title

    fs.appendFile(
        `${fileName}.md`,

        `# ${fileName} \n \n ${data.description}`,

        (err) => err ? console.error(err) : console.log('Commit logged!'))
}

// TODO: Create a function to initialize app
function init() {
    inq
        .prompt(questions)
        .then((data) => {
            writeToFile(data)
        });
}

// Function call to initialize app
init();



// PROMPT EXAMPLE FOR REFERENCE
// inq.prompt([
//     {
//         type: 'input',
//         message: 'What is your name?',
//         name: 'username'
//     },
//     {
//         type: 'input',
//         message: 'What is your age?',
//         name: 'age'
//     }
// ])
//     .then((response) =>
//         console.log(response.age)
//     );
