const Casino = artifacts.require("Casino");

module.exports = function(deployer) {
  // Arguments: _minimumBet (in wei), _maxAmountOfBets
  deployer.deploy(
    Casino,
    web3.utils.toWei("0.1", "ether"), // minimumBet
    100,                               // maxAmountOfBets
    { gas: 3000000 }
  );
};

