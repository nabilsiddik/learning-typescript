{

    // Type guard
    // Type guard using type of operator
    const add = (param1: string|number, param2: string|number):string|number => {
        // type guard applied
        if(typeof param1 === 'number' && typeof param2 === 'number'){
            return param1 + param2
        }
        return param1.toString() + param2.toString() 
    }

    const resutl1 = add(20, '33')
    const resutl2 = add(2, 3)
    console.log(resutl1)
    console.log(resutl2)



    // In Guard
    type NormalUser = {
        name: string 
    }

    type AdminUser = {
        name: string;
        role: 'admin'
    }

    const getUser = (user: NormalUser | AdminUser) => {
        // in guard applying
        if('role' in user){
            console.log(`My name is ${user.name} and my role is ${user.role}`)
        }else{
            console.log(`My name is ${user.name}`)
        }
    }


    const normalUser: NormalUser = {
        name: 'Nabil Siddik'
    }
    const adminUser: AdminUser = {
        name: 'Mr. Admin vai',
        role: 'admin'
    }

    getUser(normalUser)
    getUser(adminUser)



}