
const sky = Symbol("kailash")

const  username = {
    name : "prakash",
    age : 22,
    Email : "prakash@gmail.com",
    [sky]: "kailash"
}

// console.log(username["name"])



username.test_1 = function(){
    console.log(`my name is ${username.name}`)
}

// console.log(username.test_1())


const test1 ={1:"a", 2:"b"}
const test2 = {3:"c" , 4:"d"}

 const test3 ={...test1 , ...test2}
// const test3 =  Object.assign({}, test1, test2)                                                                                                                                                                                                                                                                                                                                                                                                                         

// console.log(test3)

const user =[
    {
        Email: "pr@gmail.com ",
        gender: "male"
    },
    {
        Email: "pr@gmail.com ",
        gender: "male"
    },
    {
        Email: "pr@gmail.com ",
        gender: "male"
    },
    {
        Email: "pr@gmail.com ",
        gender: "male"
    },
    {
        Email: "pr@gmail.com ",
        gender: "male"
    }
]

//const mmm= user[2].Email

//console.log(mmm)

console.log(Object.keys(user))
console.log(Object.values(user))