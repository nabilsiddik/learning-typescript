{

    // type guard using instance of
    class Animal{
        name: string
        species: string

        constructor(name: string, species: string){
            this.name = name
            this.species = species
        }

        makeSound(){
            console.log(`I am making sound`)
        }
    }


    class Dog extends Animal{
        constructor(name: string, species: string){
            super(name, species)
        }

        makeBark(){
            console.log(`I am barking`)
        }
    }

    class Cat extends Animal{
        constructor(name: string, species: string){
            super(name, species)
        }

        makeMeau(){
            console.log(`I am meauing`)
        }
    }


    // Arektu smart way te handle korar jonno caile amra function babohar korte pari
    const isDog = (animal: Animal): animal is Dog => {
        // applying instanceof
        return animal instanceof Dog
    }

    const isCat= (animal: Animal): animal is Cat => {
         // applying instanceof
        return animal instanceof Cat
    }

    const getAnimal = (animal: Animal) => {
        if(isDog(animal)){
            animal.makeBark()
        }else if(isCat(animal)){
            animal.makeMeau()
        }
    }

    const dog = new Dog('Dog bhai', 'dog')
    const cat = new Cat('Cat bhai', 'cat')

    getAnimal(dog)
    getAnimal(cat)

}