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
  readonly city: string = 'sevilla';
  constructor(
    public email: string,
    public name: string
  ) // private userId: string
  {}
}

const jose = new User('j@t.com', 'jose');
// jose.name;
