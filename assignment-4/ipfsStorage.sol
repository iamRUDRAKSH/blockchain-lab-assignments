// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

contract IPFSStorage {
    struct StoredFile {
        string cid;
        string fileName;
        address uploader;
        uint256 uploadedAt;
    }

    uint256 public fileCount;
    mapping(uint256 => StoredFile) public files;

    event FileStored(uint256 indexed id, string cid, string fileName, address indexed uploader);

    function storeCID(string memory _cid, string memory _fileName) external {
        require(bytes(_cid).length > 0, "CID required");

        fileCount += 1;
        files[fileCount] = StoredFile({
            cid: _cid,
            fileName: _fileName,
            uploader: msg.sender,
            uploadedAt: block.timestamp
        });

        emit FileStored(fileCount, _cid, _fileName, msg.sender);
    }
}
