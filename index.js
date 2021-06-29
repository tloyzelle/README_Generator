const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const writeFileAsync = util.promisify(fs.writeFile);

const promptUser = () => {
  return inquirer.prompt([ {
//Questions given to user during the prompt
        type: "input",
        name: "title",
        message: "What is the title to your project/application?"
    },
    {
        type: "input",
        name: "description",
        message: "Describe your project/application, and how it works.",
    },
    {
        type: "input",
        name: "use",
        message: "Describe how to use your project/application."
    },
    {
        type: "input",
        name: "installation",
        message: "How can your project/application be installed?",
    },
    {
        type: "input",
        name: "guide",
        message: "What is the protocol to contributing to this project/application?",
    },
    {
        type: "checkbox",
        name: "license",
        message: "Which license would you use?",
        choices: ["MIT", "APACHE", "BSD", "None", "WTFPL"],
    },
    {
        type: "input",
        name: "github",
        message: "What is your Github username?",
    },
    {
        type: "input",
        name: "email",
        message: "What is your preferred email address?",
    
    },
  ])
};

//Generating the ReadMe with categories using the answers from prompt
const generateReadme = (answers) =>
  `# ${answers.title}
## Description: ${answers.description}
## 1. Installation: 
    ${answers.installation}  
## 2. Protocal to edit: 
    ${answers.guide}
## 3. Usage: 
    ${answers.use} 
## 4. License Used:
    ${answers.license}
### GitHub: https://github.com/${answers.github}
### Email:  <a href="mailto:${answers.email}" hspace="20">${
    answers.email
  }</a>
`;

const build = () => {
  promptUser()
    .then((answers) => {
      writeFileAsync("myreadme.md", generateReadme(answers));
    })
    .then(() => console.log("Successfully wrote to myreadme.md"))
    .catch((err) => console.error(err));
};

build();
