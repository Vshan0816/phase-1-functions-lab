function distanceFromHqInBlocks(distance){
    if (distance < 42) {
        return 42 - distance
    } else if (distance > 42){
        return distance - 42
    }

}
function distanceFromHqInFeet(distance){
    return distanceFromHqInBlocks(distance) * 264
}
function distanceTravelledInFeet(num1,num2) {
    const difference = Math.max(num1,num2) - Math.min(num1,num2)
    return difference * 264
}
function calculatesFarePrice(start, destination){
    if (distanceTravelledInFeet(start, destination) < 400) {
        return 0
    } else if (distanceTravelledInFeet(start, destination) > 2500) {
        return 'cannot travel that far'
    } else if (distanceTravelledInFeet(start, destination) > 2000) {
        return 25
    } else if (distanceTravelledInFeet(start, destination) > 400) {
        return (distanceTravelledInFeet(start, destination) -400) *.02
    }
}