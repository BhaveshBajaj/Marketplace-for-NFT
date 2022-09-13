// SPDX-License-Identifier: MIT
pragma solidity 0.8.17;
contract token  {
    uint public totalSupply = 100;
    mapping(address => uint) public balanceOf;
    mapping(address => mapping(address => uint)) public allowance;
    string public name = "Solidity by Example";
    string public symbol = "SOLBYEX";
    uint8 public decimals = 18;
 function balance(address owner) external view returns(uint256){
     return balanceOf[owner];
 }
    function _totalSupply() external view returns (uint256) {
        return totalSupply;
    }
   
    function transfer(address recipient, uint amount) external returns (bool) {
        balanceOf[msg.sender] -= amount;
        balanceOf[recipient] += amount;
      //  //emit (msg.sender, recipient, amount);
        return true;
    }
    
    function approve(address spender, uint amount) external returns (bool) {
        allowance[msg.sender][spender] = amount;
        ////emit Approval(msg.sender, spender, amount);
        return true;
    }

    function transferFrom(
        address sender,
        address recipient,
        uint amount
    ) external {
        allowance[sender][msg.sender] -= amount;
        balanceOf[sender] -= amount;
        balanceOf[recipient] += amount;
        //emit Transfer(sender, recipient, amount);
        
    }

    function mint(uint amount) external {
        balanceOf[msg.sender] += amount;
        totalSupply += amount;
        //emit Transfer(address(0), msg.sender, amount);
    }

    function burn(uint amount) external {
        balanceOf[msg.sender] -= amount;
        totalSupply -= amount;
        //emit Transfer(msg.sender, address(0), amount);
    }
}
