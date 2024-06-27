import { createThirdwebClient, defineChain, getContract  } from "thirdweb";

const CLIENT_ID = process.env.NEXT_PUBLIC_CLIENT_ID;

export const client = createThirdwebClient({
    clientId: CLIENT_ID as string,
});

export const chain = defineChain(80002);

const contractAddress = "0x14A363778E1e9285DA1075E26F4b51be997b31C6";
const contractABI = [
    {
      "type": "function",
      "name": "count",
      "inputs": [],
      "outputs": [
        {
          "type": "uint256",
          "name": "",
          "internalType": "uint256"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "decrement",
      "inputs": [],
      "outputs": [],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "getCount",
      "inputs": [],
      "outputs": [
        {
          "type": "uint256",
          "name": "",
          "internalType": "uint256"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "increment",
      "inputs": [],
      "outputs": [],
      "stateMutability": "nonpayable"
    }
  ] as const;

  export const CONTRACT = getContract ({
    client: client,
    chain: chain,
    address: contractAddress,
    abi: contractABI,
  })