import { nanoid } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux/es/exports';
import Card from '../components/Card';
import Header from '../components/Header';

const Homepage = () => {
  const { elements } = useSelector((state) => state.elements);
  const elementList = Object.values(elements);
  return (
    <>
      <Header />
      <section className="grid-container">
        {elementList ? elementList.map((element, i) => (
          <Card
            key={nanoid()}
            id={i}
            name={element}
          />
        )) : <p>Oops! an error occurred, please try again later</p>}
      </section>
    </>
  );
};

export default Homepage;
