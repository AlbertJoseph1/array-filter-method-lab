// Code your solution here
function findMatching(drivers, name){
    const matchingDrivers = [];

    for (let i = 0; i < drivers.length; i++) {
        if (drivers[i].tolowercase() === name.tolowercase()) {
            matchingDrivers.push(drivers[i]);
        }
    }

    return matchingDrivers;
}

// Initialization: An empty array matchingDrivers is created to store 
// the names of drivers that match the passed-in name.
// Loop: A for loop iterates over each element in the drivers array.
// Case-Insensitive Comparison: Inside the loop, the current 
// driver’s name (drivers[i]) is converted to lowercase 
// and compared to the lowercase version of the name parameter.
// Adding Matches: If the names match, the original 
// driver's name (not the lowercase version) is added to the matchingDrivers array.
// Return: After the loop completes, the function returns 
// the matchingDrivers array, which contains all matching names. 
// If no matches are found, it returns an empty array.

function fuzzyMatch(drivers, letters) {
    const matchingDrivers =[];

    for (let i = 0; i < drivers.length; i++) {
        if(drivers[i].slice(0, letters.length).tolowercase() === letters.tolowercase()) {
            matchingDrivers.push(drivers[i]);
        }
    }

    return matchingDrivers;
}

// Initialization: An empty array matchingDrivers is created to store names 
// that match the provided beginning letters.
// Loop: A for loop iterates over each name in the drivers array.
// Comparison: For each driver, the function extracts 
// the beginning of the name up to the length of the letters string 
// using slice(0, letters.length). It then compares this substring 
// (converted to lowercase) with the letters (also converted to lowercase).
// Adding Matches: If the beginning of the driver’s name matches 
// the provided letters, the full driver name is added to the matchingDrivers array.
// Return: The function returns the matchingDrivers array. 
// If no matches are found, it returns an empty array.

function matchName(drivers, name) {
    const matchingDrivers = [];

    for (let i = 0; i < drivers.length; i++) {
        if (drivers[i].name.tolowercase() === name.tolowercase()){
            matchingDrivers.push(drivers[i]);
        }
    }

    return matchingDrivers;
}

// Initialization: An empty array matchingDrivers is created to store objects 
// whose name property matches the provided name.
// Loop: A for loop iterates over each object in the drivers array.
// Accessing Data Structure: The function accesses the name 
// property of each driver object and compares it 
// to the name argument after converting both to lowercase for a case-insensitive match.
// Adding Matches: If the name matches, the entire driver object is added to 
// the matchingDrivers array.
// Return: The function returns the matchingDrivers array. 
// If no matches are found, it returns an empty array.