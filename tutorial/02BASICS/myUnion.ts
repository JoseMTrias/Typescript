let score: number | string | boolean = 33;

score = 44;
score = '33';
score = true;

type User = {
  name: string;
  id: number;
};

type Admin = {
  username: string;
  id: number;
};

let jose: User | Admin = {
  name: 'jose',
  id: 234,
};

jose = {
  username: 'jjjj',
  id: 444,
};

// function getDbId(id: number | string) {
//     //making some API calls
//     console.log(`DB id is: ${id}`)
// }
getDbId(3);
getDbId('3');

function getDbId(id: number | string) {
  if (typeof id === 'string') {
    id.toLowerCase();
  } 
}

//array

const data: number[] = [1, 2, 3]
const data2: string[] = ["1", "2", "3", "4"]
const data3: (string | number | boolean)[] = [1, 2, 3, "4", true]

let seatAllotment: "aisle" | "middle" | "window"

seatAllotment = "aisle"
// seatAllotment = "crew"