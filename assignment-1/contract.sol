// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

contract ProductRegistry {
    struct Product {
        uint256 id;
        string name;
        string details;
        address owner;
        uint256 createdAt;
    }

    uint256 public productCount;
    mapping(uint256 => Product) public products;

    event ProductRegistered(uint256 indexed id, string name, address indexed owner);
    event OwnershipTransferred(uint256 indexed id, address indexed oldOwner, address indexed newOwner);

    function registerProduct(string memory _name, string memory _details) external {
        require(bytes(_name).length > 0, "Name required");

        productCount += 1;
        products[productCount] = Product({
            id: productCount,
            name: _name,
            details: _details,
            owner: msg.sender,
            createdAt: block.timestamp
        });

        emit ProductRegistered(productCount, _name, msg.sender);
    }

    function transferProductOwnership(uint256 _id, address _newOwner) external {
        Product storage product = products[_id];

        require(product.id != 0, "Product not found");
        require(product.owner == msg.sender, "Not product owner");
        require(_newOwner != address(0), "Invalid owner");

        address oldOwner = product.owner;
        product.owner = _newOwner;

        emit OwnershipTransferred(_id, oldOwner, _newOwner);
    }

    function getProduct(uint256 _id) external view returns (Product memory) {
        require(products[_id].id != 0, "Product not found");
        return products[_id];
    }
}
