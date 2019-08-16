import React from "react";
import Web3 from "web3";
import Web3Connect from "web3connect";

import logo from "./logo.svg";

import "./App.css";

const web3Connect = new Web3Connect.Core({
  providerOptions: {
    portis: {
      id: process.env.REACT_APP_PORTIS_KEY, // required
      network: "rinkeby", // optional
    },
    fortmatic: {
      key: process.env.REACT_APP_FORTMATIC_KEY, // required
      network: "rinkeby", // optional
    },
  },
});

// subscribe to connect
web3Connect.on("connect", async (provider) => {
  const web3 = new Web3(provider); // add provider to web3
  console.log(await web3.eth.net.getNetworkType());
});

// subscribe to close
web3Connect.on("close", () => {
  console.log("Web3Connect Modal Closed"); // modal has closed
});

function toggleModal() {
  web3Connect.toggleModal(); // open modal on button click
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <div
          className="App-link"
          onClick={() => toggleModal()}
          onKeyDown={() => toggleModal()}
          role="button"
          tabIndex={0}
        >
          Open Web3Connect
        </div>
      </header>
    </div>
  );
}

export default App;
