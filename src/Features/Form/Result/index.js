import { ResultText } from "./styled";

const Result = ({ result }) => {
  if (!result || result.amount == null || result.targetAmount == null) return null;

  return (
    <ResultText>
      {result.amount.toFixed(2)} PLN ={" "}
      <strong>
        {result.targetAmount.toFixed(2)} {result.currency}
      </strong>
    </ResultText>
  );
};

export default Result;
