import styled, { css } from 'styled-components';

export const CardWrapper = styled.div`
  ${() => css`
    display: flex;
    overflow: hidden;
    padding: 32px;
    margin: 48px auto 0;
    width: 600px;
    font-family: Quicksand, arial, sans-serif;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.05), 0 0px 40px rgba(0, 0, 0, 0.08);
    border-radius: 5px;
  `}
`;

export const CardHeader = styled.header`
  padding-top: 32px;
  padding-bottom: 32px;
`;

export const CardHeading = styled.h1`
  font-size: 24px;
  font-weight: bold;
  text-align: center;
`;

export const CardBody = styled.div`
  display: flex;
  padding-right: 32px;
  padding-left: 32px;
`;
