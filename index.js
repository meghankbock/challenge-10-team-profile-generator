const inquirer = require("inquirer");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const questions = require("./src/questions");
const generateTemplate = require("./src/generateTemplate");
const fs = require("fs");

let teamMembers = [];

const createTeam = (flag) => {
  if (flag === true) {
    return managerPrompt();
  } else if (flag === false) {
    return menuPrompt();
  }
};

const managerPrompt = () => {
  return inquirer
      .prompt(questions("manager"))
      .then((managerInput) => {
        teamMembers.push(
          new Manager(
            managerInput.name.toUpperCase(),
            managerInput.id,
            managerInput.email,
            managerInput.officeNumber
          )
        );
      })
      .then(() => {
        return menuPrompt();
      })
      .catch((err) => {
        console.log(err);
      });
}

const menuPrompt = () => {
  return inquirer.prompt(questions("menu")).then((menuInput) => {
    menuHandler(menuInput.action);
  });
}

const menuHandler = (action) => {
  if (action === "1 - Add an engineer") {
    return inquirer.prompt(questions("engineer")).then((engineerInput) => {
      teamMembers.push(
        new Engineer(
          engineerInput.name.toUpperCase(),
          engineerInput.id,
          engineerInput.email,
          engineerInput.github
        )
      );
      return createTeam(false);
    })
    .catch((err) => {
      console.log(err);
    });;
  } else if (action === "2 - Add an intern") {
    return inquirer.prompt(questions("intern")).then((internInput) => {
      teamMembers.push(
        new Intern(
          internInput.name.toUpperCase(),
          internInput.id,
          internInput.email,
          internInput.school.toUpperCase()
        )
      );
      return createTeam(false);
    })
    .catch((err) => {
      console.log(err);
    });;
  } else if (action === "3 - Finish building my team") {
    buildTemplate(teamMembers);
    return;
  }
}

const buildTemplate = (teamMembers) => {
  return new Promise((resolve, reject) => {
    resolve(generateTemplate(teamMembers));
    return;
  }).then((htmlTemplate) => {
    writeToFile(htmlTemplate);
    return;
  })
  .catch((err) => {
      console.log(err);
    });
  };

const writeToFile = (htmlFile) => {
  console.log("write to file started");
  return new Promise((resolve, reject) => {
    fs.writeFile("./dist/my-team.html", htmlFile, (err) => {
      if (err) {
        reject(err);
        return;
      }
      resolve({
        ok: true,
        message: "HTML File created!",
      });
    });

    fs.copyFile("./src/style.css", "./dist/style.css", (err) => {
      if (err) {
        reject(err);
        return;
      }
      resolve({
        ok: true,
        message: "CSS File created!",
      });
    })
  });
}

createTeam(true);
