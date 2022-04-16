//On doit penser a acceder au inbox.sol depuis là 
//on doit d'abors charger le contenu de inbox.sol et piour cela on a utilisé un code standard 
const path=require("path") //un path pour acceder depuis la a inbox.sol et path module nous donne un code cross plateforme  

const fs=require('fs') // file systeme module 

const solc=require('solc')

//dirname pour revenir au directory work 
const inboxPath=path.resolve(__dirname,"contracts","Inbox.sol");

const source=fs.readFileSync(inboxPath,"utf8");

//Maintenant on peut créer notre code de compilation 
//console.log(solc.compile(source,1)); //1 pour le nombre de contract 

//On remarque dans la console que console a le premier contract Inbox et apres d'autres contract ce qui veut dire qu'on peut 
//compiler plusieurs contracts 
//Interface dans la console est ABI qui est l'interface entre JS et eth network
//Abi interface contient juste les fonctions qui peuvent etre exécutés 


// Maintenant pour que les autres fichiers peuvent travailler avec ce code on va l'exporter avec 
//module.exports= solc.compile(source,1); comme 
//mais vu que notre module a une seule contract on va retourner juste des details sur notre contract 
//On va retourner contract avec les propriétées bytecode et inetrface  de inbox 

module.exports= solc.compile(source,1).contracts[":Inbox"];

