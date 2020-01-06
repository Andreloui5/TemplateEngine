// require Employee class
const Employee = require("./Employee");

// create a class called Engineer that extends Employee

class Engineer extends Employee {
    constructor(name, id, email, gitHub) {
        super(name, id, email);
        this.gitHub =  gitHub;
    }
    getGitHub(){
        return this.gitHub;
    }
    getRole(){
        return "Engineer";
    }
}
//Exports Engineer
module.exports = Engineer;

