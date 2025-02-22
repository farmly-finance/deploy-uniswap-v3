import { artifacts, ethers } from "hardhat";
import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import { common } from "./common";
import fs from "fs";

import {
  abi as SWAP_ROUTER_ABI,
  bytecode as SWAP_ROUTER_BYTECODE,
} from "@uniswap/v3-periphery/artifacts/contracts/SwapRouter.sol/SwapRouter.json";

async function main() {
  const DELAY_TIME = 1;
  const [deployer] = await ethers.getSigners();

  const uniV3SwapRouter = await deploy_UniV3SwapRouter(
    deployer,
    "0x4752ba5DBc23f44D87826276BF6Fd6b1C372aD24",
    "0x4200000000000000000000000000000000000006"
  );

  console.log("deployed Uniswap_V3 SwapRouter addr: ", uniV3SwapRouter.address);
  await fs.writeFileSync("deployments/swapRouter.txt", uniV3SwapRouter.address);
  await delay(DELAY_TIME);
}

async function deploy_UniV3SwapRouter(
  deployer: SignerWithAddress,
  factory_addr: string,
  eth9_addr: string
) {
  const univ3SwapRouter_factory = await ethers.getContractFactory(
    SWAP_ROUTER_ABI,
    SWAP_ROUTER_BYTECODE,
    deployer
  );

  return univ3SwapRouter_factory.deploy(factory_addr, eth9_addr);
}

function delay(timeInMillis: number): Promise<void> {
  return new Promise((resolve) => setTimeout(() => resolve(), timeInMillis));
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
