{


    // OOP - Inheritance

    // Paretn class
    class Parent{
        name: string;
        age: number;
        address: string;

        constructor(name: string, age: number, address: string){
            this.name = name
            this.age = age
            this.address = address
        }

        getSleep(numberOfHours: number){
            console.log(`${this.name} will sleep for ${numberOfHours} Hours`)
        }
    }

    // Student class
    class Student extends Parent{
        constructor(name: string, age: number, address: string){
            super(name, age, address)
        }

    }

    const student1 = new Student('Nabil Siddik', 23, 'Dhaka Mirpur')
    const student2 = new Student('Kabil Siddik', 23, 'Dhaka Mirpur')
    student1.getSleep(10)
    student2.getSleep(30)



    // Teacher
    class Teacher extends Parent{
        designation: string;

        constructor(name: string, age: number, address: string, designation: string){
            super(name, age, address)
            this.designation = designation
        }

        takeClass(numberOfClass: number){
            console.log(`${this.name} takes ${numberOfClass} class per day and he is a ${this.designation}`)
        }
    }

    const teacher1 = new Teacher('Hannan Master', 45, 'Dhaka', 'Head Master')
    teacher1.takeClass(5)

}