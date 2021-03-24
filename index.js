//Add packages
const fs = require("fs");
const inquirer = require("inquirer");
const util = require("util");
const generateMarkdown =require("./utils/generateMarkdown");


// array of questions for user
// function to write readme
function questions() {
    return inquirer.prompt([
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
    choices:["Apache License 2", "MIT", "Mozilla PL", "No License"],
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
    message:"Please write link to Github page",
    name:"profile"
},
{
    type: "input",
    message:"What is your email address",
    name:"email"
},

]);
}


const writeFileAsync = util.promisify(fs.writeFile);

// function to initialize program
async function init() {
    try {
        const response = await questions();
        const markdown = generateMarkdown(response);

        await writeFileAsync("genREADME.md", markdown);
        console.log("Success, Readme generated!");   
    }
        catch (err) {
            console.log(err);
        }
    }
// function call to initialize program
init();

