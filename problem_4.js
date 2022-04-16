const { ethers } = require("ethers");

const ADDR = "0x28943c9741484A2B5559bB3aCb801Cb2862683F1";   // your contract address
const ABI = [
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "wallet",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "token",
				"type": "address"
			}
		],
		"name": "getBalance",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "tokenAddr",
				"type": "address"
			}
		],
		"name": "getName",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]    // your contract ABI

const ADDRESS = "0x1BD229b6D2959d879e73541b4f0327B87B00569C"; // some wallet address with token balance
const TOKENS = "0xcCB9C252031f062272a149866899C60dc7388013";    // token contract addresses

const provider = new ethers.providers.JsonRpcProvider(`https://speedy-nodes-nyc.moralis.io/42fb750bbf659e836918f3fc/bsc/testnet`);
const test = async () => {
	const contract = new ethers.Contract(ADDR, ABI, provider);

  const balances = await contract.getName(TOKENS[0]);
	
	return balances;
};

test().then(console.log);