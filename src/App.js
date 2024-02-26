import { GlobalStyle } from 'GlobalStyle';
import { CarList } from 'components/CarList/CarList';
import { Container } from 'components/Container.styled';
import { SearchBar } from 'components/SearchBar/SearchBar';
import { fetchCatalog } from 'components/api';
import { useEffect, useState } from 'react';

export const App = () => {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    async function getCarsList() {
      try {
        const carsList = await fetchCatalog();
        setCars(carsList);
      } catch (error) {}
    }
    getCarsList();
  }, []);

  return (
    <Container>
      <SearchBar />
      <CarList cars={cars} />
      <GlobalStyle/>
    </Container>
    
  );
};
