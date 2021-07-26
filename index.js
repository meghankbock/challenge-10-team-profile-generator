const inquirer = require("inquirer");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const questions = require("./src/questions");
const generateTemplate = require("./src/generateTemplate");
const fs = require("fs");

let teamMembers = [];

function createTeam(flag) {
  console.log("flag: " + flag);
  let action = "";
  if (flag === true) {
    console.log("flag = true");
    return inquirer
      .prompt(questions("manager"))
      .then((managerInput) => {
        teamMembers.push(
          new Manager(
            managerInput.name,
            managerInput.id,
            managerInput.email,
            managerInput.officeNumber
          )
        );
        console.log("team members: " + teamMembers);
      })
      .then(() => {
        return menuPrompt();
      })
      .catch((err) => {
        console.log(err);
      });
  } else if (flag === false) {
    console.log("flag = false");
    return menuPrompt();
  }
}

function menuPrompt() {
  return inquirer.prompt(questions("menu")).then((menuInput) => {
    menuHandler(menuInput.action);
  });
}

function menuHandler(action) {
  if (action === "1 - Add an engineer") {
    return inquirer.prompt(questions("engineer")).then((engineerInput) => {
      teamMembers.push(
        new Engineer(
          engineerInput.name,
          engineerInput.id,
          engineerInput.email,
          engineerInput.github
        )
      );
      console.log("team members: " + teamMembers);
      return createTeam(false);
    });
  } else if (action === "2 - Add an intern") {
    return inquirer.prompt(questions("intern")).then((internInput) => {
      teamMembers.push(
        new Intern(
          internInput.name,
          internInput.id,
          internInput.email,
          internInput.school
        )
      );
      console.log("team members: " + teamMembers);
      return createTeam(false);
    });
  } else if (action === "3 - Finish building my team") {
    console.log("team members: " + teamMembers);
    buildTemplate(teamMembers);
    return;
  }
}

function buildTemplate(teamMembers) {
  return new Promise((resolve, reject) => {
    console.log("build template - team members: " + teamMembers);
    generateTemplate(teamMembers)
  })
    .then((htmlTemplate) => {
      return writeToFile(htmlTemplate);
    }).catch((err) => {
      console.log(err);
    });
  };

function writeToFile(htmlFile) {
  return new Promise((resolve, reject) => {
    fs.writeFile("./dist/my-team.html", htmlFile, (err) => {
      if (err) {
        reject(err);
        return;
      }
      resolve({
        ok: true,
        message: "File created!",
      });
    });
  });
}

console.log("team members: " + teamMembers);
createTeam(true);
