class Employee {
    constructor(id, name, email, type){
        this.id = id;
        this.name = name;
        this.email = email
        this.type = type;
    }
    getname() {
        return this.name;
    };

    getId() {
        return this.id;
    };
    
    getEmail() {
        return this.email;
    };

    getRole() {
        return this.type;
    };
}

module.exports = Employee