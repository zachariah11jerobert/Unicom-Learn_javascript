const student = {
    name: "Roy",
    dateOfBirth: "1996 September 23",
    placeOfBirth: 'Jaffna'
}



let bioData = "";

student['name'] = 'Ravi';

bioData = "I'm " + student['name'] + ". I was born on " + student['dateOfBirth'] + " at " + student['placeOfBirth'];
console.log(bioData);
bioData = "I'm " + student.name + ". I was born on " + student.dateOfBirth + " at " + student.placeOfBirth;
console.log(bioData);

student.name = 'kumar';

// String interpolation
bioData = `I'm ${student['name']} . I was born on ${student['dateOfBirth']} at ${student['placeOfBirth']}`;
console.log(bioData);
bioData = `I'm ${student.name} . I was born on ${student.dateOfBirth} at ${student.placeOfBirth}`;
console.log(bioData);