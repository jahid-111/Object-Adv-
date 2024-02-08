// console.log("obj.js")


// ====================================================   LITERAL OBJECT 
const obj = {
        Prefix : "Mohd",
        First : 'Jahidul',
        Activity : function (){
              return  this.hobby
        },
        Last : 'Islam',
        Age : 25,
        Gender : "Male",
}
obj.hobby = ["Web Developer", "Full-Stack Developer"]

// console.log(obj.Activity())



// ====================================================   OBJECT CONSTRACTOR 
const constructor = new Object();
constructor.name = "Jahid";
constructor.Gender = ['Male', 'Fe-male'];
constructor.fun = function (){
                return  this.Gender[0];
            }

console.log(constructor.fun())