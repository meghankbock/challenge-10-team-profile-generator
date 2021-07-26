function renderTeamMembers(templateData) {
    let teamSection = '';
    templateData.forEach(member => {
        if(member.role === 'Manager') {
            teamSection += `<div class="card text-white bg-primary mb-3" style="max-width: 18rem;">
            <div id="name" class="card-header">${member.name}</div>
            <div id="role" class="card-title"><h5>${member.role}</h5></div>
            <div class="card-body bg-light">
              <p id="id" class="card-text bg-light border-light text-dark">ID: ${member.id}</p>
              <p id="email" class="card-text bg-light border-light text-dark">Email: <a href="mailto:${member.email}">${member.email}</a></p>
              <p id="other" class="card-text bg-light border-light text-dark">${member.officeNumber}</p>
            </div>
          </div>`;
        } else if(member.role === 'Engineer') {
            teamSection += `<div class="card text-white bg-primary mb-3" style="max-width: 18rem;">
            <div id="name" class="card-header">${member.name}</div>
            <div id="role" class="card-title"><h5>${member.role}</h5></div>
            <div class="card-body bg-light">
            <p id="id" class="card-text bg-light border-light text-dark">ID: ${member.id}</p>
            <p id="email" class="card-text bg-light border-light text-dark">Email: <a href="mailto:${member.email}">${member.email}</a></p>
              <p id="other" class="card-text bg-light border-light text-dark">Github: <a href="https://github.com/${member.github}">${member.github}</p>
            </div>
          </div>`;
        } else if(member.role === 'Intern') {
            teamSection += `<div class="card text-white bg-primary mb-3" style="max-width: 18rem;">
            <div id="name" class="card-header">${member.name}</div>
            <div id="role" class="card-title"><h5>${member.role}</h5></div>
            <div class="card-body bg-light">
            <p id="id" class="card-text bg-light border-light text-dark">ID: ${member.id}</p>
            <p id="email" class="card-text bg-light border-light text-dark">Email: <a href="mailto:${member.email}">${member.email}</a></p>
              <p id="other" class="card-text bg-light border-light text-dark">School: ${member.school}</p>
            </div>
          </div>`;
        }
    });
    return teamSection;
}

const generateTemplate = (templateData) => {
    console.log("template data: " + templateData);
    return `
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
    <section id=team-members>${renderTeamMembers(templateData)}</section>
  </body>
  </html>
  `
}

module.exports = generateTemplate;