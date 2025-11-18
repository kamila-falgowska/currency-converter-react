import styled from "styled-components";

export const ResultText = styled.p`
  margin-top: 16px;
  font-size: 18px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.header};
  text-align: center;
`;
