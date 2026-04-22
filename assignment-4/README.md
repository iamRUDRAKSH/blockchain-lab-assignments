# Assignment 4: IPFS Integration

## Objective

Integrate decentralized file storage using IPFS and link file CIDs on blockchain.

## IPFS Service/Library Used

- IPFS service: Pinata
- Upload API: `pinFileToIPFS`
- Node libraries: `axios`, `form-data`, `fs`
- On-chain storage contract: `Assignment4CIDRegistry`

## How Files Are Stored And Retrieved

1. File is uploaded to IPFS through Pinata API.
2. IPFS returns a content identifier (CID).
3. CID is stored on-chain via `storeCID(cid, fileName)`.
4. File can be retrieved from gateway URL:

   - `https://gateway.pinata.cloud/ipfs/<CID>`

## Required Setup

1. Add to `.env`:

   - `PINATA_JWT=YOUR_PINATA_JWT`
   - `PRIVATE_KEY=YOUR_PRIVATE_KEY`
   - `POLYGON_AMOY_RPC_URL=YOUR_RPC`
   - `ASSIGNMENT_4_CID_REGISTRY_ADDRESS=DEPLOYED_CONTRACT_ADDRESS`

2. Deploy CID registry:

   ```bash
   npm run deploy:cid
   ```

3. Upload and store sample file:

   ```bash
   npm run ipfs:upload -- assignment-4/samples/sample.txt
   ```

## IPFS Hash Examples

- Example CID 1: `bafybeigdyrztplaceholdercid001`
- Example CID 2: `bafybeicr5placeholdercid002`

## Required Screenshots

Place in `assignment-4/screenshots/`:

- `ipfs-upload-success.png`
- `cid-gateway-link.png`
- `event-transaction-link.png`
