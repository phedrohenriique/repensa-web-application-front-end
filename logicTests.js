function ES6(...args){
    const sum = args.reduce((acumulated, values)=>{ 
        console.log('acumulated : ',acumulated)
        console.log('values : ',values)
        return acumulated + values
    })
    console.log(sum)
}

ES6(1, 2, 3)