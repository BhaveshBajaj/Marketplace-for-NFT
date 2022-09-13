// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

// https://github.com/OpenZeppelin/openzeppelin-contracts/blob/v3.0.0/contracts/token/ERC20/IERC20.sol
interface IERC20 {

    
    function totalSupply()  external returns (uint256);

    function transfer(address recipient, uint amount) external returns (bool);
    
    function balance(address owner) external view returns(uint256);
    
    function allowance(address owner, address spender) external view returns (uint);

    function approve(address spender, uint amount) external returns (bool);

    function transferFrom(
        address sender,
        address recipient,
        uint amount
    ) external;
    
    function burn(uint amount) external;
    
    function mint(uint amount) external;

    
}