{


    // type alias for objects

type Student = { // type alias
    name: string;
    age: number;
    contactNo?: string;
    gender: string;
    address: string;
}


const student1: Student = {
    name: 'Nabil Siddik',
    age: 50,
    gender: 'male',
    contactNo: '019',
    address: 'dhaka',
}

const student2: Student = {
    name: 'Najib',
    age: 40,
    gender: 'male',
    address: 'mirpur'
}


// type alias for variable

type UserName = string
type IsAdmin = boolean

const userName: UserName = 'Nabil'
const isAdmin: IsAdmin = true


// type alias for function
type Add = (num1: number, num2: number) => number

const add: Add = (num1, num2) => num1 + num2


}