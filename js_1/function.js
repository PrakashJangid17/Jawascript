

function test(){
    console.log("p")
    console.log("r")
    console.log("a")
    console.log("k")
    console.log("a")
}

// test()
// console.log(test())

function addTowNumber(number1,number2){
    console.log(number1 * number2)
//  return number1 + number2

}
addTowNumber(2,null)

function userMesseg(username){
if(!username){
    console.log("pilise enter your name ")
  return
}
return `${username}, ok`
}
 console.log(userMesseg("prakash"))


 function addcardprice (...item1){
    return item1

 }

 console.log(addcardprice(200,3000,1000,400))
// ======================object function

 const userprice = {
    name: "prakash",
    price : 199
 }

 function addobject(anyname){
   console.log(  `usernamr is ${anyname.name} price is ${anyname.price}`)
 }

// addobject(userprice)
addobject({
    name :"sem",
    price : 399
})
//--------------------- array function---------------------------


const mayArray =[11,22,33,44,55]

function addArray (anyarray){
 return anyarray [2]
}
console.log(addArray(mayArray))
console.log(addArray([11,22222,33333]))