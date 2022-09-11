const Employee = require("./Employee.js");

class Engineer extends Employee {
    constructor(id, name, github){
        super(id, name, email, "Engineer")
        this.github = github;
    }
    getGithub() {
        return this.github;
    }
}

module.exports = Engineer
