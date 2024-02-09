// console.log('lead.js')

const product =  {

        brand  : "Apple",
        name : "iPhone 15 pro Max++ ",
        storage : "1TB",
        ram : "8BG",
        color : "white",
        price : 1399
}

const keys  =Object.keys(product)
// console.log(keys)

const valus = Object.values(product);
// console.log(valus)

const objVal = Object.entries(product) // Print => Multi Dimensional Array  'With Prop and Value'
// Object.seal(product) // You cant Delete any prop valu of Obj  ##JS Always Run Line by Line
// product.price = 1400,   //seal can Change the Obj value
// Object.freeze(product) 
// delete product.brand
// console.log(product)  



for( const key in product) {
    // console.log(product[key])
}


for(const key in product){
    // console.log(product[key])
}


for(const [key,valu] of Object.entries(product)){
    console.log(key,valu)
}
