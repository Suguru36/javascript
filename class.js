class User {
    constructor(firstName, LastName) {
        this.firstName = firstName;
        this.LastName = LastName;
    }

    sayName() {
        console.log(this.firstName +  ' ' +this.LastName);
    }
}

let user = new User('Tane', 'Maru');
user.sayName();