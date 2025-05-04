{

    // Destructaring
    // for object
    const user = {
        id: 403,
        name: {
            firstName: 'Md',
            middleName: 'Nabil',
            lastName: 'siddik',
        },
        contactNo: '01957282230',
        address: 'Bangladesh'
    }


    const {contactNo, name: {middleName: midName}} = user  // Name alias



    // for array
    const myFriends = ['nabil', 'kabil', 'habil', 'khabil', 'gabil']
    const [, b, bestFriend, ...rest] = myFriends


}