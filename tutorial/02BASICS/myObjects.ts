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

// type User = {
//     name: string;
//     email: string;
//     isActive: boolean
// }


// function createUser(user: User): User {
//     return {name: "", email: "", isActive: true}
// }

// createUser({name: "", email: "", isActive: true})

type User = {
    readonly _id: string
    name: string
    email: string
    isActive: boolean
    creditCardDetails?: number
}

let myUser: User = {
    _id: "1234",
    name: "hi",
    email: "hi@hi.com",
    isActive: false
}

type cardNumber = {
    cardnumber: string
}

type cardDate = {
    cardDate: string
}

type cardDetails = cardNumber & cardDate & {
    cvv: number
}



myUser.email = "asdf@asdf.com"
// myUser._id = "trial"


export {}