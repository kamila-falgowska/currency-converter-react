import "./style.css";
import Result from "./Result";
import currencies from "./currencies";
import { useState } from "react";

const Form = () => {
  const [amount, setAmount] = useState("");
  const [currency, setCurrency] = useState("EUR");
  const [result, setResult] = useState(null);

  const calculateResult = () => {
    const selectedCurrency = currencies.find(({ short }) => short === currency);
    if (!selectedCurrency) return;

    const resultValue = +amount / selectedCurrency.rate;
    setResult({
      amount: +amount,
      currency,
      result: resultValue,
    });
  };

  const onFormSubmit = (event) => {
    event.preventDefault();

    if (amount <= 0) {
      alert("Podaj kwotę większą od zera!");
      return;
    }

    calculateResult();
  };

  return (
    <form className="form" onSubmit={onFormSubmit}>
      <h1 className="form__header">
        Przelicznik walut
      </h1>
      <fieldset className="form__fieldset">
        <div className="form__row">
          <label className="form__labelText">
            Kwota w zł*:
          </label>
          <input
            placeholder="Wpisz kwotę w zł"
            className="form__field"
            type="number"
            required
            step="0.01"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
        <div className="form__row">
          <label className="form__labelText">
            Waluta:
          </label>
          <select
            className="form__field"
            value={currency}
            onChange={({ target }) => setCurrency(target.value)}
          >
            {currencies.map(({ short, name }) => (
              <option key={short} value={short}>
                {name}
              </option>
            ))}
          </select>
        </div>
        <p>
          <button className="form__button">Przelicz</button>
        </p>
        <p className="form__info">
          Kursy pochodzą ze strony nbp.pl z Tabeli nr 187/A/NBP/2024 z dnia 2024-09-25
        </p>
        <Result result={result} />
      </fieldset>
    </form>
  );
};

export default Form;