import "./style.css";

const Result = ({ result }) => {
  if (!result) {
    return null;
  }

  return (
    <p className="form__result">
      {result.amount.toFixed(2)} PLN ={" "}
      <strong>
        {result.result.toFixed(2)} {result.currency}
      </strong>
    </p>
  );
};

export default Result;
