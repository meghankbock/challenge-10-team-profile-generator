const Employee = require("./Employee");

class Manager extends Employee {
    constructor(name = '', id = '', email = '', officeNumber = '') {
        super(name,id,email);

        this.officeNumber = officeNumber;
    }

    getRole() {
        return 'Manager';
    }

    getOfficeNumber() {
        if (this.officeNumber) {
          return this.officeNumber;
        } else {
          return;
        }
      }
}

module.exports = Manager;