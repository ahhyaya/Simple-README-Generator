// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown')
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is your project\'s name? '
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please write a short description of your project: '
    },
    {
        type: 'input',
        name: 'contents',
        message: 'Please enter your project contents: '
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What command should be run to install dependencies? '
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please enter the usage of your project: '
    },
    {
        type: 'input',
        name: 'license',
        message: 'What kind of license should your project have? '
    },
    {
        type: 'input',
        name: 'contribute',
        message: 'Please enter the contribution guidelines of your project: '
    },
    {
        type: 'input',
        name: 'test',
        message: 'What command should be run to run the tests? '
    },
    {
        type: 'input',
        name: 'questions',
        message: 'What are the questions of your project? '
    },
    {
        type: 'input',
        name: 'username',
        message: 'What is your Github\'s username? '
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address? '
    },
];

// TODO: Create a function to write README file
function writeToFile(data) {
    let fileName = './dist/README.md';
    fs.writeFileSync(fileName,data,(err) => {
        err ? console.log(err) : console.log('Your README is ready!');
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(answers => writeToFile(generateMarkdown(answers)));
}

// Function call to initialize app
init();
