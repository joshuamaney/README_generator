// TODO: Include packages needed for this application

const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [];

inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is the name of your project?',
      name: 'projectName',
    },
    {
      type: 'input',
      message: 'Give a description of your project',
      name: 'description',
    },
    {
      type: 'input',
      message: 'What do you need to install your project?',
      name: 'installation',
    },
    {
      type: 'input',
      message: 'How do you use your project?',
      name: 'usage',
    },
    {
      type: 'input',
      message: 'Who contributed to the building of this project?',
      name: 'contributers',
    },
    {
      type: 'input',
      message: '#',
      name: 'test',
    },
  ]).then(function(data){

  const mdGen = `#`;

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

fs.writeFile('index.js', mdGen, (err) =>
err ? console.error(err) : console.log('Success!')
);
});

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();