import { nanoid } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Card from '../components/Card';

const Homepage = () => {
  const { elements } = useSelector((state) => state.elements);
  const elementList = Object.values(elements);
  return (
    <>
      <section className="grid-container">
        {elementList ? elementList.map((element, i) => (
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
