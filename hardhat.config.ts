import dotenv from 'dotenv';
import { HardhatUserConfig } from 'hardhat/types';
import '@nomiclabs/hardhat-waffle';
import '@typechain/hardhat';
import 'hardhat-gas-reporter';

dotenv.config();

const config: HardhatUserConfig = {
	solidity: '0.8.10',
	typechain: {
		outDir: 'typechain',
		target: 'ethers-v5',
		alwaysGenerateOverloads: false,
	},
	gasReporter: {
		enabled: process.env.REPORT_GAS,
	},
};

export default config;
