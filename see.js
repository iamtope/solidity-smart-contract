
// check the balance on an account using web3;
const  Web3 = require('web3'); // 1.0.0-beta.55

async function go() {
    const web3 = new Web3(process.env.GETH_IPC);
    let contractABI = [
        {
          constant: true,
          inputs: [],
          name: "name",
          outputs: [{ name: "", type: "string" }],
          payable: false,
          stateMutability: "view",
          type: "function",
        },
        {
          constant: false,
          inputs: [
            { name: "_spender", type: "address" },
            { name: "_value", type: "uint256" },
          ],
          name: "approve",
          outputs: [{ name: "success", type: "bool" }],
          payable: false,
          stateMutability: "nonpayable",
          type: "function",
        }
      ];
    const address = '0xe6EbCCFa08C8F290ec02a51109f9E1A905C68476'; // DAI
    const contract = new web3.eth.Contract(contractABI, address);

    const balanceOfTx = await contract.methods.balanceOf('0xb7514a1d3f024acfb874516219fa6135214329f2').call()
    console.log(balanceOfTx)
    return balanceOfTx

}

go();