// import Web3 from "web3";

// const contractAddress = '0xf2c93326c73Bc8eb00BA15a35C601A64bBD8A5E7';
// const abi = [{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"PaytheAmount","outputs":[],"stateMutability":"nonpayable","type":"function"}];




// export const connectMetaMask = async () => {
//     console.log('Requesting account...');

//     if (window.ethereum) {
//         console.log('detected');

//         try {
//             const accounts = await window.ethereum.request({
//                 method: "eth_requestAccounts",
//             });
//             return accounts;
//         }
//         catch (error) {

//         }
//     } else {
//         console.log('Meta Mask not detected!')
//     }
// }



// export const PaywithMetamask = async ( abc ) => {
//     const web3 = window.web3;
//   const webeProvider = new Web3(Web3.givenProvider);
//   const Cartaccounts = await webeProvider.eth.getAccounts();
//  // this.setState({ account: accounts[0] });
//   console.log("Sender :  " + Cartaccounts[0]);
//   const instance = new web3.eth.Contract(
//     abi,
//     contractAddress,
//   );
//   //console.log(id);
//   await instance.methods.
//   PayTheAmount(abc)
//   .send({
//     from: Cartaccounts[0],
 
//   });
// }

