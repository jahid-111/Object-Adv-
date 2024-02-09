// console.log('compare.js Object')



    const first =  { a:"Apple", b: "Ball", c: "Cat" }
    const second =  { a:"Apple", c: "Ball", d: "Cat" }
    // console.log(first === second)  //false 

    
        function isSame(one, two){
            const firstKeys = Object.keys(one);
            const secondkeys = Object.keys(two)
                if(firstKeys.length === secondkeys.length){ // length True
                    for(const key of firstKeys){
                        if(one[key] !== two[key]){
                            return false
                        }
                    }
                    return true;
                } 
        }

    const result = isSame(first, second)   
    console.log(result) //false 