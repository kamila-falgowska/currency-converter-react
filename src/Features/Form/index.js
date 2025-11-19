import { useState } from "react";
import Result from "./Result";
import { Clock } from "../Clock";
import { useRates } from "../../Data/useRates";
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

  const ratesData = useRates();

  const calculateResult = () => {
    if (!ratesData.data) return null;
    const rate = ratesData.data[currency];
    if (!rate) return null;

    return {
      amount: Number(amount),
      targetAmount: Number(amount) * rate,
      currency,
    };
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    if (!amount || isNaN(amount) || amount <= 0) {
      alert("Podaj poprawną kwotę większą od zera!");
      return;
    }
    setResult(calculateResult());
  };

  return (
    <FormWrapper onSubmit={onFormSubmit}>
      <Clock />
      <FormHeader>Przelicznik walut</FormHeader>

      {ratesData.status === "loading" && <Info>Ładuję kursy walut…</Info>}
      {ratesData.status === "error" && (
        <Info>❌ Coś poszło nie tak. Pokazuję ostatnie zapisane kursy.</Info>
      )}

      {ratesData.status === "success" && (
        <Fieldset>
          <Row>
            <LabelText>Kwota w zł*:</LabelText>
            <Field
              type="number"
              placeholder="Wpisz kwotę w zł"
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
              onChange={(e) => setCurrency(e.target.value)}
            >
              {Object.keys(ratesData.data).map((key) => (
                <option key={key} value={key}>{key}</option>
              ))}
            </SelectField>
          </Row>

          <p>
            <Button>Przelicz</Button>
          </p>

          <Info>
            Aktualne kursy pobrane z currencyapi.com
            <br />
            Data: {ratesData.date}
          </Info>

          {result && <Result result={result} />}
        </Fieldset>
      )}
    </FormWrapper>
  );
};

export default Form;
