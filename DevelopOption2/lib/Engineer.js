// require Employee class
const Employee = require("./Employee");

// create a class called Engineer that extends Employee

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github =  github;
    }
    getGithub(){
        return this.github;
    }
    getRole(){
        return "Engineer";
    }
}
//Exports Engineer
module.exports = Engineer;

