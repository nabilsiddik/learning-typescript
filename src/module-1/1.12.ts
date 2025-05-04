{


    const getSpeedInMeter = (value: unknown) => {
        if(typeof value === 'number'){
            const convertedSpeed = (value * 1000) / 3600
            console.log(`The speed is ${convertedSpeed} ms^-1`)
        }else if(typeof value === 'string'){
            const [result, unit] = value.split(' ')
            const convertedSpeed = (parseFloat(result) * 1000) / 3600
            console.log(`The speed is ${convertedSpeed} ms^-1`)
        }else{
            console.log('Wrong Input')
        }
    }
    
    getSpeedInMeter('1000 ms^-1')


// never type
    const throwError = (msg: string):never => {
        throw new Error(msg)
    }
    throwError('Error hoise')

}