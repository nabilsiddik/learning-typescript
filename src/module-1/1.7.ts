{
    // Spread operator 
    const bros1: string[] = ['Mir', 'Mizan', 'firoz']
    const bros2: string[] = ['tonmoy', 'nahid', 'rahat']

    bros1.push(...bros2)

    const mentors1 = {
        typscript: 'Nabil',
        redux: 'Mir vai',
        dbms: 'Mizan vai'
    }

    const mentors2 = {
        prisma: 'Firoz vai',
        nextjs: 'Tonmoy vai',
        cloud: 'Nahid vai',
    }

    const mentorList = {
        ...mentors1,
        ...mentors2
    }

    // Rest operator
    const greetFriends = (...friends: string[]) => {
        friends.forEach((friend: string) => console.log(`Hi, ${friend}`))
    }
    greetFriends('Abul', 'kabul', 'babul', 'ubul')


    
}