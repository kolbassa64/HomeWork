const hasLicence = true;
const age = 14;
const isDrunk = false;
const canDrive = hasLicence && age >= 18 && !isDrunk;
console.log(`И тут он осознал, ${canDrive? 'было бы славно покататься':'водить автомобиль нельзя!'}`);