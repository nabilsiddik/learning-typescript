{

    // Type alias or informaly bola jay nickname
    // Union
    type TNickname = 'Mushkil Asan' | 'Ural Ponkhi'
    const bondhue: TNickname = 'Ural Ponkhi'


    // Intersection
    type A = {bondhu: 'Upokari'}
    type B = {sotru: number}

    type AB = A & B

    const robot: AB = {
        bondhu: 'Upokari',
        sotru: 2
    }


    // Ternary
    const age = 15
    const status = age >= 18 ? 'vote dite parbe' : 'Vote dite parba na'
    console.log(status)

    type VoterType = typeof age extends number? number : string


    // optional chaining
    interface Iuser {
        name: string;
        age: number;
        address: {
            country: string;
             city: 'Mirpur'
        };
    }

    // type User = {
    //     name: string;
    //     age: number;
    //     address: {
    //         country: string;
    //         city: 'Mirpur'
    //     };
    // }


    const user: Iuser = {
        name: 'nabil',
        age: 45,
        address: {
            country: 'BD',
            city: 'Mirpur'
        }
    }

    console.log(user?.address?.city)

}