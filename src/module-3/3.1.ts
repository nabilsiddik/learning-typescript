{

    // OOP class
    class Animal{
    //    public name: string;
    //    public specias: string;
    //    public sound: string;

       // Parameter properties -> to make parameters type not write again and again of this bellow constructor. (typescript will automaticaly define the varible of class nad automaticaly call this operator inside the constructor if we use public key word inside parameter)

       public constructor(public name: string, public specias: string, public sound: string){
            // this.name = name
            // this.specias = specias
            // this.sound = sound
        }

        public makeSound(){
            console.log(`The ${this.name} says ${this.sound}`)
        }
    }

    const dog = new Animal('German Sheparde Bhai', 'Dog', 'Ghew')
    const cat = new Animal('Parshian Bhai', 'Cat', 'Meaw')
    
    dog.makeSound()
    cat.makeSound()


}