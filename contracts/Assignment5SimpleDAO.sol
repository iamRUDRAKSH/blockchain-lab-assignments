// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

contract Assignment5SimpleDAO {
    struct Proposal {
        uint256 id;
        string title;
        string description;
        uint256 yesVotes;
        uint256 noVotes;
        uint256 deadline;
        bool executed;
    }

    address public admin;
    uint256 public proposalCount;
    mapping(uint256 => Proposal) public proposals;
    mapping(uint256 => mapping(address => bool)) public hasVoted;

    event ProposalCreated(uint256 indexed id, string title, uint256 deadline);
    event Voted(uint256 indexed id, address indexed voter, bool support);
    event ProposalExecuted(uint256 indexed id, bool accepted);

    modifier onlyAdmin() {
        require(msg.sender == admin, "Only admin");
        _;
    }

    constructor() {
        admin = msg.sender;
    }

    function createProposal(string memory _title, string memory _description, uint256 _durationSeconds) external onlyAdmin {
        require(_durationSeconds > 0, "Invalid duration");

        proposalCount += 1;
        proposals[proposalCount] = Proposal({
            id: proposalCount,
            title: _title,
            description: _description,
            yesVotes: 0,
            noVotes: 0,
            deadline: block.timestamp + _durationSeconds,
            executed: false
        });

        emit ProposalCreated(proposalCount, _title, proposals[proposalCount].deadline);
    }

    function vote(uint256 _proposalId, bool _support) external {
        Proposal storage proposal = proposals[_proposalId];

        require(proposal.id != 0, "Proposal not found");
        require(block.timestamp <= proposal.deadline, "Voting ended");
        require(!hasVoted[_proposalId][msg.sender], "Already voted");

        hasVoted[_proposalId][msg.sender] = true;
        if (_support) {
            proposal.yesVotes += 1;
        } else {
            proposal.noVotes += 1;
        }

        emit Voted(_proposalId, msg.sender, _support);
    }

    function executeProposal(uint256 _proposalId) external onlyAdmin {
        Proposal storage proposal = proposals[_proposalId];

        require(proposal.id != 0, "Proposal not found");
        require(block.timestamp > proposal.deadline, "Voting in progress");
        require(!proposal.executed, "Already executed");

        proposal.executed = true;
        bool accepted = proposal.yesVotes > proposal.noVotes;

        emit ProposalExecuted(_proposalId, accepted);
    }
}
