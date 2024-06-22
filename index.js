// Part 1: Refactoring Old Code
const csvData = `ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26`;

// Part 2: Expanding Functionality
function parseCSVTo2DArray(csvString) {
  const rows = csvString.split('\n');
  const twoDimensionalArray = rows.map(row => row.split(','));
  return twoDimensionalArray;
}

const twoDimensionalArray = parseCSVTo2DArray(csvData);
console.log(twoDimensionalArray);

// Part 3: Transforming Data
function transformToObjects(twoDArray) {
  const headers = twoDArray[0].map(header => header.toLowerCase());
  const dataObjects = twoDArray.slice(1).map(row => {
    const obj = {};
    row.forEach((value, index) => {
      obj[headers[index]] = value;
    });
    return obj;
  });
  return dataObjects;
}

const dataObjects = transformToObjects(twoDimensionalArray);
console.log(dataObjects);

// Part 4: Sorting and Manipulating Data
// Remove the last element
dataObjects.pop();

// Insert the new object at index 1
dataObjects.splice(1, 0, { id: "48", name: "Barry", occupation: "Runner", age: "25" });

// Add the new object to the end
dataObjects.push({ id: "7", name: "Bilbo", occupation: "None", age: "111" });

console.log(dataObjects);

// Calculate the average age
const totalAge = dataObjects.reduce((sum, obj) => sum + parseInt(obj.age), 0);
const averageAge = totalAge / dataObjects.length;
console.log(`Average Age: ${averageAge}`);

// Part 5: Full Circle
function transformToCSV(dataObjects) {
  const headers = Object.keys(dataObjects[0]).join(',');
  const rows = dataObjects.map(obj => Object.values(obj).join(','));
  const csvString = [headers, ...rows].join('\n');
  return csvString;
}

const finalCsv = transformToCSV(dataObjects);
console.log(finalCsv);
