# Uniswap V3 Deployer

## Deployment Preparation

### Install Dependencies

```shell
npm i
```

### Parameter Configuration

Modify hardhat.config.ts

```javascript
  // Default network environment
  defaultNetwork: "hardhat",
  networks: {
    "hardhat": {},
    // Custom network configuration
    // Network name
    "polygonMumbai": {
      // rpc endpoint
      url: "https://rpc.ankr.com/polygon_mumbai",
      // Account private key
      accounts: ["<privateKey>"]
    }
  }
```

### Deployment

Execute the following command in the console

```shell
npx hardhat run ./scripts/01_deploy_univ3.ts --network <network name>
```

After running, the program will start deployment and output the deployed contract addresses

```shell
deployed Uniswap_V3 Factory addr:  0x5FbDB2315678afecb367f032d93F642f64180aa3
deployed weth9 addr:  0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512
deployed Uniswap_V3 SwapRouter addr:  0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0
deployed Uniswap_V3 NFTDescriptorlibrary addr:  0xCf7Ed3AccA5a467e9e704C703E8D87F634fB0Fc9
deployed Uniswap_V3 NFTPositionDescriptor addr:  0xDc64a140Aa3E981100a9becA4E685f962f0cF6C9
deployed Uniswap_V3 NFTPositionManager addr:  0x5FC8d32690cc91D4c39d9d3abcBD16989F87570
```

#### Deployment Notes

If you don't need to deploy a new WETH9 contract, comment out lines 38-41 in 01*deploy_univ3.ts and assign the specified contract address to the \_weth9_addr* variable

```typescript
// Fill in existing contract address
var weth9_addr = "<address>";

// const weth9 = await deploy_WETH9(deployer);
// console.log("deployed weth9 addr: ", weth9.address);
// await delay(1500);
// weth9_addr = weth9.address;
```

### Deploy New Liquidity Pool

#### Modify Parameters

Modify the address variables in 02_deploy_pool.ts

```typescript
// Use the Uniswap Factory address deployed above
const univ3_factory_addr = "<uniswap factory address>";

// Order of A and B addresses doesn't matter
const tokenA_addr = "<tokenA address>";
const tokenB_addr = "<tokenB address>";

// fee (500 || 3000 || 10000) only these three values are allowed by default. More fee tiers can be added later through contract interface or by modifying source code
const fee = 500; // 0.05%
```

#### Deployment

Execute the following command in the console

```shell
npx hardhat run ./scripts/02_deploy_pool.ts  --network <network name>
```

The console will return the deployment transaction hash
