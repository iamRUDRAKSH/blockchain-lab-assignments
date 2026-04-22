# Blockchain Lab Assignments

## Student Details

- Student Name: Rudraksh Charhate
- Roll Number: 123B1B005
- Course Name: Blockchain Technology Laboratory

## Repository Structure

```
blockchain-lab-assignments/
|-- README.md
|-- .env.example
|-- .gitignore
|-- package.json
|-- hardhat.config.js
|-- contracts/
|   |-- Assignment1ProductRegistry.sol
|   |-- Assignment4CIDRegistry.sol
|   |-- Assignment5SimpleDAO.sol
|-- scripts/
|   |-- deploy-local.js
|-- assignment-1/
|-- assignment-2/
|-- assignment-3/
|-- assignment-4/
|-- assignment-5/
```

## Assignment Overview

- Assignment 1: Smart contract development for a product registry with on-chain ownership transfer.
- Assignment 2: Polygon Amoy deployment of the Assignment 1 contract using Hardhat.
- Assignment 3: Web interface that connects MetaMask and sends transactions to the contract.
- Assignment 4: IPFS integration for decentralized file upload and CID storage on-chain.
- Assignment 5: Basic DAO contract with proposal creation, voting, and execution workflow.

## Tech Stack

- Solidity
- Hardhat
- ethers.js
- MetaMask
- Polygon Amoy testnet
- IPFS (Pinata API example)
- HTML/CSS/JavaScript frontend

## Prerequisites

- Node.js 18+
- MetaMask extension
- Test MATIC on Polygon Amoy
- Pinata account (or your preferred IPFS provider)

## Setup

1. Install dependencies:

	```bash
	npm install
	```

2. Create your environment file from template:

	```bash
	copy .env.example .env
	```

3. Fill placeholder values in `.env`:

	- `PRIVATE_KEY`
	- `POLYGON_AMOY_RPC_URL`
	- `PINATA_JWT`
	- `ASSIGNMENT_2_CONTRACT_ADDRESS`
	- `ASSIGNMENT_3_CONTRACT_ADDRESS`
	- `ASSIGNMENT_4_CID_REGISTRY_ADDRESS`

## How To Run Each Assignment

### Assignment 1: Smart Contract Development

1. Compile:

	```bash
	npm run compile
	```

2. Deploy locally (Hardhat network):

	```bash
	npm run deploy:local
	```

3. See full details in `assignment-1/README.md`.

### Assignment 2: Polygon Deployment

1. Ensure `.env` has Polygon RPC and private key.
2. Deploy:

	```bash
	npm run deploy:polygon
	```

3. Copy deployed address to:

	- `assignment-2/README.md`
	- `.env` as `ASSIGNMENT_2_CONTRACT_ADDRESS`

4. See full details in `assignment-2/README.md`.

### Assignment 3: Web Interface + MetaMask

1. Put deployed contract address in `.env` and in `assignment-3/app.js`.
2. Open `assignment-3/index.html` using VS Code Live Server or any static server.
3. Connect MetaMask, then create products and transfer ownership.
4. See full details in `assignment-3/README.md`.

### Assignment 4: IPFS Integration

1. Put `PINATA_JWT` in `.env`.
2. Deploy CID registry contract:

	```bash
	npm run deploy:cid
	```

3. Upload a sample file to IPFS and store CID on-chain:

	```bash
	npm run ipfs:upload -- assignment-4/samples/sample.txt
	```

4. See full details in `assignment-4/README.md`.

### Assignment 5: DAO Smart Contract

1. Deploy DAO contract:

	```bash
	npm run deploy:dao
	```

2. Interact from Hardhat console or write tests/scripts for proposal and voting flow.
3. See full details in `assignment-5/README.md`.

## Notes

- All credentials and keys are intentionally left as placeholders for you to fill.
- Add required screenshots in each assignment's `screenshots/` folder.