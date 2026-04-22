# Assignment 1: Smart Contract Development

## Contract Purpose

This contract tracks products and their ownership on-chain.

Main goals:

- Register a product with name and details.
- Store immutable creation metadata.
- Transfer ownership between Ethereum addresses.

## Functions And Logic

- `registerProduct(string name, string details)`:
  Creates a new product entry with caller as initial owner.

- `transferProductOwnership(uint256 id, address newOwner)`:
  Allows only current owner to transfer ownership.

- `getProduct(uint256 id)`:
  Fetches complete product data.

Events are emitted for registration and ownership transfer for easy tracking in explorer logs.

## Compilation And Deployment Steps

1. Install dependencies from repository root:

   ```bash
   npm install
   ```

2. Compile contracts:

   ```bash
   npm run compile
   ```

3. Start local blockchain:

   ```bash
   npm run node
   ```

4. In another terminal, deploy locally:

   ```bash
   npm run deploy:local
   ```

## Screenshots To Add

Screenshots added in `assignment-1/screenshots/` with names below:

- `compilation-success.png`
- `local-deployment-success.png`
