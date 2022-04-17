// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;


interface IBEP20 {
    function name() external view returns (string memory);
    function balanceOf(address account) external view returns (uint256);
}


contract MyContract{

    function getToken(address tokenAddr) internal pure returns(IBEP20) {
        IBEP20 token = IBEP20(tokenAddr);
        return token;
    }

    function getName(address tokenAddr) external view returns(string memory) {
        IBEP20 token = getToken(tokenAddr);
        return token.name();

    } 


    function getBalance(address wallet, address token) public view returns (uint){
        IBEP20 coin = getToken(token);
        uint balance = coin.balanceOf(wallet);
        return balance;
  }
}


// need to figure out a way to return array of structs
