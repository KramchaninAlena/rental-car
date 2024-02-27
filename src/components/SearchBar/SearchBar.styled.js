import styled from 'styled-components';

export const Form = styled.form`
display: flex;
gap: 18px;
align-items: flex-end;
`;

export const Select = styled.select`
  border-radius: 14px;
  padding: 14px 89px 14px 18px;
  width: 224px;
  height: 48px;
  background: #f7f7fb;
`;

export const Option = styled.option`
font-weight: 500;
font-size: 16px;
line-height: 125%;
color: rgba(18, 20, 23, 0.2);

`;

export const Label = styled.label`
display: flex;
flex-direction: column;
gap: 8px;
  font-weight: 500;
font-size: 14px;
line-height: 129%;
color: #8a8a89;
`;

export const Button = styled.button`
  border-radius: 12px;
padding: 14px 44px;
width: 136px;
height: 48px;
background: #3470ff;
font-weight: 600;
font-size: 14px;
line-height: 143%;
color: #fff;
`;
