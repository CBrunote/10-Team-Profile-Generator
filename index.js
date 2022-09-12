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
            fs.writeFile('./dist/index.html', generateHTML(employeeCards), (error) =>
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
                employeeCards.push(`<div class="col">
        <div class="card bg-primary text-white text-center fw-bold h-100">
            <div class="card-body">
                <h5 class="card-title text-capitalize">${element.name}</h5>
                <p class="card-text card-subtitle fw-bold"><i class="fa-solid fa-mug-hot"></i> ${element.getRole()}</p>
            </div>
            <ul class="list-group list-group-flush card-text text-dark">
                <li class="list-group-item">ID: ${element.id}</li>
                <li class="list-group-item">Email: <a href = "mailto: ${element.email}">${element.email}</a></li>
                <li class="list-group-item">Phone: ${element.officeNumber}</li>
            </ul>
        </div>
        </div>`)
                break;

            case "Engineer":
                employeeCards.push(`<div class="col">
        <div class="card bg-success text-white text-center fw-bold h-100">
            <div class="card-body">
                <h5 class="card-title text-capitalize">${element.name}</h5>
                <p class="card-text card-subtitle"><i class="fa-sharp fa-solid fa-glasses"></i> ${element.getRole()}</p>
            </div>
            <ul class="list-group list-group-flush text-dark">
                <li class="list-group-item">ID: ${element.id}</li>
                <li class="list-group-item">Email: <a href = "mailto: ${element.email}">${element.email}</a></li>
                <li class="list-group-item">GitHub: <a href="https://github.com/${element.github}">${element.github}</a></li>
            </ul>
        </div>
    </div>`)
                break;
                
            case "Intern":
                employeeCards.push(`<div class="col">
        <div class="card bg-secondary text-center text-white fw-bold h-100">
            <div class="card-body">
                <h5 class="card-title text-capitalize">${element.name}</h5>
                <p class="card-text card-subtitle"><i class="fa-solid fa-graduation-cap"></i> ${element.getRole()}</p>
            </div>
            <ul class="list-group list-group-flush text-dark">
                <li class="list-group-item">ID ${element.id}</li>
                <li class="list-group-item">Email: <a href = "mailto: ${element.email}">${element.email}</a></li>
                <li class="list-group-item">School: ${element.school}</li>
            </ul>
        </div>
    </div>`)
                break;
        
        }
        
    });

}

function generateHTML(arr) {
    return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    <script src="https://kit.fontawesome.com/f6d3bd14b4.js" crossorigin="anonymous"></script>
    <title>Project Team!</title>
</head>

<body>
    <header class="container-fluid jumbotron text-center bg-dark text-light mb-5 p-3">
        <h1>Project Team</h1>
    </header>
    <section class="container">
        <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">
            ${arr.join('\r\n')}
        </div>
    </section>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
</body>`
}

init();