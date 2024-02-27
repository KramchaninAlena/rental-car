import { CarCard } from 'components/CarCard/CarCard';
import React from 'react';
import { CatalogItem, CatalogList, LoadMore } from './CarList.styled';

export const CarList = ({ cars }) => {
  return (
    <CatalogList>
      {cars.map(car => (
        <CatalogItem key={car.id}>
          <CarCard car={car} />
        </CatalogItem>
      ))}
      <LoadMore>Load more</LoadMore>
    </CatalogList>
  );
};
