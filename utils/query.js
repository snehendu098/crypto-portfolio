export function query(chainId, hashed, query) {
    const chains = {
        "0x1": "https://etherscan.io",
        "0x89": "https://polygonscan.com",
        "0xa86a": "https://snowtrace.io",
        "0x38": "https://bscscan.com",
        "0x4": "https://rinkeby.etherscan.io",
        "0x13881": "https://mumbai.polygonscan.com",
        "0xa869": "https://testnet.snowtrace.io",
        "0x2a": "https://kovan.etherscan.io",
        "0x5": "https://goerli.etherscan.io",
        "0x3": "https://ropsten.etherscan.io",
        '0x61': "https://testnet.bscscan.com"
    }

    if (query === "token") {
        return `${chains[chainId]}/address/${hashed}`
    }

    return `${chains[chainId]}/tx/${hashed}`
}