const { getNamedAccounts, ethers } = require("hardhat")

async function main() {
    const { deployer } = await getNamedAccounts()
    const fundMe = await ethers.getContract("FundMe", deployer)
    console.log("Fundiing.. 3.2.1...")
    const transactionResponse = await fundMe.withdraw()
    await transactionResponse.wait(1)
    console.log("took ma money baack!")
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error)
        process.exit(1)
    })
