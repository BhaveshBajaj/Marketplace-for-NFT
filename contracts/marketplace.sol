// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;
import "./ierc20.sol";
import "./nft.sol";
import "hardhat/console.sol";
import "./token.sol";
import "./nft.sol";

contract market{
  struct nft {
        uint256 prize;
        address owner;
        bool issell;
  }

    
    mapping(uint256 => nft) public selling;

    address ERC20Address;
    address ERC720Address;
  
    function erc20addr(address con) external{
       ERC20Address = con;
    }
 
    function erc721addr(address cont) external{
      ERC720Address = cont;
    }    
    
    function seller(uint256 tokenId,uint256 amount) external{
      require(msg.sender == IERC721(ERC720Address).ownerOf(tokenId),"not owner");
        nft storage mynft = selling[tokenId];
        mynft.prize = amount;
        mynft.owner = msg.sender;
        mynft.issell = true;
    } 
    
    function buyer(uint256 tokenId) external {
      require(selling[tokenId].issell,"Token is not for sell");
       require(IERC20(ERC20Address).balance(msg.sender)>=selling[tokenId].prize,"You are damm broke");
        IERC20(ERC20Address).transferFrom(msg.sender,selling[tokenId].owner,selling[tokenId].prize);
        IERC721(ERC720Address).transferFrom(selling[tokenId].owner,msg.sender,tokenId);
        selling[tokenId].issell = false;    
    }
  
}
