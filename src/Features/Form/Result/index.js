import { ResultText } from "./styled";

const Result = ({ result }) => {
  if (!result) return null;

  return (
    <ResultText>
      {result.amount.toFixed(2)} PLN ={" "}
      <strong>
        {result.result.toFixed(2)} {result.currency}
      </strong>
    </ResultText>
  );
};

export default Result;
