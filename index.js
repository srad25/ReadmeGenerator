//Add packages
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown =require("./utils/generateMarkdown");


// array of questions for user
const questions = [
{
    type: "input",
    message:"What is the title of your project?",
    name:"Title"
},
{
    type: "input",
    message:"What is your Github username?",
    name:"username"
},
{
    type: "input",
    message:"What is the name of your Github repo?",
    name:"repo"
},
{
    type: "input",
    message:"Please include any badge links you want",
    name:"badge"
},
{
    type: "input",
    message:"Write a description of your project",
    name:"description"
},
{
    type: "input",
    message:"What are the steps used to install project?",
    name:"installation"
},
{
    type: "input",
    message:"How do you use this app?",
    name:"usage"
},
{
    type: "list",
    message:"What is the project license?",
    choices:["Apache License 2", "MIT", "No license", "GNU-AGPLv3", "GNU-LGPLv3"],
    name:"license",
},
{
    type: "input",
    message:"How, if applicable can others contribute of your project?",
    name:"contributing"
},
{
    type: "input",
    message:"Please list any tests for your project",
    name:"test"
},
{
    type: "input",
    message:"Do you have any questions?",
    name:"questions"
},
{
    type: "input",
    message:"What is your email address",
    name:"email"
},

];


// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
