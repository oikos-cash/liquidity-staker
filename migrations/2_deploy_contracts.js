var stakingRewards = artifacts.require("./StakingRewards.sol");

module.exports = function(deployer) {

try {
  //deployer.deploy(MyContract, 'MyTRC20', 'MyTRC20', 18, (new BigNumber(10000000).multipliedBy(1e+18)).toString(10), {from: "TRtNpmW7WMgzvAxiudYaF1JnxXxrKfMHM4", value:100000000000});
  deployer.deploy(stakingRewards, '0xef0d962b021cf91efad31284ce23b7aa90ca0e35', '0xE11cDc164a9D8C1aE19D95B0165278690D39d84B','0xc4488fa262236619425e19f6ba4a8639b8ca1973').then(function() {
    
 });

}  catch (err) {
 console.log("error while deploying", err);	
}  
 
};
