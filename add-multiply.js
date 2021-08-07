// function add(num1, num2){
//     return num1 + num2;
// }

// function multiply(num1, num2){
//     return num1 * num2;
// }

// const firstTotal = add(63, 67);
// // console.log(firstTotal);

// const secondTotal = add(54, 981);
// // console.log(secondTotal);

// const firstRes = multiply(12, 13);
// console.log(firstRes);

//wood measurements

/*
chairWood = 3cft/chair
tableWood = 10cft/table
bedWood = 50cft/bed
*/

function woodCalculator(chairQuantity, tableQuantity, bedQuantity){
    const perChairWood = 3;
    const perTableWood = 10;
    const perBedWood = 50;

    const chairWoodQuantity = chairQuantity * perChairWood;
    const tableWoodQuantity = tableQuantity * perTableWood;
    const bedWoodQuantity = bedQuantity * perBedWood;

    const totalWood = chairWoodQuantity + tableWoodQuantity + bedWoodQuantity;
    return totalWood;
}

console.log(woodCalculator(1, 1, 1));