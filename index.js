const drivers = ['Jill', 'Sally', 'Frank', 'Lord Garmadon']

const returnFirstTwoDrivers = function(drivers){
    return drivers.slice(0,2)
}

const returnLastTwoDrivers = function(drivers){
    return drivers.slice(2, 4);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(rate){
    return function(fare){
        return rate * fare;
    }
}

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(drivers, chosenDrivers){
    if (chosenDrivers === returnFirstTwoDrivers){
        return returnFirstTwoDrivers(drivers);
    }else if (chosenDrivers === returnLastTwoDrivers){
        return returnLastTwoDrivers(drivers);
    }
}

    
