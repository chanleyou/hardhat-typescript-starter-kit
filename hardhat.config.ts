import dotenv from 'dotenv';
import { HardhatUserConfig } from 'hardhat/types';
import '@nomiclabs/hardhat-waffle';
import '@typechain/hardhat';

dotenv.config();

const config: HardhatUserConfig = {
	solidity: '0.8.10',
	typechain: {
		outDir: 'typechain',
		target: 'ethers-v5',
		alwaysGenerateOverloads: false,
	},
};

export default config;
