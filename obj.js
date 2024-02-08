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
            
// console.log(constructor.fun())





// ====================================================   CONSTRACTOR FUNCTION

    function person (fullNmae, age, activity){
          this.fullNmae = fullNmae;
          this.age = age;
          this.activity = activity;
     }
    const person1 = new person("Mohd. Jahidul Islam", 25, "Full Stack Developer")
    const person2 = new person("Mohammad", 25, "Developer")
    const person3 = new person("Jhon Doe", 27, " JS Developer")

    console.log(person1,person2,person3)