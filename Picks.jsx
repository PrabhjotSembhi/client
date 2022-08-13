import React, { useEffect, useState } from "react";

const Picks = () => {
  const [picksData, setPicksData] = useState([]);

  useEffect(() => {
    GetPicks();
  }, []);

  const GetPicks = () => {
    fetch("http://localhost:46690/picks")
      .then((response) => response.json())
      .then((response) => setPicksData(response))
      .catch((err) => console.error(err));
  };

  return (
    <div className="section">
  <div className="wrapper">

<div className="coins-container">
  {picksData.map((pick) => (
    <div className="coin-box" key={pick._id}>
      <h3>{pick.text}</h3>
    </div>
  ))}
</div>
</div>
    </div>
  
  );
};

export default Picks;
