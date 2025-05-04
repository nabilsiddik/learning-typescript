// Function

// Normal Function
function add(num1 : number, num2 : number = 10): number{
    return num1 + num2
}

add(2, 2)

// Arrow function 
const addArrow = (num1: number, num2: number):number => {
    return num1 + num2
}


// object --> function --> method bole

const poorUser = {
    name: 'nabil',
    balance: 0,
    addBalance(balance: number):string{
        return `my new balance is ${this.balance + balance}`
    }
}


const arr: number[] = [1, 5, 10]
const newArr: number[] = arr.map((item: number): number => item * item)