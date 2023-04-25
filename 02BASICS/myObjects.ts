// const User = {
//     name: "hi",
//     email: "hi@hi.com",
//     isActive: true
// }

// function createUser({name: string, isPaid: boolean}) {}

// let newUser = {name: "hi", isPaid: false, email: "hi@hi.com"}

// createUser(newUser)


// function createCourse():{name: string, price: number}{
//     return {name: "reactjs", price: 234}
// }


// type Aliases

type User = {
    name: string;
    email: string;
    isActive: boolean
}


function createUser(user: User): User {
    return {name: "", email: "", isActive: true}
}

createUser({name: "", email: "", isActive: true})

export {}