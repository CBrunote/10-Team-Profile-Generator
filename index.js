const inquirer = require("inquirer");
const fs = require("fs");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

const employees = [];

let isTeamComplete = false;

const validateInput = (userinput) => {
    if (userinput === "") {
        return "please type your answer before proceeding";
    } else {
        return true;
    }
};

const init = async () => {
    await createManager();

    while (isTeamComplete === false) {
        const employeeTypeQuestion = [
            {
                type: "list",
                messsage: "Which type of employee do you want to add?",
                name: "employeeType",
                choices: [
                    {name: "Engineer", value: "engineer", short: "Engineer"},
                    {name: "Intern", value: "intern", short: "Intern"},
                    {name: "Build Team", value: "none", short: "Build Team"},
                ],
            },
        ];
        
        const { employeeType } = await inquirer.prompt(employeeTypeQuestion);
        if (employeeType === 'none') {
            isTeamComplete = true;
            console.log(employees)
            generateCards(employees)
            fs.writeFile('index.html', generateHTML(employeeCards), (error) =>
            error ? console.error(error) : console.log('HTML file written successfully!'))
        } else {
            if (employeeType === 'engineer') {
                await createEngineer();
            }
            if (employeeType === 'intern') {
                await createIntern();
            }
        }
    }
}

const createManager = async () => {
    const managerQuestions = [
        {
            type: 'input',
            message: "Enter manager's name",
            name: 'name',
            validate: validateInput,
        },
        {
            type: 'input',
            message: "Enter manager's employee ID",
            name: 'id',
            validate: validateInput,
        },
        {
            type: 'input',
            message: "Enter manager's work email",
            name: 'email',
            validate: validateInput,
        },
        {
            type: 'input',
            message: "Enter manager's office number",
            name: 'officeNumber',
            validate: validateInput,
        },

    ];
    
    await inquirer
        .prompt(managerQuestions)
        .then((data) => {
            employees.push(new Manager(data.id, data.name, data.email, data.officeNumber))
        });

};

const createEngineer = async () => {
    const engineerQuestions = [
        {
            type: 'input',
            message: "Enter engineer's name",
            name: 'name',
            validate: validateInput,
        },
        {
            type: 'input',
            message: "Enter engineer's employee ID",
            name: 'id',
            validate: validateInput,
        },
        {
            type: 'input',
            message: "Enter engineer's work email",
            name: 'email',
            validate: validateInput,
        },
        {
            type: 'input',
            message: "Enter engineer's github username",
            name: 'github',
            validate: validateInput,
        },

    ];

    await inquirer
        .prompt(engineerQuestions)
        .then((data) => {
            employees.push(new Engineer(data.id, data.name, data.email, data.github))
        });
};

const createIntern = async () => {
    const internQuestions = [
        {
            type: 'input',
            message: "Enter intern's name",
            name: 'name',
            validate: validateInput,
        },
        {
            type: 'input',
            message: "Enter intern's employee ID",
            name: 'id',
            validate: validateInput,
        },
        {
            type: 'input',
            message: "Enter intern's work email",
            name: 'email',
            validate: validateInput,
        },
        {
            type: 'input',
            message: "Enter the name of the intern's school",
            name: 'school',
            validate: validateInput,
        },

    ];

    await inquirer
        .prompt(internQuestions)
        .then((data) => {
            employees.push(new Intern(data.id, data.name, data.email, data.school))
    });

};


const employeeCards = []

function generateCards(arr) {
    arr.forEach(element => {
        switch (element.getRole()) {
            case "Manager":
                employeeCards.push(`<div class="card col-4" style="width: 18rem;">
                <div class="card-body">
                <h5 class="card-title">${element.name}</h5>
                <p class="card-text">${element.getRole()}</p>
                </div>
                <ul class="list-group list-group-flush">
                <li class="list-group-item">${element.id}</li>
                <li class="list-group-item"><a href = "mailto: ${element.email}">${element.email}</a></li>
                <li class="list-group-item">${element.officeNumber}</li>
                </ul>
            </div>`)
                break;

            case "Engineer":
                employeeCards.push(`<div class="card col-4" style="width: 18rem;">
                <div class="card-body">
                <h5 class="card-title">${element.name}</h5>
                <p class="card-text">${element.getRole()}</p>
                </div>
                <ul class="list-group list-group-flush">
                <li class="list-group-item">${element.id}</li>
                <li class="list-group-item"><a href = "mailto: ${element.email}">${element.email}</a></li>
                <li class="list-group-item"><a href="https://github.com/${element.github}">GitHub Profile</a></li>
                </ul>
                </div>`)
                break;
                
            case "Intern":
                employeeCards.push(`<div class="card col-4" style="width: 18rem;">
                    <div class="card-body">
                    <h5 class="card-title">${element.name}</h5>
                    <p class="card-text">${element.getRole()}</p>
                    </div>
                    <ul class="list-group list-group-flush">
                    <li class="list-group-item">${element.id}</li>
                    <li class="list-group-item"><a href = "mailto: ${element.email}">${element.email}</a></li>
                    <li class="list-group-item">${element.school}</li>
                    </ul>
                    </div>`)
                break;
        
        }
        
    });

}

function generateHTML(arr) {
    return `
    <!DOCTYPE html>
    <html lang="en">
    
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.1.3/dist/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
      <title>Project Team!</title>
    </head>
    
    <body>
        
        <header class="container-fluid bg-dark text-light mb-5 p-3">
            <div class="d-flex align-items-center">
            <h1>Project Team</h1>
            </div>
            </header>
            <section class="container">
                <div class="row">
                ${arr.join('\r\n')}
                </div>
            </section>
        <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/popper.js@1.14.3/dist/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.1.3/dist/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" crossorigin="anonymous"></script>
    </body>`


}

init();