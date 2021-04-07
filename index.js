// Code your solution in this file!
const returnFirstTwoDrivers = function(driversArray){
    let firstTwoDriversArray = driversArray.slice(0, 2);
    return firstTwoDriversArray;
}
const returnLastTwoDrivers = function(driversArray){
    let lastTwoDriversArray = driversArray.slice(-2);
    return lastTwoDriversArray;
}
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
function createFareMultiplier(multiplier){
    return function(num){
        return multiplier * num;
    }
    
    
}
const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);
function selectDifferentDrivers(driversArray, funcFirstOrLast){
    return funcFirstOrLast(driversArray);
}