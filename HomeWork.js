const positionLat = 50;
const positionLong = 2;
const destinationLat = 36;
const destinationLong = 489;
let distanceBetweenPoint = Math.sqrt((Math.pow(positionLat - destinationLat, 2))+(Math.pow(positionLong - destinationLong, 2)));
console.log(distanceBetweenPoint);