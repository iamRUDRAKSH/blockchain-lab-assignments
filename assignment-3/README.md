# Assignment 3: Web Interface + MetaMask

## Objective

Create a frontend that allows users to connect MetaMask and send smart contract transactions.

## How Frontend Connects To Blockchain

- `ethers.js` is loaded via CDN.
- Browser `window.ethereum` (MetaMask provider) is used.
- After wallet connection, contract instance is created with signer:

  - `new ethers.Contract(CONTRACT_ADDRESS, ABI, signer)`

- Signed transactions are sent for:

  - Product creation
  - Ownership transfer

## How MetaMask Is Used

1. User clicks `Connect MetaMask`.
2. MetaMask prompts account authorization.
3. User signs blockchain transactions for each contract method call.
4. Tx hash is displayed after confirmation.

## Run Steps

1. Update contract address in `assignment-3/app.js`:

   - `YOUR_ASSIGNMENT_3_CONTRACT_ADDRESS`

2. Ensure MetaMask is connected to Polygon Amoy and has test POL.
3. Run using static server (example: Live Server in VS Code).
4. Open `assignment-3/index.html` and interact with UI.

## Required Screenshots

Place in `assignment-3/screenshots/`:

- `wallet-connected.png`
- `transaction-executed.png`

## Optional Demo Video

- Add short video in `assignment-3/demo/` (optional but recommended).
