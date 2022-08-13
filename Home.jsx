import React, { useEffect, useState } from "react";
import "./home.css";

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "1d5d13fe37msh7aa480a387e9fd6p15322djsn622f9bb66665",
    "X-RapidAPI-Host": "coingecko.p.rapidapi.com",
  },
};

const Home = () => {
  const [coinsData, setCoinsData] = useState([]);

  useEffect(() => {
    GetCoinsData();
  }, []);

  const GetCoinsData = () => {
    fetch(
      "https://coingecko.p.rapidapi.com/coins/markets?vs_currency=usd&page=1&per_page=100&order=market_cap_desc",
      options
    )
      .then((response) => response.json())
      .then((response) => setCoinsData(response))
      .catch((err) => console.error(err));
  };

  const pickcoin = async (index) => {
    const data = await fetch("http://localhost:46690/pick/new", {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        text: coinsData[index].name,
      }),
    }).then((res) => res.json());
  };

  return (
    <div className="section">
    <div className="wrapper">
      <h1>COINPICKER</h1>
      <p className="subhead">Pick best to get maximum gains</p>

      <h3>Top 100 coins</h3>

      <div className="coins-container">
        {coinsData.map((coin) => (
          <div className="coin-box" key={coin.id}>
            <img src={coin.image} alt="" />

            <h3>{coin.name}</h3>
            <p className="price">${coin.current_price}</p>
            <button onClick={() => pickcoin(coinsData.indexOf(coin))}>
              Pick me
            </button>
          </div>
        ))}
      </div>

      <div>{console.log(coinsData)}</div>
    </div>
    </div>

  );
};

export default Home;
