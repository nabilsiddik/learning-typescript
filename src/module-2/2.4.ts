{


    // Generic using interface
    // Making the interface
    interface Developer<T, X = null> { // Default value of X is Null
        name: string;
        computer: {
            brand: string;
            model: string;
            releaseYear: number
        }
        smartWatch: T,
        bike?: X
    }

    // Making the object for cleaner object
    type EmilabWatch = {
        brand: string;
        model: string;
        display: string
    }

    // Creating object one using alias
    const poorDeveloper : Developer<EmilabWatch> = {
        name: 'Nabil Siddik',
        computer: {
            brand: 'Ryzan',
            model: '4600G',
            releaseYear: 2019
        },
        smartWatch: {
            brand: 'Role x',
            model: 'kw44',
            display: 'Oled'
        }
    }
    
    // Creating object one using interface
    // interface poorDeveloper extends Developer<EmilabWatch>{
    //     name: 'Nabil Siddik',
    //     computer: {
    //         brand: 'Ryzan',
    //         model: '4600G',
    //         releaseYear: 2019
    //     },
    //     smartWatch: {
    //         brand: 'Role x',
    //         model: 'kw44',
    //         display: 'Oled'
    //     }
    // }


    interface AppleWatch { // Creating interface for cleaner code
        brand: string;
        model: string;
        heartTrack: boolean;
        sleepTrack: boolean;
    }

    interface Bike {
        brand: string;
        maileg: string
    }

    const richDeveloper : Developer<AppleWatch, Bike> = {
        name: 'Rich Developer',
        computer: {
            brand: 'Asus',
            model: '5600G',
            releaseYear: 2019
        },
        smartWatch: {
            brand: 'Apple Watch',
            model: 'something',
            heartTrack: true,
            sleepTrack: true,
        },
        bike: {
            brand: 'Hero',
            maileg: '120 CC'
        }
    }



}