function animalCount(miles){
    const animalDensityFirstTenMiles = 10;
    const animalDensitySecondTenMiles = 50;
    const animalDensityThirdTenMiles = 100;

    if(miles <= 10){
        const count = miles * animalDensityFirstTenMiles;
        return count;
    }
    else if(miles <= 20){
        const firstTen = 10 * animalDensityFirstTenMiles;
        const restMiles = (miles - 10) * animalDensitySecondTenMiles;
        return firstTen + restMiles;
    }
    else{
        const firstTen = 10 * animalDensityFirstTenMiles;
        const secondTen = 10 * animalDensitySecondTenMiles;
        const restMiles = (miles - 20) * animalDensityThirdTenMiles;
        return firstTen + secondTen + restMiles;
    }
}

console.log(animalCount(35));