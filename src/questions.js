const menuQuestion = {
  type: "list",
  name: "action",
  message: "What would you like to do next?",
  choices: [
    "1 - Add an engineer",
    "2 - Add an intern",
    "3 - Finish building my team",
  ],
};

const managerQuestions = [
  {
    type: "input",
    name: "name",
    message: "What is the Manager's name? (required)",
    validate: (nameInput) => {
      if (nameInput) {
        return true;
      } else {
        console.log("Please enter the Manager's name.");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "id",
    message: "What is the Manager's ID? (required)",
    validate: (emailInput) => {
      if (emailInput) {
        return true;
      } else {
        console.log("Please enter the Manager's ID.");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "email",
    message: "What is the Manager's email address? (required)",
    validate: (emailInput) => {
      if (emailInput) {
        return true;
      } else {
        console.log("Please enter the Manager's email address.");
        return false;
      }
    },
  },
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

const engineerQuestions = [
  {
    type: "input",
    name: "name",
    message: "What is the Engineer's name? (required)",
    validate: (nameInput) => {
      if (nameInput) {
        return true;
      } else {
        console.log("Please enter the Engineer's name.");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "id",
    message: "What is the Engineer's ID? (required)",
    validate: (emailInput) => {
      if (emailInput) {
        return true;
      } else {
        console.log("Please enter the Engineer's ID.");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "email",
    message: "What is the Engineer's email address? (required)",
    validate: (emailInput) => {
      if (emailInput) {
        return true;
      } else {
        console.log("Please enter the Engineer's email address.");
        return false;
      }
    },
  },
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

const internQuestions = [
    {
        type: "input",
        name: "name",
        message: "What is the Intern's name? (required)",
        validate: (nameInput) => {
          if (nameInput) {
            return true;
          } else {
            console.log("Please enter the Intern's name.");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "id",
        message: "What is the Intern's ID? (required)",
        validate: (emailInput) => {
          if (emailInput) {
            return true;
          } else {
            console.log("Please enter the Intern's ID.");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "email",
        message: "What is the Intern's email address? (required)",
        validate: (emailInput) => {
          if (emailInput) {
            return true;
          } else {
            console.log("Please enter the Intern's email address.");
            return false;
          }
        },
      },
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

module.exports = (questionType) => {
    if(questionType === 'menu') {
        return menuQuestion;
    } else if(questionType === 'manager') {
        return managerQuestions;
    }
    else if(questionType === 'engineer') {
        return engineerQuestions;
    }
    else if(questionType === 'intern') {
        return internQuestions;
    }
}