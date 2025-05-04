{


    // Union Type
    // type FrontendDeveloper = 'fakibazDeveloper' | 'JuniorDeveloper'
    // type FullstackDeveloper = 'front end developer' | 'expert developer'

    // type Developer = FrontendDeveloper | FullstackDeveloper

    // const newDeveloper: Developer = 'front end developer'

    // type User = {
    //     name: string
    //     email: string
    //     gender: 'male' | 'female'
    // }

    // const user: User ={
    //     name: 'nabil',
    //     email: 'nabil@gmail.com',
    //     gender: 'male'
    // }



    // Intersection type
    type FrontendDeveloper = {
        skills: string[]
        designation1: 'Frontend Developer'
    }

    type BackendDeveloper = {
        skills: string[]
        designation2: 'Backend Developer'
    }

    type FullstackDeveloper = FrontendDeveloper & BackendDeveloper

    const fullStackDeveloper : FullstackDeveloper = {
        skills: ['HTML', 'CSS', 'Express'],
        designation1: 'Frontend Developer',
        designation2: 'Backend Developer'
    }


}