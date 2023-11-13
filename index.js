// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const markdown = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: `What is your project's title?`
    },
    {
        type: 'input',
        name: 'description',
        message: 'Provide a description of the project:'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Provide installation instructions for your project:'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Provide usage instructions for your project:'
    },
    {
        type: 'list',
        name: 'license',
        choices: ['Apache 2.0', 
        'Boost 1.0', 
        'BSD 3-Clause', 
        'The Unlicense', 
        'GNU GPL v3', 
        'IBM', 
        'MIT',
        ]
    },
    {
        type: 'input',
        name: 'contributors',
        message: 'Provide information for any contributors to your project:'
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Please provide your testing information:'
    },
    {
        type: 'input',
        name: 'gitHubUsername',
        message: 'Please provide your GitHub username:'
    },
    {
        type: 'input',
        name: 'emailAddress',
        message: 'Please provide your email address:'
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFileSync(fileName, data)
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(function (questionsAnswers) {
        const content = markdown(questionsAnswers);
        writeToFile('README.md', content);
    })
}

// Function call to initialize app
init();
