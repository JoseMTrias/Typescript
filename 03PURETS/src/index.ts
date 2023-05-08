class User {
  email: string;
  name: string;
  readonly city: string = 'sevilla';
  constructor(email: string, name: string) {
    this.email = email;
    this.name = name;
  }
}

const jose = new User('j@t.com', 'jose');
// jose.city = "sev"