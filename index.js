const wakeDog = (dogName = 'Byron', dogBreed = 'Poodle') => `Wake ${dogName} the ${dogBreed}`

const leashDog = (dogName = 'Byron', dogBreed = 'Poodle') => `Leash ${dogName} the ${dogBreed}`

const walkToPark = (dogName = 'Byron', dogBreed = 'Poodle') => `Walk to the park with ${dogName} the ${dogBreed}`

const throwFrisbee = (dogName = 'Byron', dogBreed = 'Poodle') => `Throw the frisbee for ${dogName} the ${dogBreed}`

const walkHome = (dogName = 'Byron', dogBreed = 'Poodle') => `Walk home with ${dogName} the ${dogBreed}`

const unleashDog = (dogName = 'Byron', dogBreed = 'Poodle') => `Unleash ${dogName} the ${dogBreed}`

const routine = [wakeDog, leashDog, walkToPark, throwFrisbee, walkHome, unleashDog]
//routine must be declared after all of the functions bc they must be defined first

const exerciseDog = (dogName, dogBreed) => {
    return routine.map(action => action(dogName,dogBreed))
}

//TRADITIONAL FORMAT FUNCTIONS:
// function exerciseDog(dogName, dogBreed) {
//     routine.map(fn => fn(dogName, dogBreed))
// }

// function wakeDog(dogName = 'Byron', dogBreed = 'Poodle') {
//     return `Wake ${dogName} the ${dogBreed}`;
// }

// function leashDog(dogName = 'Byron', dogBreed = 'Poodle') {
//     return `Leash ${dogName} the ${dogBreed}`;
// }

// function walkToPark(dogName = 'Byron', dogBreed = 'Poodle') {
//     return `Walk to the park with ${dogName} the ${dogBreed}`;
// }

// function throwFrisbee(dogName = 'Byron', dogBreed = 'Poodle') {
//     return `Throw the frisbee for ${dogName} the ${dogBreed}`;
// }

// function walkHome(dogName = 'Byron', dogBreed = 'Poodle') {
//     return `Walk home with ${dogName} the ${dogBreed}`;
// }

// function unleashDog(dogName = 'Byron', dogBreed = 'Poodle') {
//     return `Unleash ${dogName} the ${dogBreed}`;
// }

// function exerciseDog(dogName, dogBreed) {
//     return routine.map(action => action(dogName,dogBreed))
// }