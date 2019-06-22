pragma solidity ^0.5.0;

import 'openzeppelin-solidity/contracts/lifecycle/Pausable.sol';
import "openzeppelin-solidity/contracts/ownership/Ownable.sol";

/**
 * The contractName contract does this and that...
 */

contract EthIdentityStore is Ownable, Pausable {
    struct IdentityStore {uint Id; string FN; string LN; string BD; string citizenship; string  CountryOfBirth; bool isSet;}
    uint count =  0;
    mapping  (address => IdentityStore) identityStores ;

    modifier OnlyOwner() {require(identityStores[msg.sender].isSet, ""); _;}
    
    
    function compareStrings (string memory a, string memory b) private view returns (bool){
        /** Compare two strings */
       return keccak256(abi.encode(a)) == keccak256(abi.encode(b));
    }

   function  isSet() public view returns(bool) {
           if (identityStores[msg.sender].isSet) {
               return true;
           } else {
               return false;
           }
   }
    function  myID() public view OnlyOwner returns(uint _IdN , string memory _FN, string memory _LN, string memory _citizenship) {
            /** Get User's ID info */
           _FN = identityStores[msg.sender].FN;
           _LN = identityStores[msg.sender].LN;
           _IdN = identityStores[msg.sender].Id;
           _citizenship = identityStores[msg.sender].citizenship;
           return (_IdN, _FN, _LN, _citizenship);
           
    }

       
    function  myIdentityStore() public view OnlyOwner returns(uint _IdN, string memory _FN, string memory _LN, string memory _BD, string memory _citizenship, string memory  _CountryOfBirth) {
            /** Get User's identityStore  info */
           _IdN = identityStores[msg.sender].Id;
           _FN = identityStores[msg.sender].FN;
           _LN = identityStores[msg.sender].LN;
           _BD = identityStores[msg.sender].BD;
           _citizenship = identityStores[msg.sender].citizenship;
           _CountryOfBirth = identityStores[msg.sender].CountryOfBirth;
           return ( _IdN, _FN, _LN,  _BD, _citizenship, _CountryOfBirth);
           
    }
    
    
    function  change(string memory FN, string memory LN, string memory BD, string memory citizenship, string memory  CountryOfBirth) private  {
        /** main functionn used to make/update identityStore info */
        identityStores[msg.sender].FN = FN;
        identityStores[msg.sender].LN = LN;
        identityStores[msg.sender].BD = BD;
        identityStores[msg.sender].citizenship = citizenship;
        identityStores[msg.sender].CountryOfBirth = CountryOfBirth;
        identityStores[msg.sender].isSet = true;
    }
    
    function enroll(string memory FN, string memory LN, string memory BD, string memory citizenship, string memory  CountryOfBirth) public returns (bool) {
        /** Add user's into to the identityStores mappinng */
        change(FN, LN, BD, citizenship,CountryOfBirth);
        identityStores[msg.sender].Id = count + 1;
        count += 1;
        return identityStores[msg.sender].isSet;
    }
    
    function update(string memory FN, string memory LN, string memory BD, string memory citizenship, string memory  CountryOfBirth) public returns (bool) {
        /** updates user's info */
        change(FN, LN, BD, citizenship,CountryOfBirth);
        return  identityStores[msg.sender].isSet;
    }
    
    function auth(uint Id, string memory FN, string memory LN) public view returns (bool) {
        /** authenticate user and match his info */
        require(compareStrings(identityStores[msg.sender].FN,FN) && compareStrings(identityStores[msg.sender].LN,LN) &&  identityStores[msg.sender].Id == Id, "");
        return true;
    }
}