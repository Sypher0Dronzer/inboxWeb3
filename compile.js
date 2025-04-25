// compile code will go here
import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";
import solc from "solc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Get path to contract
const inboxPath = path.resolve(__dirname, "contracts", "Inbox.sol");
const source = fs.readFileSync(inboxPath, "utf-8");

// Read source code
const input = {
  language: "Solidity",
  sources: {
    "Inbox.sol": {
      content: source,
    },
  },
  settings: {
    outputSelection: {
      "*": {
        "*": ["*"],
      },
    },
  },
};

// Compile the contract
const output = JSON.parse(solc.compile(JSON.stringify(input)));
const bytecode =  output.contracts['Inbox.sol']['Inbox'].evm.bytecode.object
const abi =output.contracts['Inbox.sol']['Inbox'].abi
export {bytecode,abi}
//bytecode --> output.contracts['Inbox.sol'][Inbox].evm.bytecode.object
// abi -->   output.contracts['Inbox.sol'][Inbox].abi













// fs.writeFile(__dirname + "/objTest.txt", JSON.stringify(output), async (err) => {
//   if (err) {
//     console.log(err);
//   }
//   else{
//     console.log('success')
//   }
// });
// console.log(output.contracts["Inbox.sol"]);
//   for (let contractName in output.contracts['Inbox.sol']) {
//     console.log(contractName)
//     console.log('ABI:', output.contracts['Inbox.sol'][contractName].abi)
//     console.log('Bytecode:', output.contracts['Inbox.sol'][contractName].evm.bytecode.object)
//   }


