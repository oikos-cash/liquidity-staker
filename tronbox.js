const port = process.env.HOST_PORT || 9090;

module.exports = {
  networks: {
    mainnet: {
      // Don't put your private key here:
	    privateKey: process.env.PRIVATE_KEY_MAINNET,
      userFeePercentage: 100,
      feeLimit: 1e8,
      fullHost: "https://api.trongrid.io",
      network_id: "1",
    },
    shasta: {
      privateKey: process.env.PRIVATE_KEY_SHASTA,
      userFeePercentage: 50,
      feeLimit: 1e8,
      fullHost: "https://api.shasta.trongrid.io",
      network_id: "2",
    },
    compilers: {
      solc: {
        version: "0.5.9",
      },
    },
  },
};
