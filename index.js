// TODO: Include packages needed for this application

const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input

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
      message: 'What licenses do you need?',
      name: 'license',
    },
    {
      type: 'input',
      message: 'Who contributed to the building of this project? (enter your github address)',
      name: 'contributers',
    },
    {
      type: 'input',
      message: 'How can you test your project?',
      name: 'test',
    },
    {
      type: 'input',
      message: 'Where can a user reach you for questions?',
      name: 'questions'
    },
  ]).then(function(data){

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

const mdGen = `
## ${data.projectName}
----
## Description

${data.description}
----

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)
----

## Installation
To install necessary dependencies, run the following command:

- ${data.installation}
----

## Usage

${data.usage}
----

## License

${data.license}
----

## Contributing

${data.contributers}
----

## Tests
To run tests, enter the following command:

${data.test}
----

## Questions
If you have any questions about the repo, open an issue or contact me directly at [email](${data.questions}).
  `;

fs.writeFile('README.md', mdGen, (err) =>
err ? console.error(err) : console.log('Success!')
);
});

// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();