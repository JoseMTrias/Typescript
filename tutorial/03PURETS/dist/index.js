"use strict";
// class User {
//   public email: string;
//   private name: string; //you can also use # for private
//   readonly city: string = 'sevilla';
//   constructor(email: string, name: string) {
//     this.email = email;
//     this.name = name;
//   }
// }
class User {
    constructor(email, name // private userId: string
    ) {
        this.email = email;
        this.name = name;
        this._courseCount = 1;
        this.city = 'sevilla';
    }
    deleteToken() {
        console.log('Token deleted');
    }
    get getAppleEmail() {
        return `apple${this.email}`;
    }
    get courseCount() {
        return this._courseCount;
    }
    set courseCount(courseNum) {
        if (courseNum <= 1) {
            throw new Error('Course count should be more than 1');
        }
        this._courseCount = courseNum;
    }
}
class SubUser extends User {
    constructor() {
        super(...arguments);
        this.isFamily = true;
    }
    changeCourseCount() {
        this._courseCount = 4;
    }
}
const jose = new User('j@t.com', 'jose');
// jose.name;
// jose.deleteToken()
