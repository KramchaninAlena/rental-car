import { CarCard } from 'components/CarCard/CarCard';
import React from 'react';
import { CatalogItem, CatalogList } from './CarList.styled';

export const CarList = ({ cars }) => {
  return (
    <CatalogList>
      {cars.map(car => (
        <CatalogItem key={car.id}>
          <CarCard car={car} />
        </CatalogItem>
      ))}
    </CatalogList>
  );
};
