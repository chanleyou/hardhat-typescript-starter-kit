# Hardhat TypeScript Starter Kit

Includes `typechain`, `dotenv` and my personal `eslint` and `prettier` settings.

### VSCode Solidity

If using VSCode's Solidity plugin, set plugin's solidity version in `.settings.json` (either globally or local to this project) with:

```json
{
	"solidity.compileUsingRemoteVersion": "v0.8.10+commit.fc410830"
}
```

The alternative is: `solidity.defaultCompiler": "localNodeModule"` and installing the relevant version of `solc` using `npm i -D solc@0.8.10` (or whichever version you want).
