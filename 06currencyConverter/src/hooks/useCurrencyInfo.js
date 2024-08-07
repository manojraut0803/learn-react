import { useState, useEffect } from "react";

function useCurrencyInfo(currency) {
  const [data, setData] = useState({});

  useEffect(() => {
    fetch(
    //   `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`
        `https://v6.exchangerate-api.com/v6/f225dcdfb03cccbd0c9ed5fc/latest/${currency}`
    )
      .then((res) => res.json())
      
    //   .then((res) => setData(res[currency]))
      .then((res) => setData(res.conversion_rates))
    //     console.log(data)


      .catch((err) => {
        console.error("Error fetching the currency data:", err);
      });
  }, [currency]);

  console.log(data);
  return data;
}

export default useCurrencyInfo;



