// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");

// TODO: Create an array of questions for user input
const promptQuestions = () => {
  console.log(promptQuestions);
  return inquirer
    .prompt([
      {
        type: "input",
        name: "Title",
        message: "What is your project name? (Required)",
        validate: (nameInput) => {
          if (nameInput) {
            return true;
          } else {
            return "a value is required!";
          }
        },
      },
      {
        type: "input",
        name: "Description",
        message: "Describe your project? (Required)",
        validate: (descriptionInput) => {
          if (descriptionInput) {
            return true;
          } else {
            return "a value is required!";
          }
        },
      },

      {
        type: "input",
        name: "Installation",
        message: "What installations did you use? (Required)",
        validate: (installInput) => {
          if (installInput) {
            return true;
          } else {
            return "a value is required!";
          }
        },
      },
      {
        type: "input",
        name: "Usage",
        message: "How is your project used? (Required)",
        validate: (usageInput) => {
          if (usageInput) {
            return true;
          } else {
            return "a value is required!";
          }
        },
      },
      {
        type: "checkbox",
        name: "License",
        message: "What license did you use? (Check all that apply)",
        choices: ["Apache", "GPL", "MIT", "Boost", "BSD", "N/A"],
      },
      {
        type: "input",
        name: "Contribution",
        message: "Who contributed to your project? (Required)",
        validate: (contributeInput) => {
          if (contributeInput) {
            return true;
          } else {
            return "a value is required!";
          }
        },
      },
      {
        type: "input",
        name: "Tests",
        message: "How do you test your project? (Required)",
        validate: (testInput) => {
          if (testInput) {
            return true;
          } else {
            return "a value is required!";
          }
        },
      },
      {
        type: "input",
        name: "Links",
        message: "Enter the github link to your project (Required)",
        validate: (linkInput) => {
          if (linkInput) {
            return true;
          } else {
            return "a value is required!";
          }
        },
      },
      {
        type: "input",
        name: "Email",
        message: "What is your email address? (Required)",
        validate: (emailInput) => {
          if (emailInput) {
            return true;
          } else {
            return "a value is required!";
          }
        },
      },
    ])
    .then(function ({
      Title,
      Description,
      Installation,
      Usage,
      License,
      Contribution,
      Tests,
      Links,
      Email,
    }) {
      // TODO: Create a function to write README file 
      fs.writeFile(
        "./README.md",
        `
# Table of Contents
*[Title] (#Title)
*[Description] (#Description)
*[Installation] (#Installation)
*[Usage](#Usage)
*[License] (#License)
*[Contribution] (#Contribution)
*[Tests] (#Tests)
*[Links] (#Links)
*[Email] (#Email)

## Title
${Title}  
## Description
${Description}
## Installation
${Installation}
## Usage
${Usage}
## License
${License}
## Contribution
${Contribution}
## Tests
${Tests}
## Links
<a href= ${Links}> Github</a>
## ${Email} 
<a href="mailto:${Email}"> Email address</a>
        
        `,
        (err) => {
          if (err) throw new Error(err);
          console.log("Readme file created!");
        }
      );
    });
};
// Function call to initialize app
promptQuestions();




