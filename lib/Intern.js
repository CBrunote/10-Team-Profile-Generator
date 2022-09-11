const Employee = require("./Employee.js");

class Intern extends Employee {
    constructor(id, name, school){
        super(id, name, email, "Intern")
        this.school = school;
    }
    getSchool() {
        return this.school;
    }
}

module.exports = Intern
