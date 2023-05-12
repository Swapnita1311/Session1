// console.log("This is first program")

// for(let i=0;i<10;i++)
// {
// console.log(i)
// }
//console.log("Outside the loop")
// console.log(i)

function sayhello()
{
    var x=10
    console.log(x)
    if(true)
    {
        let x=15
        console.log(x) 
    }
    console.log(x)
}


sayhello()
//console.log(x)

const age=30
//age=90
console.log(age)

// const arr=object.freeze[20,30,40]
// //arr.push(80)
// console.log(arr)

var s="ABS"
var t="ABS"
console.log("Hello"+" "+s+" "+t)
console.log(`Hello ${s} ${t}`)

 var odd=[1,32,1]
//  let a1=odd[0]
//  let b1=odd[1]
//  let c1=odd[2]  
//  console.log(a1)
 let [a1,b1,c1] =odd
 console.log(a1,b1,c1)


 //REST operator
 function sum(...x)
 {
    console.log(x)
    var soum = 0;
    x.forEach(function(x)
    {
        soum += x;     
    });
    console.log(soum)
 }
sum(5,6,2,3,4,8,4,2,85,78,5)

//SPREAD OPERATOR

const first=[1,2,3]
const second=[13,23,33]
const combine=[...first,"LOL",...second]
console.log(combine)
