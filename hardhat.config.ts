import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

const config: HardhatUserConfig = {
  solidity: {
    compilers: [
      {
        version: "0.8.17",
      },
      {
        version: "0.4.22",
      },
    ],
  },

  defaultNetwork: "hardhat",
  networks: {
    local: {
      url: "http://127.0.0.1:8545",
      accounts: [
        "0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80",
      ],
    },
    base_sepolia: {
      url: "https://sepolia.base.org",
      accounts: [
        "a9a4ee7090f2d18cb9567681f9a3f4cbfcac9ff55352862dc57957187d9e466c",
      ],
    },
  },
};

export default config;
