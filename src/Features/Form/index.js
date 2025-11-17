import { useState } from "react";
import Result from "./Result";
import currencies from "./currencies";
import { Clock } from "../Clock";
import {
  FormWrapper,
  FormHeader,
  Fieldset,
  Row,
  LabelText,
  Field,
  SelectField,
  Button,
  Info,
} from "./styled";

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
    <FormWrapper onSubmit={onFormSubmit}>
      <Clock />
      <FormHeader>Przelicznik walut</FormHeader>
      <Fieldset>
        <Row>
          <LabelText>Kwota w zł*:</LabelText>
          <Field
            placeholder="Wpisz kwotę w zł"
            type="number"
            required
            step="0.01"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </Row>
        <Row>
          <LabelText>Waluta:</LabelText>
          <SelectField
            value={currency}
            onChange={({ target }) => setCurrency(target.value)}
          >
            {currencies.map(({ short, name }) => (
              <option key={short} value={short}>
                {name}
              </option>
            ))}
          </SelectField>
        </Row>
        <p>
          <Button>Przelicz</Button>
        </p>
        <Info>
          Kursy pochodzą ze strony nbp.pl z Tabeli nr 187/A/NBP/2024 z dnia 2024-09-25
        </Info>
        <Result result={result} />
      </Fieldset>
    </FormWrapper>
  );
};

export default Form;
