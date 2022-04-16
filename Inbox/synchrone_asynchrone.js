// setTimeout(()=>{
//   console.log("I'm here bro ")  
// },2000)

// console.log("Where are you bro ")

// fctReturn2=()=>{
//     return new Promise(()=>{
//         return 2
//     })
// }

// fctReturn2()
//     .then(function(data){
//         if (data==2)  {
//         console.log("yes")
//         }
//     })

async function  getnumber1(){
    return 1
}

async function getnumber2() 
{
    return 2 
}

async function compute(){
    const val1=await getnumber1()
    const val2=await getnumber2()
    return val1+val2
}

compute().then(function(res){
    console.log(res)
    
})