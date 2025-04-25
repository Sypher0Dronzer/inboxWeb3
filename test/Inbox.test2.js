import {Web3} from 'web3'
import Ganache from 'ganache'
import { abi, bytecode } from '../compile.js';

const web3 = new Web3(
    Ganache.provider({ 
      wallet: { gasLimit: 30_000_000 } 
    })
  );
  
  async function init() {
    const accounts = await web3.eth.getAccounts();
    const contract = new web3.eth.Contract(abi);
    
    const deployment = contract.deploy({
      data: bytecode, // Add 0x prefix
      arguments: ["Hi there"],
    });
  
    const gasEstimate = await deployment.estimateGas();
    const inbox = await deployment.send({
      from: accounts[0],
      gas: gasEstimate, // Use estimated gas
    });
    console.log(inbox.options.address);
  }
init()  