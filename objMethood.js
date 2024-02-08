// console.log('objMethood.js')

const person = {
        name : "John Doe",
        job : "Developer",
        salary : 5000,
        activity : ['Mern Stack', 'MongoDB', 'NextJs'],
        dutyTime : function() {
            // console.log(this.name, "go to Office Everyday Morning at 7.00 A.M") 
            return this.name + " go to Office Everyday Morning at 7.00 A.M"
        },
        onActivity : function (majorActivity){
            // return this.dutyTime()
            return `->${this.name}'s Coding about ->${majorActivity} after Finish this, He will start Coding ->${this.activity[2]}`
        },
        cost :  function (OfficeTransportationCost,breakfast) {
            return this.salary = this.salary - OfficeTransportationCost- breakfast
        }
}

// const result = person.dutyTime();
// console.log(result)

// console.log(dutyTime())
// console.log(person.onActivity())

// const onActivityTwo = person.onActivity('Vanila JavaScript')
// console.log(onActivityTwo)

// const familyCost = person.cost(1000)
// console.log(familyCost)

const cost = person.cost(100,15)
console.log(cost)

