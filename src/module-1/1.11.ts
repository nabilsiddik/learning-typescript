{


    // Ternary operator || optional chaining || Nullish coalescing operator

    const age: number = 13

    // if(age >= 18){
    //     console.log('Adult')
    // }else{
    //     console.log('Not adult')
    // }

    const isAdult = age >= 18 ? 'Adult' : 'Not Adult'
    console.log(isAdult)


    // Nullish operator
    // Null / undefined ->> decision making
    const isAuthenticated = undefined
    const result1 = isAuthenticated ?? 'Guest'

    console.log(result1)


    type User = {
        name: string
        address : {
            presentAddress: string,
            parmanentAddress?: string
        }
    }

    const user: User = {
        name: 'Nabil',
        address: {
            presentAddress: 'Dhaka Mirpur',
        }
    }

    const parmanentAddress = user?.address?.parmanentAddress ?? 'Khulna'
    console.log(parmanentAddress)




}