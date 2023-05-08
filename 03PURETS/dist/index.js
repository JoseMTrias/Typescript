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
    constructor(email, name) {
        this.email = email;
        this.name = name;
        this.city = 'sevilla';
    }
}
const jose = new User('j@t.com', 'jose');
// jose.name;
