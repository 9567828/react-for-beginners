import { useEffect, useState } from "react";

function Coin() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [getCoin, setGetCoin] = useState("");
  const [selCoin, setSelCoin] = useState("0.0");

  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
      });
  }, []); // 아무거도 주시 하지 않는다. [] 빈 어레이

  const onChange = (e) => {
    const coinNumber = parseFloat(e.target.value);
    setGetCoin(coinNumber);
  };

  const onSelect = (e) => {
    const coinNumber = parseFloat(e.target.value);
    setSelCoin(coinNumber);
  };
  return (
    <div>
      <h1>The coins!{loading ? "" : `(${coins.length})`}</h1>
      {loading ? (
        <strong>Loadding.. </strong>
      ) : (
        <div>
          <select onChange={onSelect} value={selCoin}>
            <option value="0.0">선택해주세요</option>
            {coins.map((coin) => (
              <option value={coin.quotes.USD.price} key={coin.id}>
                {coin.name} ({coin.symbol})
              </option>
            ))}
          </select>
          <span>USD {selCoin}</span>
          <hr />
          <label>구매할 BTC </label>
          <input
            id="getCoin"
            onChange={onChange}
            type="number"
            value={getCoin}
          />
          <input id="selCoin" type="number" value={getCoin * selCoin} />
        </div>
      )}
    </div>
  );
}

export default Coin;
