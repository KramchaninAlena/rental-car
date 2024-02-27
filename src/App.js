import { GlobalStyle } from 'GlobalStyle';
import { CarList } from 'components/CarList/CarList';
import { Container } from 'components/Container.styled';
import { Loader } from 'components/Loader/Loader';
import { SearchBar } from 'components/SearchBar/SearchBar';
import { fetchCatalog } from 'components/api';
import { useEffect, useState } from 'react';

export const App = () => {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [filters, setFilters] = useState({
    mark: 'all',
    price: 'all',
  });

  useEffect(() => {
    async function getCarsList() {
      try {
        setLoading(true);
        setError(false);
        const carsList = await fetchCatalog();
        setCars(carsList);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    getCarsList();
  }, []);

  const changeFilter = (value, key) => {
    setFilters(prevFilters => ({
      ...prevFilters,
      [key]: value,
    }));
  };

  // const visibleCars = cars.filter(car => {
  //   if(filters.mark !== 'all'){
  //     return car.make === filters.mark 
  //   }
     
  //   });
  //   console.log('result:', visibleCars);
 
  return (
    <Container>
      <SearchBar onChange={changeFilter} />
      {loading && <Loader />}
      {error && !loading && <h1>OOPS! There was an Error</h1>}
      <CarList cars={cars} />
      <GlobalStyle />
    </Container>
  );
};
