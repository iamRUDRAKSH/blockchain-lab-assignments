const CONTRACT_ADDRESS = "0x56d552b84F9706Fb4395542e776ae9067F544EeF";

const CONTRACT_ABI = [
  "function registerProduct(string _name, string _details)",
  "function transferProductOwnership(uint256 _id, address _newOwner)",
  "function getProduct(uint256 _id) view returns (tuple(uint256 id, string name, string details, address owner, uint256 createdAt))"
];

let provider;
let signer;
let contract;

const connectBtn = document.getElementById("connectBtn");
const createBtn = document.getElementById("createBtn");
const transferBtn = document.getElementById("transferBtn");
const fetchBtn = document.getElementById("fetchBtn");

const walletStatus = document.getElementById("walletStatus");
const txStatus = document.getElementById("txStatus");
const output = document.getElementById("output");

async function connectWallet() {
  if (!window.ethereum) {
    alert("MetaMask not detected. Install MetaMask first.");
    return;
  }

  await window.ethereum.request({ method: "eth_requestAccounts" });
  provider = new ethers.providers.Web3Provider(window.ethereum);
  signer = provider.getSigner();
  contract = new ethers.Contract(CONTRACT_ADDRESS, CONTRACT_ABI, signer);

  const address = await signer.getAddress();
  walletStatus.textContent = `Wallet: ${address}`;
}

async function createProduct() {
  try {
    const name = document.getElementById("productName").value.trim();
    const details = document.getElementById("productDetails").value.trim();

    if (!name) {
      alert("Product name is required.");
      return;
    }

    txStatus.textContent = "Submitting create product transaction...";
    const tx = await contract.registerProduct(name, details);
    await tx.wait();

    txStatus.textContent = `Create product success. Tx Hash: ${tx.hash}`;
  } catch (error) {
    txStatus.textContent = `Create product failed: ${error.message}`;
  }
}

async function transferOwnership() {
  try {
    const productId = document.getElementById("productId").value;
    const newOwner = document.getElementById("newOwner").value.trim();

    txStatus.textContent = "Submitting transfer transaction...";
    const tx = await contract.transferProductOwnership(productId, newOwner);
    await tx.wait();

    txStatus.textContent = `Transfer success. Tx Hash: ${tx.hash}`;
  } catch (error) {
    txStatus.textContent = `Transfer failed: ${error.message}`;
  }
}

async function fetchProduct() {
  try {
    const productId = document.getElementById("fetchId").value;
    const product = await contract.getProduct(productId);

    const normalized = {
      id: product.id.toString(),
      name: product.name,
      details: product.details,
      owner: product.owner,
      createdAt: product.createdAt.toString()
    };

    output.textContent = JSON.stringify(normalized, null, 2);
  } catch (error) {
    output.textContent = `Fetch failed: ${error.message}`;
  }
}

connectBtn.addEventListener("click", connectWallet);
createBtn.addEventListener("click", createProduct);
transferBtn.addEventListener("click", transferOwnership);
fetchBtn.addEventListener("click", fetchProduct);
