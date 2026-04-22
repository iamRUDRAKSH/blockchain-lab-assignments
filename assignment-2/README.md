# Assignment 2: Polygon Deployment

## Objective

Deploy the product registry smart contract to Polygon Amoy testnet for scalable and low-cost transactions.

## Network Details Used

- Network Name: Polygon Amoy Testnet
- Chain ID: 80002
- Currency Symbol: POL
- RPC URL: Add your provider URL in `.env` as `POLYGON_AMOY_RPC_URL`
- Explorer: https://www.oklink.com/amoy

## Deployment Steps

1. Fill `.env` values:

   - `PRIVATE_KEY=YOUR_PRIVATE_KEY`
   - `POLYGON_AMOY_RPC_URL=YOUR_RPC_URL`

2. Compile contracts:

   ```bash
   npm run compile
   ```

3. Deploy to Polygon Amoy:

   ```bash
   npm run deploy:polygon
   ```

4. Copy deployed address and update:

   - `Contract Address: YOUR_DEPLOYED_CONTRACT_ADDRESS`
   - `.env` key `ASSIGNMENT_2_CONTRACT_ADDRESS`

## Deployment Script

- `assignment-2/deploy-polygon.js`

