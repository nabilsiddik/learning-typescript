{

    // Interface
    // using type alias
    type User1 = {
        name: string;
        age: number;
    }

    type UserWithRole1 = User1 & {role: string}
    const user1: UserWithRole1 = {
        name: 'Nabil',
        age: 20,
        role: '402',
    }


    //using interface
    interface User2 {
        name: string;
        age: number;
    }
    interface UserWithRole2 extends User2 {
        role: string
    }
    const user2: UserWithRole2 = {
        name: 'Nabil',
        age: 20,
        role: '402',
    }



    // js --> object, array --> object --> function object
    // array with interface
    type Roll1 = number[]
    const rollNumber1: Roll1 = [1, 2, 3]

    interface Roll2  {
        [index: number] : number
    }

    // function with interface
    type Add = (num1: number, num2: number) => number
    
    interface Add2 {
        (num1: number, num2: number) : number
    }
    const add : Add2 = (num1, num2) => num1 + num2
  
   


}