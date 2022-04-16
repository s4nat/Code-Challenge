const { ethers } = require('ethers');


const provider = new ethers.providers.JsonRpcProvider(`https://speedy-nodes-nyc.moralis.io/42fb750bbf659e836918f3fc/bsc/mainnet`)

const ERC20_ABI = [
    "function name() view returns (string)",
    "function symbol() view returns (string)",
    "function balanceOf(address) view returns (uint256)"
]

const holders = ['0x123d475e13aa54a43a7421d94caa4459da021c77', '0x0020c5222a24e4a96b720c06b803fb8d34adc0af', '0xfe808b079187cc460f47374580f5fb47c82b87a5']

const address = '0x250b211EE44459dAd5Cd3bCa803dD6a7EcB5d46C' // SWTH contract
const contract = new ethers.Contract(address, ERC20_ABI, provider)

const main = async () => {
    const name = await contract.name()
    const symbol = await contract.symbol()

    console.log("name: ", name)
    console.log("symbol: ", symbol)
    
    for (let i = 0; i < holders.length; i++){
        const balance = await contract.balanceOf(holders[i])
        console.log(holders[i], ethers.utils.formatEther(balance), symbol)
    }
    
}

main()