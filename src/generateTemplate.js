const Manager = require("../lib/Manager");
const Engineer = require("../lib/Engineer");
const Intern = require("../lib/Intern");

const renderTeamMembers = function(templateData) {
    console.log("template data: " + templateData);
    let teamSection = '';
    templateData.forEach(member => {
        if(member instanceof Manager) {
            teamSection += 
          `<div class="card text-white m-3 p-0 col-3" style="max-width: 20rem;">
            <div id="name" class="card-title mb-0 p-3 bg-primary"><h5>${member.getName()}</h5>
            <span id="role">${member.getRole()}</span>
            </div>
            <div class="card-body mb-0 p-3 bg-light border-light">
              <p id="id" class="card-text mb-0 p-2 bg-white border-light text-dark">ID: ${member.getId()}</p>
              <p id="email" class="card-text mb-0 p-2 bg-white border-light text-dark">Email: <a href="mailto:${member.getEmail()}">${member.getEmail()}</a></p>
              <p id="other" class="card-text mb-0 p-2 bg-white border-light text-dark">Office Number: ${member.getOfficeNumber()}</p>
            </div>
          </div>`;
        } else if(member instanceof Engineer) {
            teamSection += `<div class="card text-white bg-primary m-3 col-md-3" style="max-width: 18rem;">
            <div id="name" class="card-title"><h5>${member.getName()}</h5>
            <span id="role">${member.getRole()}</span>
            </div>
            <div class="card-body bg-light">
            <p id="id" class="card-text bg-light border-light text-dark">ID: ${member.getId()}</p>
            <p id="email" class="card-text bg-light border-light text-dark">Email: <a href="mailto:${member.getEmail()}">${member.getEmail()}</a></p>
              <p id="other" class="card-text bg-light border-light text-dark">Github: <a href="https://github.com/${member.getGithub()}">${member.getGithub()}</a></p>
            </div>
          </div>`;
        } else if(member instanceof Intern) {
            teamSection += `<div class="card text-white bg-primary m-3 col-md-3" style="max-width: 18rem;">
            <div id="name" class="card-title"><h5>${member.getName()}</h5>
            <span id="role">${member.getRole()}</span>
            </div>
            <div class="card-body bg-light>
            <p id="id" class="card-text bg-light border-light text-dark">ID: ${member.getId()}</p>
            <p id="email" class="card-text bg-light border-light text-dark">Email: <a href="mailto:${member.getEmail()}">${member.getEmail()}</a></p>
              <p id="other" class="card-text bg-light border-light text-dark">School: ${member.getSchool()}</p>
            </div>
          </div>`;
        }
    });
    return teamSection;
}

const generateTemplate = templateData => {
    const {
        name,
        id,
        email,
        ...other
      } = templateData;
      let htmlTemplate = '';
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
    <title>Team Profile Generator</title>
  </head>

  <body>
    <h1>My Team</h1>
    <section id=team-members class="row d-flex justify-content-center">${renderTeamMembers(templateData)}</section>
  </body>
  </html>
  `;
  console.log("html template: " + htmlTemplate);
  return htmlTemplate;
}

module.exports = generateTemplate;