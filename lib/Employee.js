class Employee {
    constructor(name = "", id = "", email = "") {
        this.name = name;
        this.id = id;
        this.email = email;
    } 

    getName() {
        if(this.name) {
            return this.name;
        } else {
            return;
        }
    }

    getId() {
        if(this.id) {
            return this.id;
        } else {
            return;
        }
    }

    getEmail() {
        if(this.email) {
            return this.email;
        } else {
            return;
        }
    }

    getRole() {
        return 'Employee';
    }
}

module.exports = Employee;