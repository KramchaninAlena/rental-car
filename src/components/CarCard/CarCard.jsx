import React from 'react'
import vektor from './vector.svg'
import { Img, ImgWrap, TitleStyle, TitleWrap, Text, Button, TextWrapper, IcoImage } from './CarCard.styled'

export const CarCard = ({car}) => {
    const { img, make, model, year, rentalPrice, address, rentalCompany, type, mileage} = car
  return (
    <div><ImgWrap>
    <Img src={img} alt="car" />
  </ImgWrap>
  <div>
    <TitleWrap>
      <TitleStyle>
        {make} <span style={{ color: '#3470ff' }}>{model}</span>,{' '}
        {year}
      </TitleStyle>
      <TitleStyle>{rentalPrice}</TitleStyle>
    </TitleWrap>
    <TextWrapper>
      <li>
      <Text>{address.split(",").slice(1, 2)} 
      <IcoImage src={vektor}  alt="Logo" />
       </Text>
      </li>
      <li>
      <Text>{address.split(",").slice(2, 3)} <IcoImage src={vektor}  alt="Logo" /></Text>
      </li>
      <li>
        <Text>
        {rentalCompany}
        <IcoImage src={vektor}  alt="Logo" />
        </Text>
      </li>
      <li>
        <Text>
        {type}
        <IcoImage src={vektor}  alt="Logo" />
        </Text>
      </li>
      <li>
        <Text>
        {make}
        <IcoImage src={vektor}  alt="Logo" />
        </Text>
      </li>
      <li>
        <Text>
        {mileage}
        {/* <IcoImage src={vektor}  alt="Logo" /> */}
        </Text>
      </li>
      <li>
      {/* {functionalities.map} */}
        {/* <Text>
          
        {functionalities[0]}
        <IcoImage src={vektor}  alt="Logo" />
        </Text> */}
      </li>
    </TextWrapper>
  </div>
  <Button type='button'>Learn more</Button>
  </div>
  )
}
