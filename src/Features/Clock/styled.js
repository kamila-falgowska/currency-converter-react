import styled from "styled-components";

export const ClockWrapper = styled.div`
  text-align: right;
  font-family: ${({ theme }) => theme.fonts.mono || 'monospace'};
  color: ${({ theme }) => theme.colors.clockText || theme.colors.textSecondary};
`;
