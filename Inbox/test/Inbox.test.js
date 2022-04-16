//assert est une librairie utilisé pour assert some value is equal to another value 
const assert =require('assert');
//on a commencé a implémenter notre local eth network 
const ganache=require('ganache-cli');

//Web3 is uppercase parceque ici est un constructeur et il est utilisé pour une instance of web3 library 
//par convention quand on utilise a constructor funcion on capitalize it 
const Web3=require("web3");

//Ces deux ligne sont ajouté vu qu'on a su que web3 v1.0.0 beta.26 a qlq problemes de package 
const provider = ganache.provider();
//ARguement depends du network qu'on veut s'attacher 
const web3 = new Web3(provider);




//On impote le bytecode et abi from compile.js

const { interface,bytecode }=require('../compile');

/*-----------------------Pour mocha test-----------------------------*/ 



// //Une classe de teste cours num 042
// class Car {
//     park(){
//         return'stopped'
//     }
//     drive(){
//         return'vroom'
//     }
// }
// //Pour que les it dans describe peuvent y accéder var globale 
// let car; 
// beforeEach(()=>{
//     car=new Car()
//     console.log("salam lebess")
// })

// //On doit faire dbr un describe 
// //Car donné en param n'a rien a voir avec notre class c est juste pour debuguer et on vois qu'elle fct on teste 
// //2 eme argument an arrow function qui va contenir les it statement pour tester la classe car et on aura 1 ou plusieurs it 
// describe('Car',()=>{
//   it("can park",()=>{
//     //On doit s'assurer que string stopped est retourner 
    
//     assert.equal(car.park(),"stopped");
//     //Pour runner notre code on doit ajouter  qlq chose dans package.json test et on ajoute mocha a la place 
//   });
//   it("can drive ",()=>{
//       assert.equal(car.drive(),"vroom")
//   })

// }) ;




/*-----------------------Pour mocha test-----------------------------*/
const INITIAL_MESSAGE="Hi There !"
//On passe a 44 fetching account from ganache 
let accounts;
let inbox;
beforeEach(async()=>{
    //Get a list of all account 

     accounts=await web3.eth.getAccounts() 
     objet=JSON.parse(interface)
    inbox=await new web3.eth.Contract(objet)
    .deploy({data:bytecode,arguments:[INITIAL_MESSAGE]})
    .send({from:accounts[0],gas:'1000000'});
     
    
    inbox.setProvider(provider)
    //Use one of these accounts to deploy the contract 
});

describe('Inbox',()=>{
   it('deploys a contract',()=>{
       assert.ok(inbox.options.address)
   })

   it("has a default message",async ()=>{
     //Pour retourner message 
    const message=await inbox.methods.message().call();
    assert.equal(message,INITIAL_MESSAGE)
})

it("It can change a message",async()=>{
    await inbox.methods.setMessage("Bye !").send({from:accounts[0]})
    const message=await inbox.methods.message().call();
    assert.equal(message,"Bye !")
   })
    
});

