const inquirer = require('inquirer');
const fs = require ('fs');
const colors = require('colors');

const generateHtml = require('./src/generateHtml.js');

const Employee = require('./lib/employee.js');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern.js');
const Manager = require('./lib/manager.js');

const teamData = [];

const initManager = () => {
    console.log(`
    *********************************
    ** TEAM PROFILE HTML GENERATOR **
    *********************************`.rainbow + `
    This app will generate a website 
    based on your team's data!

    ` + `********** Entry Start **********`.green
    )
    return inquirer.prompt ([
        {
            type: 'input',
            name: 'managerName',
            message: "What is the manager's name?",
            validate: function(managerName){
                if (managerName){
                    return true;
                } else {
                    console.log('ERROR: BLANK ENTRY, RETRY!'.underline.red)
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'employeeId',
            message: "What is the manager's employee ID?",
            validate: function(employeeId){
                if (employeeId){
                    return true;
                } else {
                    console.log('ERROR: BLANK ENTRY, RETRY!'.underline.red)
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'emailAddress',
            message: "What is the team manager's email address?",
            validate: function(emailAddress)
            {
                valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailAddress)
                if (valid) {
                    return true;
                } else {
                    console.log("ERROR: Please enter a valid email!")
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'officenumberMgr',
            message: "What is the team manager's office number?",
            validate: function(officenumberMgr){
                if (officenumberMgr){
                    return true;
                } else {
                    console.log('ERROR: BLANK ENTRY, RETRY!'.underline.red)
                    return false;
                }
            }
        },
    ])
    .then(reply => {
        const manager = new Manager (reply.managerName, reply.employeeId, reply.emailAddress, reply.officenumberMgr)

        teamData.push(manager)
        console.log(manager)
    })
}

const initTeam = () => {
    return inquirer.prompt ([
        {
            type: "list",
            message: "Build your team:",
            name: "teamChoice",
            choices: ["Add Engineer", "Add Intern", "Team Complete!"]
        }
    ])
    .then(function (user){
        switch(user.teamChoice){
            case "Add Engineer":
                addEngineer();
                break;
            case "Add Intern":
                addIntern();
                break;
            default:
                console.log(`
                **********************
                *** Entry Captured ***
                *** Generating HTML **
                **********************
                `.rainbow)
        }
    })
}

function addEngineer() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'engineerName',
            message: "What is the engineer's name?",
            validate: function(engineerName){
                if (engineerName){
                    return true;
                } else {
                    console.log('ERROR: BLANK ENTRY, RETRY!'.underline.red)
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'employeeId',
            message: "What is the engineer's employee ID?",
            validate: function(employeeId){
                if (employeeId){
                    return true;
                } else {
                    console.log('ERROR: BLANK ENTRY, RETRY!'.underline.red)
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'emailAddress',
            message: "What is the engineer's email address?",
            validate: function(emailAddress)
            {
                valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailAddress)
                if (valid) {
                    return true;
                } else {
                    console.log("ERROR: Please enter a valid email!")
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'githubUser',
            message: "What is the engineer's GitHub username?",
            validate: function(githubUser){
                if (githubUser){
                    return true;
                } else {
                    console.log('ERROR: BLANK ENTRY, RETRY!'.underline.red)
                    return false;
                }
            }
        },
    ])
    .then(reply => {
        const engineer = new Engineer (reply.engineerName, reply.employeeId, reply.emailAddress, reply.githubUser)

        teamData.push(engineer)
        console.log(teamData)
        initTeam()
    })
    
}

function addIntern() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'internName',
            message: "What is the intern's name?",
            validate: function(internName){
                if (internName){
                    return true;
                } else {
                    console.log('ERROR: BLANK ENTRY, RETRY!'.underline.red)
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'employeeId',
            message: "What is the intern's employee ID?",
            validate: function(employeeId){
                if (employeeId){
                    return true;
                } else {
                    console.log('ERROR: BLANK ENTRY, RETRY!'.underline.red)
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'emailAddress',
            message: "What is the intern's email address?",
            validate: function(emailAddress)
            {
                valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailAddress)
                if (valid) {
                    return true;
                } else {
                    console.log("ERROR: Please enter a valid email!")
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'internSchool',
            message: "What school is the intern from?",
            validate: function(internSchool){
                if (internSchool){
                    return true;
                } else {
                    console.log('ERROR: BLANK ENTRY, RETRY!'.underline.red)
                    return false;
                }
            }
        },
    ])
    .then(reply => {
        const intern = new Intern (reply.internName, reply.employeeId, reply.emailAddress, reply.internSchool)

        teamData.push(intern)
        console.log(teamData)
        initTeam()
    })
    
}

initManager()
    .then(initTeam)
    .catch(err => {
        console.log(err);
    });
