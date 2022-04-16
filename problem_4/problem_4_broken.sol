// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;


interface IBEP20 {
    function name() external view returns (string memory);
    function balanceOf(address account) external view returns (uint256);
}


contract MyContract{

    struct Holding {
        address token;
        uint256 balance;
    }

    Holding[] holdings;

    function getToken(address tokenAddr) internal pure returns(IBEP20) {
        IBEP20 token = IBEP20(tokenAddr);
        return token;
    }

    function getName(address tokenAddr) external view returns(string memory) {
        IBEP20 token = getToken(tokenAddr);
        return token.name();

    } 


    function getBalances(address wallet, address[] memory tokenList) public returns(Holding[] memory){

        for(uint i; i < tokenList.length; i++) {
            IBEP20 token = IBEP20(tokenList[i]);
            address tokenAddr = tokenList[i];
            uint tokenBalance = token.balanceOf(wallet);
            Holding memory holding = Holding(tokenAddr, tokenBalance);
            holdings.push(holding);
        }
        return holdings;
    }


}
