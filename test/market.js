const {expect} = require("chai");
const { ethers } = require("hardhat");
const { isCallTrace } = require("hardhat/internal/hardhat-network/stack-traces/message-trace");

describe("market function",function(){

    it("market place",async function(){
        const[owner,addr1,addr2] = await ethers.getSigners();
       
        const Token20 = await ethers.getContractFactory("token");
        const Token721 = await ethers.getContractFactory("ERC721");
        const market = await ethers.getContractFactory("market");
        console.log("---------1")
        const token20 = await Token20.deploy();
        const token721 = await Token721.deploy();
        const markets = await market.deploy();
        await token20.mint(200);
        markets.erc20addr(token20.address);
        markets.erc721addr(token721.address);
        console.log("erc20:",token20.address);
        console.log("erc721:",token721.address);
        console.log("--------31")
        await token721._mint(addr1.address,1);
        await token721._mint(addr1.address,2);
        console.log("---------2")
        await token721.connect(addr1).approve(markets.address,1);
       console.log("----------------98");
        await token721.connect(addr1).approve(markets.address,2);
        await token20.connect(addr2).approve(markets.address,100);
        await token20.approve(markets.address,100);
        await token20.transfer(addr2.address,100);
        console.log("---------4")
        await markets.connect(addr1).seller(1,10);
        
        await markets.connect(addr1).seller(2,10);
        console.log("zz");
        await markets.connect(addr2).buyer(1);
        await markets.buyer(2);
        console.log("---------5")
        expect(await token20.balance(owner.address)) .to.equal(90);
        expect(await token20.balance(addr1.address)) .to.equal(20);
        expect(await token20.balance(addr2.address)) .to.equal(90);
        expect(await token721.balanceOf(owner.address)) .to.equal(1);
        expect(await token721.balanceOf(addr2.address)) .to.equal(1);




        
    })




})
