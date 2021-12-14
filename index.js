// Code your solution in this file!
const headquarters = 42;
const feet = 264;

function distanceFromHqInBlocks(num) {
    if (num > 42){
        return num - headquarters;
    } else if (num < 42) {
        return headquarters - num;
    }
}

function distanceFromHqInFeet(Blocks) {
    let Feet = distanceFromHqInBlocks(Blocks)
    return Feet * 264
}

function distanceTravelledInFeet(sLocation, eLocation) {
    if (sLocation < eLocation)
    return (eLocation - sLocation) * 264;
    else
    return (sLocation - eLocation) * 264
}

function calculatesFarePrice(start, destination) {
    let fare = distanceTravelledInFeet (start,destination)
    if (fare >2500) {
        return 'cannot travel that far'
    } if (fare>2000) {
        return 25
    } if (fare <=400) {
        return 0
    } if (fare <=2000) {
        return (fare - 400) * 0.02
    }
}
