{


    // Generic type

    // Generic type for array

    type GenericArray <T> = Array<T>

    // const rollNumber : number[] = [3, 5, 6]
    const rollNumber : GenericArray<number> = [3, 5, 6]
    
    // const mentors: string[] = ['Nabil', 'Siddik', 'Habil', 'Kabil']
    const mentors: GenericArray <string> = ['Nabil', 'Siddik', 'Habil', 'Kabil']

    // const boolArray: boolean[] = [true, false, true]
    const boolArray: GenericArray <boolean> = [true, false, true]


    // Generic type for array of object
    interface User { // for cleaner way seperate the user by type or interface
        name: string,
        age: number
    }
    const user : GenericArray<User>  = [
        {
            name: 'Nabil',
            age: 100
        },
        {
            name: 'Jhankar Mahbub',
            age: 110
        }
    ]



    


    // Generic type for tuple

    type GenericTuple<X, Y> = [X , Y]

    const manush : GenericTuple<string, string> = ['Mr x', 'Mr y']


    const userWithId : GenericTuple<number, {name: string, email: string}> = [123, {name: 'Nabill', email: 'example@gmail.com'}]


}