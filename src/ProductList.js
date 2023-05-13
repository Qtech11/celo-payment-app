import React from "react";
import Web3 from "web3";
import { useNavigate } from "react-router-dom";

const ProductList = () => {
  const products = [
    {
      name: "Product 1",
      price: "1",
      imageUrl: "https://via.placeholder.com/150",
    },
    {
      name: "Product 2",
      price: "2",
      imageUrl: "https://via.placeholder.com/150",
    },
    {
      name: "Product 3",
      price: "3",
      imageUrl: "https://via.placeholder.com/150",
    },
  ];
  const navigate = useNavigate();

  const handlePayment = async (product) => {
    const web3 = new Web3(window.ethereum);
    // await window.ethereum.enable();
    const accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    });
    const account = accounts[0];

    const transactionParameters = {
      to: "0x7b7aeb7e1a298e5829144fc89e985a06f1b14059", // Replace with the recipient's address
      from: account,
      value: web3.utils.toHex(web3.utils.toWei(product.price, "ether")), // Replace with the payment amount
      //   gas: "0x2710",
      chainId: "0xAF", // Alfajores Chain ID
    };

    web3.eth.sendTransaction(transactionParameters, (err, transactionHash) => {
      if (!err) {
        console.log(transactionHash);
        navigate("/payment-success"); // Redirects to the success page
      }
    });
  };

  return (
    <div>
      {products.map((product, index) => (
        <div key={index}>
          <h2>{product.name}</h2>
          <img src={product.imageUrl} alt={product.name} />
          <p>Price: {product.price} Celo</p>
          <button onClick={() => handlePayment(product)}>Pay</button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
