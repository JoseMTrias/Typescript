// const user: (string | number)[] = ["jt", 1]
let tUser: [string, number, boolean];

tUser = ['jt', 1234, false];

let rgb: [number, number, number] = [123, 123, 123];

type UserY = [number, string];

const newUser: UserY = [123, 'hi@ads.com'];

newUser[1] = 'yeahyeah';
// newUser.push(true)  was allowed, not anymore?

export {};
