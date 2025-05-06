{
    // Static
    class Counter {
        // Static variable
        static count: number = 0

        increment(){
            return Counter.count += 1
        }

        decrement(){
            return Counter.count -= 1
        }

        // Static method
        static incrementByFive(){
            return Counter.count += 5
        }
    }

    const instance1 = new Counter()
    const instance2 = new Counter()

    console.log(instance1.increment())
    console.log(instance1.increment())
    console.log(instance1.increment())

    // Starting from the latest counter value instead of allocating seperate memory for each instance (because of using the static keyword)
    console.log(instance2.increment()) 
    console.log(instance2.increment()) 

    console.log(Counter.incrementByFive())


}