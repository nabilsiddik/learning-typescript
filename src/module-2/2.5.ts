{


    // Function with generics
    const createArray = (param: string): string[] => {
        return [param]
    }
    const result1 = createArray('Nabil')


    const createArrayWithGeneric = <T>(param: T) : T[] => {
        return [param]
    }

    const resGen = createArrayWithGeneric<string>('Bangladesh')

    type User = {id: number, name: string}
    const resGenObj = createArrayWithGeneric<User>({
        id: 343,
        name: 'Nabil'
    })


    // create array with tuple
    const createArrayWithTuple = <T, Q>(param1 :T, param2: Q): [T, Q] => {
        return [param1, param2]
    }
    createArrayWithTuple<string, number>('BD', 71)

    interface Country {
        name: string;
        independent: number
    }

    createArrayWithTuple<string, Country>('Country', {
        name: 'Bangladesh',
        independent: 71
    })




    const addCourseToStudent = <T>(student: T) => {
        const course = 'Next Level Web Development'
        return {
            ...student,
            course
        }
    }

    const student1 = addCourseToStudent({name: 'Nabil', email: 'nabil@gmail.com', devType: 'Next level web developer'})

    const student2 = addCourseToStudent({name: 'Siddik', email: 'siddik@gmail.com', hasWatch: 'Apple Watch'})


}