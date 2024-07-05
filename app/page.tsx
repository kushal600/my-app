// pages/index.js
// import TradingViewWidget from "../components/TradingViewWidget";

// export default function Home() {
//   return (
//     <div style={{ height: "100vh", width: "100vw" }}>
//       <TradingViewWidget />
//     </div>
//   );
// }
"use client";
import React, { useState } from "react";
import TradingViewWidget from "../components/TradingViewWidget";

const Home = () => {
  const [symbol, setSymbol] = useState("HDFCBANK");

  const handleChangeSymbol = (newSymbol) => {
    setSymbol(newSymbol);
  };

  return (
    <div style={{ height: "100vh", width: "100%" }}>
      <button onClick={() => handleChangeSymbol("RELIANCE")}>
        Change to Reliance
      </button>
      <button onClick={() => handleChangeSymbol("HDFCBANK")}>
        Change to Hdfc Bank
      </button>
      <TradingViewWidget symbol={symbol} />
    </div>
  );
};

export default Home;
