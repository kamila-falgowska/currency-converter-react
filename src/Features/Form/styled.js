import styled from "styled-components";

export const FormWrapper = styled.form`
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  max-width: 700px;
  width: 100%;
  box-shadow: 0 8px 30px rgb(0 0 0 / 63%);
`;

export const FormHeader = styled.h1`
  font-size: 24px;
  margin-bottom: 20px;
  text-align: center;
  color: hsl(199, 98%, 48%);
`;

export const Fieldset = styled.fieldset`
  border: none;
  padding: 0;
  margin: 0;
`;

export const Row = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 16px;
`;

export const LabelText = styled.label`
  display: inline-block;
  width: 30%;
  margin-bottom: 8px;
`;

export const Field = styled.input`
  width: 100%;
  padding: 8px;
  font-size: 16px;
  margin-bottom: 16px;
  border-radius: 4px;
  border: 1px solid #ccc;
`;

export const SelectField = styled.select`
  width: 100%;
  padding: 8px;
  font-size: 16px;
  margin-bottom: 16px;
  border-radius: 4px;
  border: 1px solid #ccc;
`;

export const Button = styled.button`
  background-color: hsl(199, 98%, 48%);
  color: white;
  padding: 10px 20px;
  font-size: 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  width: 100%;

  &:hover {
    background-color: hsl(199, 98%, 58%);
  }
`;

export const Info = styled.p`
  margin-top: 16px;
  font-size: 12px;
  color: #555;
`;
