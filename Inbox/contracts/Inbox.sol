pragma solidity ^0.4.26;

contract Inbox{
    string public message;

    function Inbox(string initialMessage) public {
        message=initialMessage;
    }

    function setMessage (string newMsg) public {
        message=newMsg;
       
    }

    function   doMath(int a,int b){
        a+b;
        a*b;
        a-b;
        a==0;
    }
  
}