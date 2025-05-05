{

    // Speared operator using object and array
    const user = {
        name: 'Nabil',
        age: 20
    }
    
    const user2 = {
        id: 1,
        ...user,
        address: 'Dhaka'
    }
    // console.log(user2)



    // Destructuring
    const {name} = user2
    console.log(name)


    const numbers: number[] = [1, 2, 3, 4]
    const number2: number[] = [0, ...numbers, 5, 6, 7]
    // console.log(number2)


    // Rest operator
    function restFn(...num: number[]): void{
        console.log(num)
    }
    // restFn(1, 2, 3, 4, 5)


 

}