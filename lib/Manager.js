const Employee = require("./Employee.js");

class Manager extends Employee {
    constructor(id, name, officeNumber){
        super(id, name, email, "Manager")
        this.officeNumber = officeNumber;
    }
    getofficeNumber() {
        return this.officeNumber;
    }
}

module.exports = Manager
