import { nanoid } from '@reduxjs/toolkit';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Card from '../components/Card';
import Filter from '../components/Filter';

const Homepage = () => {
  const { elements } = useSelector((state) => state.elements);
  const elementList = Object.values(elements);
  const [filterList, setFilterList] = useState(elementList);
  const handleChange = (e) => {
    const { value } = e.target;
    switch (value) {
      case '':
        setFilterList(elementList);
        break;
      case 'wind':
        setFilterList(elementList.filter((element) => element === 'wind'));
        break;
      case 'ice':
        setFilterList(elementList.filter((element) => element === 'ice'));
        break;
      case 'fire':
        setFilterList(elementList.filter((element) => element === 'fire'));
        break;
      case 'light':
        setFilterList(elementList.filter((element) => element === 'light'));
        break;
      case 'dark':
        setFilterList(elementList.filter((element) => element === 'dark'));
        break;
      default:
        setFilterList(elementList);
        break;
    }
  };
  return (
    <>
      <Filter handleChange={handleChange} />
      <section className="grid-container">
        {filterList ? filterList.map((element, i) => (
          <Link
            to={element}
            key={nanoid()}
          >
            <Card
              key={nanoid()}
              id={i}
              name={element}
            />
          </Link>
        )) : <p>Oops! an error occurred, please try again later</p>}
      </section>
    </>
  );
};

export default Homepage;
