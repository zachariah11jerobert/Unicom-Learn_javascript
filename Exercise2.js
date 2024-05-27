const myName = "Ram";
const dob = "1996 September 23";
const placeOfBirth = 'Jaffna';

let bioData = "I'm " + myName + ". I was born on " + dob + " at " + placeOfBirth;
console.log(bioData);

// String interpolation
bioData = `I'm ${myName} . I was born on ${dob} at ${placeOfBirth}`;
console.log(bioData);

