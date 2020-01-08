const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const path = require("path");
const inquirer = require("inquirer")
const fs = require("fs");
const engineerCard = require("./htmlRender/engineerCard");
const internCard = require("./htmlRender/internCard");
const managerCard = require("./htmlRender/managerCard");
const mainRender = require("./htmlRender/mainRender");

//puts output into the 'output' folder
const outputPath = path.resolve(__dirname, "output", "team.html");
//where cards will be going-- teamMember
const teamMember = [];

function mainApp() {
    // create a manager
    inquirer    
        .prompt([
            {
            type: "input",
            message: "What is your manager's name?",
            name: "managerName"
            },
            {
            type: "input",
            message: "What is your manager's ID number?",
            name: "managerId"
            },
            {
            type: "input",
            message: "What is your manager's email address?",
            name: "managerEmail"
            },
            {
            type: "input",
            message: "What is your manager's phone number?",
            name: "managerNumber"
            }
        ])
        .then(answers =>{
            const {managerName, managerId, managerEmail, managerNumber} = answers;
            const managerObj = new Manager(managerName, managerId, managerEmail, managerNumber);

            const managerCardHtml = managerCard(managerObj);

            teamMember.push(managerCardHtml);
            createTeam();
        })

}
// this function create a list to add teammembers
function createTeam(){

    inquirer
        .prompt([
            {
            type: "list",
            name: "userChoice",
            message: "What would you like to do?",
            choices: ["Add an Engineer", "Add an Intern", "I'm all done. Let's see my team!"],
            }            
        ])
        .then(answers => {
            // console.log(answers.userChoice);
            // create a switch statement to choose between engineer, intern, or build team
           switch (answers.userChoice) {
               case "Add an Engineer": {
                   getEngineer();
                   break;
               }
               case "Add an Intern": {
                   getIntern();
                   break;
               }
               case "I'm all done. Let's see my team!": {
                   buildTeam();
                   break;
               }
           }
        })
}

// a function that create an engineer
function getEngineer() {

  // create an Engineer
  inquirer    
  .prompt([
      {
      type: "input",
      message: "What is your Engineer's name?",
      name: "engineerName"
      },
      {
      type: "input",
      message: "What is your engineer's ID number?",
      name: "engineerId"
      },
      {
      type: "input",
      message: "What is your engineer's email address?",
      name: "engineerEmail"
      },
      {
      type: "input",
      message: "What is your engineer's Github?",
      name: "engineerGithub"
      }
  ])
  .then(answers =>{
      const {engineerName, engineerId, engineerEmail, engineerGithub} = answers;
      const engineerObj = new Engineer(engineerName, engineerId, engineerEmail, engineerGithub);
// console.log(engineerObj);
      const engineerCardHtml = engineerCard(engineerObj);
// console.log(engineerCardHtml);
      teamMember.push(engineerCardHtml);
      createTeam();
  })
}
// a function that create an intern
function getIntern() {
  // create an Engineer
  inquirer    
  .prompt([
      {
      type: "input",
      message: "What is your intern's name?",
      name: "internName"
      },
      {
      type: "input",
      message: "What is your intern's ID number?",
      name: "internId"
      },
      {
      type: "input",
      message: "What is your intern's email address?",
      name: "internEmail"
      },
      {
      type: "input",
      message: "What school does your intern attend?",
      name: "internSchool"
      }
  ])
  .then(answers =>{
      const {internName, internId, internEmail, internSchool} = answers;
      const internObj = new Intern(internName, internId, internEmail, internSchool);

      const internCardHtml = internCard(internObj);

      teamMember.push(internCardHtml);
      createTeam();
  })
}

function buildTeam() {
    //remove commas from the array
const joinedTeam = teamMember.join('');

fs.writeFileSync(outputPath, mainRender(joinedTeam), "utf-8");
}

mainApp()


