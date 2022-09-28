# Hardhat TypeScript Starter Kit

Includes `typechain`, `dotenv` and my personal `eslint` and `prettier` settings.

### VSCode Solidity

If using VSCode's Solidity plugin, set plugin's solidity version in `.vscode/settings.json` (ideally locally to this repo so different projects can use their own compiler version) with e.g.:

```json
{
	"solidity.compileUsingRemoteVersion": "v0.8.10+commit.fc410830"
}
```

Alternatively use: `solidity.defaultCompiler": "localNodeModule"` and install the relevant version of `solc`, e.g.: `npm i -D solc@0.8.10` (or whichever version you want).
