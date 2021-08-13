// NPM Packages
const inquirer = require('inquirer');
// const colors = require('colors');

// Employee Classes
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');

// HTML Generator
const generateHTML = require('./src/generateHTML');

// Default Language and Other Colorized Fonts 
const welcomeMsg = ` * * HELLO THIS IS YOUR AUTOMATED TEAM PROFILE GENERATOR. * *  \n`.underline.green;
const error = `\r\n>> ERR: `.red.bold;
const noInfoEntered = `No information was entered.`;

// Hold Team Array
const teamArr = [];

// Welcome and Instructions
const welcome =  () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'welcome',
            message: welcomeMsg + '\nPlease input the information about your team, firstly your Team Manager. \nThis will help to complete your customized MyTeam HTML doc. \nPlease continue! Press ENTER to Start. \n',
        },
    ])
    .then(addManager)
};

// The User Input Questions that are Awaiting 
// Questions for Manager
const addManager = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Input the name of the Team Manager\.',
            validate: name => {
                if (name) {
                    return true;
                } else {
                    console.log (error + noInfoEntered + `Please enter the name of the Team Manager\.`);
                    return false; 
                }
            },
        },
        {
            type: 'input',
            name: 'id',
            message: ({ name }) => `Input ${name}\'s employee ID.`,
            validate: id => {
                if (id) {
                    return true;
                } else {
                    ({ name }) => console.log (error + noInfoEntered + `Please enter employee ID ${name}\'s.`);
                    return false; 
                }
            },
        },
        {
            type: 'input',
            name: 'email',
            message: ({ name }) => `Input ${name}\'s email address.`,
            validate: email => {
                valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
                if (valid) {
                    return true;
                } else {
                    console.log(error + `Please enter a valid email address as an email address is required.`)
                    return false;
                };
            },
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: ({ name }) => `Input ${name}\'s office number.`,
            validate: officeNumber => {
                if (officeNumber) {
                    return true;
                } else {
                    ({ name }) => console.log (error + noInfoEntered + `Please enter office number ${name}\'s .`);
                    return false; 
                }
            },
        },
        {
            type: 'list',
            name: 'queryMoreReports',
            message: 'Would you like to add more staff members?',
            choices: ['Yes', 'No'],
        },
    ])
    .then(answers => {
    const {name, id, email, officeNumber} = answers;
    const manager = new Manager(name, id, email, officeNumber);
    teamArr.push(manager);
    (answers.queryMoreReports === 'Yes') ? addReports(): generateHTML(teamArr);
    })
};

// Direct Report Questions
const addReports = () => {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'title',
            message: 'Staff member\'s title (select one):',
            choices: ['Engineer', 'Intern'],
        },
        {
            type: 'input',
            name: 'name',
            message: ({ title }) => `Input ${title}\'s name.`,
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    ({ title }) => console.log (error + noInfoEntered + `Please enter the name ${title}\'s.`);
                    return false; 
                }
            },
        },
        {
            type: 'input',
            name: 'id',
            message: ({ name }) => `Input ${name}\'s employee ID.`,
            validate: id => {
                if (id) {
                    return true;
                } else {
                    ({ name }) => console.log (error + noInfoEntered + `Please enter employee ID ${name}\'s.`);
                    return false; 
                }
            },
        },
        {
            type: 'input',
            name: 'email',
            message: ({ name }) => `Input ${name}\'s email address.`,
            validate: email => {
                valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
                if (valid) {
                    return true;
                } else {
                    console.log(error + `Please enter a valid email address as an email address is required.`)
                    return false;
                };
            },
        },
        {
            type: 'input',
            name: 'github',
            message: ({ name }) => `Input GitHub username ${name}\'s.`,
            when: (input) => input.title === 'Engineer',
            validate: github => {
                if (github) {
                    return true;
                } else {
                    ({ name }) => console.log (error + noInfoEntered + `Please enter GitHub username ${name}\'s.`);
                    return false; 
                }
            },
        },
        {
            type: 'input',
            name: 'school',
            message: ({ name }) => `Input ${name}\'s school.`,
            when: (input) => input.title === 'Intern',
            validate: school => {
                if (school) {
                    return true;
                } else {
                    ({ name }) => console.log (error + noInfoEntered + `Please enter school ${name}\'s.`);
                    return false; 
                }
            },
        },
        {
            type: 'list',
            name: 'queryMoreReports',
            message: 'Would you like to add more staff members?',
            choices: ['Yes', 'No'],
        },
    ])
    .then(answers => {
        if (answers.title === 'Engineer') {
            const {name, id, email, github} = answers;
            const engineer = new Engineer (name, id, email, github);
            teamArr.push(engineer); 
        
        } else if (answers.title === 'Intern') {
            const {name, id, email, school} = answers;
            const intern = new Intern (name, id, email, school);
            teamArr.push(intern);
        };
        (answers.queryMoreReports === 'Yes') ? addReports() : generateHTML(teamArr);
    })
};

// Initialize App Function
const init = () => welcome()

// App Initialization
init();