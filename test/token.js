/*const {expect} = require("chai");
const { ethers } = require("hardhat");
//c onst { ethers } = require("hardhat");
const { isCallTrace } = require("hardhat/internal/hardhat-network/stack-traces/message-trace");

describe("token contract",function(){

    it("mint is working properly",async function(){
        const[owner] = await ethers.getSigners();
       // console.log("signersobjext" ,owner);
        const Token = await ethers.getContractFactory("token");

        const hardhatToken = await Token.deploy();

        const ownerBalance = await hardhatToken.balance(owner.address);
        const supply = await hardhatToken._totalSupply();
        
        await hardhatToken.mint(50);
        expect(await hardhatToken.balance(owner.address)).to.equal(ownerBalance+50);
        expect(await hardhatToken._totalSupply()) .to.equal(supply.add(50));
    })

    it("burn function test",async function(){
        const[owner] = await ethers.getSigners();
        const Token = await ethers.getContractFactory("token");
        const hardhatToken = await Token.deploy();
       // const ownerBalance = await hardhatToken.balance(owner.address).add(100);
         const supply = await hardhatToken._totalSupply();
       //expect(await hardhatToken.balance(owner.address)) .to.equal(ownerBalance.sub(50));
       await hardhatToken.mint(50); 
       await hardhatToken.burn(50);
        expect(await hardhatToken._totalSupply()) .to.equal(supply);
        expect(await hardhatToken.balance(owner.address)) .to.equal(0); 
    })
    it("transfer function",async function(){
        const[owner,addr1,addr2] = await ethers.getSigners();
        const Token = await ethers.getContractFactory("token");
        const hardhatToken = await Token.deploy();
      await hardhatToken.mint(200);
        await hardhatToken.transfer(addr1.address,10);
        await hardhatToken.transfer(addr2.address,10);
        expect(await hardhatToken.balance(addr1.address)).to.equal(10);
        expect(await hardhatToken.balance(addr2.address)).to.equal(10);
        await hardhatToken.connect(addr1).transfer(addr2.address,10);
        expect(await hardhatToken.balance(addr1.address)).to.equal(0);
        expect(await hardhatToken.balance(addr2.address)).to.equal(20);
        await hardhatToken.approve(addr1.address,100);
        await hardhatToken.connect(addr1).transferFrom(owner.address,addr2.address,20);
        expect(await hardhatToken.balance(addr2.address)).to.equal(40);


    })

});*/