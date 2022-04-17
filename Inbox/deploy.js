const HDWalletProvider=require('truffle-hdwallet-provider')
const Web3=require('web3')
const {interface,bytecode}=require("./compile")
 
//1 ere argument est notre compte mneumonic

const provider=new HDWalletProvider("december crush human heavy liquid similar wrestle rhythm volcano wife feed cinnamon",
"https://rinkeby.infura.io/v3/ab29d4184d7849dc89633628395187f7"
)
 
const web3=new Web3(provider)

//Pour utiliser await on doit la faire dans asychr fonction et c'est pour cela on a fait ça

const deploy=async()=>{
    const accounts=await web3.eth.getAccounts();
    console.log("Attempting to deploy from account ",accounts[0])

    const result=await new web3.eth.Contract(JSON.parse(interface))
    .deploy({data:bytecode,arguments:["Hi There !"]})
    .send({from:accounts[0], gasPrice:'2000000000',gas:'1000000'});

    //On va reotourner l'adresse de notre contract 

    console.log("The contract deployed to : ",result.options.address);



}

deploy();
