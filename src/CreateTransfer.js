import React, { useState } from "react";
import { toast } from "react-toastify";
import "./CreateTransfer.css";
import ToastContainer from "./ToastContainer";
function CreateTransfer() {
  const [network, setNetwork] = useState(null);

  const handleNetorkChange = (event) => {
    event.preventDefault();
    toast.success(`Connected to ${event.target.value}`);

    setNetwork(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="createTransfer">
      <div className="selectNetwork">
        <h3>Select your Network</h3>
        <select
          className="options"
          value={network}
          onChange={handleNetorkChange}
        >
          <option value="POLYGON">Polygon</option>
          <option value="BSC">BSC</option>
          <option value="RINKEBY">RINKEBY</option>
        </select>
      </div>
      <div className="createTransfer__Transfer">
        {/* <h3>Initiate Transfer</h3> */}

        <form onSubmit={handleSubmit}>
          <div style={{ display: "block" }}>
            <h3> From</h3>
            <select value={network} onChange={handleNetorkChange}>
              <option value="ERC20Abi">ERC20Abi</option>
              <option value="ERC720Abi">ERC720Abi</option>
              <option value="ERC1155Abi">ERC1155Abi</option>
            </select>
          </div>
          <h3>To</h3>

          <input type="text" placeholder="Enter destination Address" />
          <div>
            <button className="createTransfer__Btn">Make Transfer</button>
          </div>
        </form>
      </div>

      <ToastContainer />
    </div>
  );
}

export default CreateTransfer;
