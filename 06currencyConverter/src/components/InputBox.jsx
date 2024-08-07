import React, { useId } from "react";

function InputBox({
  // Props
  label,                  // Text for the label of the input.
  amount,                 // The value for the input box.
  onAmountChange,         // Callback for amount changes.
  onCurrencyChange,  // = {(currency)=>{setAmount(amount)}},       // Callback for currency selection changes.   
  currencyOptions = [],   // List of currency options for the dropdown.
  selectCurrency = "usd", // Default selected currency.
  // selectCurrency,
  amountDisable = false,  // amountDisable and currencyDisable: Booleans to disable input and select elements.
  currencyDisable = false, // Additional CSS classes for styling.
  className = "",
}) {
  // console.log(selectCurrency)
  
  
  // useId Hook: The useId hook generates a unique ID for the input element, which is good for accessibility.
  const amountInputId = useId();

  return (

    <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>

      <div className="w-1/2">

        <label htmlFor={amountInputId} className="text-black/40 mb-2 inline-block" >
          {label}
        </label>

        <input
          id={amountInputId}
          className="outline-none w-full bg-transparent py-1.5"
          type="number"
          placeholder="Amount"
          disabled={amountDisable}
          value={amount}
          onChange={(e) =>
            onAmountChange && onAmountChange(Number(e.target.value))
          }
        />

      </div>

      <div className="w-1/2 flex flex-wrap justify-end text-right">

        <p className="text-black/40 mb-2 w-full">Currency Type</p>

        <select
          className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
          value={selectCurrency}
          onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
          disabled={currencyDisable}
        >
        
          {currencyOptions.map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
          
          {/* Remember the key/index/id in React */}

        </select>

      </div>

    </div>
  );
}

export default InputBox;
