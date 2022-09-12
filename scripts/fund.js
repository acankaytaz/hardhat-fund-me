const { getNamedAccounts, ethers } = require("hardhat")

//testing this on localhost
async function main() {
    const { deployer } = await getNamedAccounts()
    const fundMe = await ethers.getContract("FundMe", deployer)
    console.log("Funding contract... 3.2.1....?")
    const transactionResponse = await fundMe.fund({
        value: ethers.utils.parseEther("0.2"),
    })
    await transactionResponse.wait(1)
    console.log("Fundeeeeeeddd!")
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error)
        process.exit(1)
    })
