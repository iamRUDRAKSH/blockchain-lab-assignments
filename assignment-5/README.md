# Assignment 5: DAO Smart Contract

## Objective

Implement a basic DAO framework with proposal creation, voting, and execution.

## DAO Smart Contract

- Contract file: `assignment-5/dao.sol`
- Deploy script: `assignment-5/deploy-dao.js`

## Voting Mechanism

- One address can vote once per proposal.
- Vote options:

  - `true` for yes
  - `false` for no

- Votes are accepted only before proposal deadline.
- Proposal result is evaluated at execution:

  - Accepted if yesVotes > noVotes

## Proposal Creation

- Only admin (deployer) can create proposals.
- Required fields:

  - `title`
  - `description`
  - `durationSeconds`

## Workflow Of DAO

1. Admin deploys DAO contract.
2. Admin creates proposal with voting duration.
3. Participants cast yes/no votes.
4. After deadline, admin executes proposal.
5. Execution emits accepted/rejected result event.

## Run Steps

1. Set Polygon values in `.env`.
2. Deploy DAO:

   ```bash
   npm run deploy:dao
   ```

3. Interact via Hardhat console/scripts to create and vote on proposals.

## Required Screenshots

Place in `assignment-5/screenshots/`:

- `proposal-created.png`
- `voting-process.png`
- `execution-result.png`
