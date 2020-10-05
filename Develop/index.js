// Requires
const fs = require('fs');
const inquirer = require('inquirer');
const path = require('path');
const generateMarkdown = require('./utils/generateMarkdown');

// Array of questions for user
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is your project title?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please give project description:'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Please give installation instructions:'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please give usage information:'
    },
    {
        type: 'input',
        name: 'guidelines',
        message: 'Please give contribution guidelines:'
    },
    {
        type: 'input',
        name: 'test',
        message: 'Please give test instructions:'
    },
    {
        type: 'checkbox',
        name: 'license',
        message: 'Please choose a license for your project:',
        choices: ['MIT', 'Apache', 'GPL', 'BSD', 'none']
    },
    {
        type: 'input',
        name: 'github',
        message: 'Please enter your GitHub username:'
    },
    {
        type: 'input',
        name: 'email',
        message: 'Please enter your email address:'
    },
];

// Function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data, err => {
        if (err) throw err;
    });
};

// Function to initialize program
function init() {
    const promptUser = () => {
        return inquirer.prompt(questions).then(answers => {
            const readme = generateMarkdown(answers);
            writeToFile('readme.md', readme);
        });
    }
    promptUser();
};

// function call to initialize program
init();
