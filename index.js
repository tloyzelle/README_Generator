// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
const path = require('path');

// TODO: Create an array of questions for user input
const questions = [ {
    type: "input",
    name: "Title",
    message: "What is the title to your project/application?"
},
{
    type: "input",
    name: "Description",
    message: "Describe your project/application, and how it works.",
},
{
    type: "input",
    name: "Use",
    message: "Describe how to use your project/application."
},
{
    type: "input",
    name: "Installation",
    message: "How can your project/application be installed?",
},
{
    type: "input",
    name: "Guide",
    message: "What is the protocol to contributing to this project/application?",
},
{
    type: "checkbox",
    name: "License",
    message: "Which license would you use?",
    choices: ["MIT", "APACHE", "BSD", "None", "WTFPL"],
},
{
    type: "input",
    name: "Github",
    message: "What is your Github username?",
},
{
    type: "input",
    name: "Email",
    message: "What is your preferred email address?",
}
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
