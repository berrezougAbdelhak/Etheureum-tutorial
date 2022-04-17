const HDWalletProvider=require('truffle-hd-wallet-provider')
const Web3=rquire('web3')
const {interface,bytecode}=require("./compile")
 
//1 ere argument est notre compte mneumonic

const provider=new HDWalletProvider("december crush human heavy liquid similar wrestle rhythm volcano wife feed cinnamon",
"https://rinkeby.infura.io/v3/ab29d4184d7849dc89633628395187f7"
)

const web3=new Web3(provider)