const Manager = require("../lib/Manager");
const Engineer = require("../lib/Engineer");
const Intern = require("../lib/Intern");

const renderTeamMembers = function (templateData) {
  let teamSection = "";
  templateData.forEach((member) => {
    if (member instanceof Manager) {
      teamSection += `<div class="card text-white m-3 p-0 col-3" style="max-width: 20rem;">
            <div id="name" class="card-title mb-0 p-3 bg-primary"><h5>${member.getName()}</h5>
            <span class="material-icons">groups</span><span id="role"> ${member.getRole()}</span>
            </div>
            <div class="card-body mb-0 p-3 bg-light border-light">
              <div class="card-border"><p id="id" class="card-text mb-0 p-2 bg-white text-dark">ID: ${member.getId()}</p></div>
              <div class="card-border"><p id="email" class="card-text mb-0 p-2 bg-white text-dark">Email: <a href="mailto:${member.getEmail()}">${member.getEmail()}</a></p></div>
              <div class="card-border"><p id="other" class="card-text mb-0 p-2 bg-white text-dark">Office Number: ${member.getOfficeNumber()}</p></div>
            </div>
          </div>`;
    } else if (member instanceof Engineer) {
      teamSection += `<div class="card text-white m-3 p-0 col-3" style="max-width: 20rem;">
            <div id="name" class="card-title mb-0 p-3 bg-primary"><h5>${member.getName()}</h5>
            <span class="material-icons">code</span><span id="role"> ${member.getRole()}</span>
            </div>
            <div class="card-body mb-0 p-3 bg-light border-light">
              <div class="card-border"><p id="id" class="card-text mb-0 p-2 bg-white text-dark">ID: ${member.getId()}</p></div>
              <div class="card-border"><p id="email" class="card-text mb-0 p-2 bg-white text-dark">Email: <a href="mailto:${member.getEmail()}">${member.getEmail()}</a></p></div>
              <div class="card-border"><p id="other" class="card-text mb-0 p-2 bg-white text-dark">Github: <a href="${member.getGithub()}">${member.github}</a></p></div>
            </div>
          </div>`;
    } else if (member instanceof Intern) {
      teamSection += `<div class="card text-white m-3 p-0 col-3" style="max-width: 20rem;">
            <div id="name" class="card-title mb-0 p-3 bg-primary"><h5>${member.getName()}</h5>
            <span class="material-icons">school</span><span id="role"> ${member.getRole()}</span>
            </div>
            <div class="card-body mb-0 p-3 bg-light border-light">
              <div class="card-border"><p id="id" class="card-text mb-0 p-2 bg-white text-dark">ID: ${member.getId()}</p></div>
              <div class="card-border"><p id="email" class="card-text mb-0 p-2 bg-white text-dark">Email: <a href="mailto:${member.getEmail()}">${member.getEmail()}</a></p></div>
              <div class="card-border"><p id="other" class="card-text mb-0 p-2 bg-white text-dark">School: ${member.getSchool()}</p></div>
            </div>
          </div>`;
    }
  });
  return teamSection;
};

const generateTemplate = (templateData) => {
  const { name, id, email, ...other } = templateData;
  let htmlTemplate = "";
  htmlTemplate = `
  <!DOCTYPE html> 
  <html lang="en"> 
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.3.1/css/bootstrap.min.css"
    />
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/open-iconic/1.1.1/font/css/open-iconic-bootstrap.min.css"
    />
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="./style.css"/>
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <title>Team Profile Generator</title>
  </head>

  <body>
    <section class="team-header"><h1>My Team</h1></section>
    <section id="team-members" class="row d-flex justify-content-center">${renderTeamMembers(
      templateData
    )}</section>
  </body>
  </html>
  `;
  return htmlTemplate;
};

module.exports = generateTemplate;
