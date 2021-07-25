const inquirer = require("inquirer");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

let teamMembers = [];

const initialQuestions = [
  {
    type: "input",
    name: "name",
    message: "What is the name of the Team Member? (required)",
    validate: (nameInput) => {
      if (nameInput) {
        return true;
      } else {
        console.log("Please enter the Team Member's name.");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "id",
    message: "What is the Team Member's ID? (required)",
    validate: (emailInput) => {
      if (emailInput) {
        return true;
      } else {
        console.log("Please enter the Team Member's ID.");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "email",
    message: "What is the Team Member's email address? (required)",
    validate: (emailInput) => {
      if (emailInput) {
        return true;
      } else {
        console.log("Please enter the Team Member's email address.");
        return false;
      }
    },
  },
  {
    type: "list",
    name: "employeeType",
    message: "What type of employee do you want to add to your Team?",
    choices: ["Manager", "Engineer", "Intern"],
    validate: (typeInput) => {
      if (typeInput) {
        return true;
      } else {
        console.log("Please enter the Team Member's employee type.");
        return false;
      }
    },
  },
];

const managerQuestion = [
  {
    type: "input",
    name: "officeNumber",
    message: "What is the Manager's office number? (required)",
    validate: (phoneInput) => {
      if (phoneInput) {
        return true;
      } else {
        console.log("Please enter the Manager's office number.");
        return false;
      }
    },
  },
];

const engineerQuestion = [
  {
    type: "input",
    name: "github",
    message: "What is the Engineer's github? (required)",
    validate: (githubInput) => {
      if (githubInput) {
        return true;
      } else {
        console.log("Please enter the Engineer's github.");
        return false;
      }
    },
  },
];

const internQuestion = [
  {
    type: "input",
    name: "school",
    message: "What is the Intern's school? (required)",
    validate: (schoolInput) => {
      if (schoolInput) {
        return true;
      } else {
        console.log("Please enter the Intern's school.");
        return false;
      }
    },
  },
];

function createTeamMember() {
  inquirer
    .prompt(initialQuestions)
    .then((userInput) => {
      let memberName = userInput.name;
      let memberId = userInput.id;
      let memberEmail = userInput.email;
      let memberType = userInput.employeeType;
      if (memberType === "Manager") {
        inquirer.prompt(managerQuestion).then(({ officeNumber }) => {
          teamMembers.push(
            new Manager(memberName, memberId, memberEmail, officeNumber)
          );
          continueTeamSetup();
        });
      } else if (memberType === "Engineer") {
        inquirer.prompt(engineerQuestion).then(({ github }) => {
          teamMembers.push(
            new Engineer(memberName, memberId, memberEmail, github)
          );
          continueTeamSetup();
        });
      } else if (memberType === "Intern") {
        inquirer.prompt(internQuestion).then(({ school }) => {
          teamMembers.push(
            new Intern(memberName, memberId, memberEmail, school)
          );
          continueTeamSetup();
        });
      }
    });
}

function continueTeamSetup() {
  inquirer
    .prompt({
      type: "list",
      name: "addMore",
      message: "Would you like to add another Team Member?",
      choices: ["Yes", "No"],
      validate: (continueInput) => {
        if (continueInput) {
          return true;
        } else {
          console.log("Please select Yes or No.");
          return false;
        }
      },
    })
    .then(({ addMore }) => {
      if (addMore === "Yes") {
        createTeamMember();
      } else {
        console.log(teamMembers);
        return;
      }
    });
}

createTeamMember();
