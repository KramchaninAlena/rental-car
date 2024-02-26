import styled from "styled-components";



export const ImgWrap = styled.div`
 width: 274px;
  height: 268px;
  `;



export const Img = styled.img`
width: 100%;
  height: 268px;
  margin-bottom: 14px;
  object-fit: cover;
  border-radius: 14px;
`;

export const HeartBtn = styled.button`
  position: absolute;
  top: 14px;
  right: 14px;
  background: none;
  border: none;
  cursor: pointer;
  outline: none;
  stroke: rgba(255, 255, 255, 0.8);
`;

export const SvgHeart = styled.svg`
fill: transparent;
&:hover {
  fill: #3470ff;
}
`

export const TitleStyle = styled.h3`
font-weight: 500;
font-size: 16px;
line-height: 150%;
color: #121417;
margin-bottom: 8px;
`;
export const TitleWrap = styled.span`
display: flex;
justify-content: space-between;
margin-top: 18px;
padding-right: 5px;
`
export const ButtonStyles = styled.button`
  display: flex;
  justify-content: center;
  border-radius: 12px;
  padding: 14px 20px;
  width: 136px;
  height: 48px;
  border: 1px solid #3470ff;
  color:black;
  background: transparent;
`;

export const Button = styled.button`
  font-weight: 600;
font-size: 14px;
line-height: 143%;
color: #fff;
border-radius: 12px;
padding: 12px 99px;
width: 274px;
height: 44px;
background: #3470ff;
`;

export const ButtonWrapper = styled.div`
display: flex;
justify-content: center;
margin-top: 40px;
padding-bottom: 40px;
gap: 20px;
`;

export const TextWrapper = styled.ul`
display: flex;
flex-wrap: wrap;
margin-bottom: 28px;
gap: 6px;
`;

export const ItemText = styled.li`
font-weight: 400;
font-size: 12px;
line-height: 150%;
color: rgba(18, 20, 23, 0.5);
`;

export const BtnInfo = styled.button`
display: flex;
  justify-content: center;
  border-radius: 12px;
  padding: 14px 20px;
  width: 100%;
  height: 48px;
  background: #3470ff;
  color: white;
`
export const Text = styled.p`
  font-weight: 400;
font-size: 12px;
line-height: 150%;
color: rgba(18, 20, 23, 0.5);
`;

export const IcoImage = styled.img`
margin-left: 6px;
`;