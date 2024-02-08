// console.log("clone.js")

const person = {
    name : "John Doe",
    age : 22,
    activity : 'Coding'
}

// console.log(person) //Orginal 


// ===========================================================  Shallow Copy

    const clone = {...person};    
    clone.name = "Brendan Eich";
    clone.age = null;
    clone.activity = "JavaScript inventor"
    clone.invented = 1995; // Add new Pro to in Clone Obj
// console.log(clone)

// ===========================================================  Deep Copy
const dataCopyByJSON = JSON.parse(JSON.stringify(person));
dataCopyByJSON.name = "Data Copy By JOSN"
// console.log(dataCopyByJSON)