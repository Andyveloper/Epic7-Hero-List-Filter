import { useSelector } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
// import { useState } from 'react';

const LightList = () => {
  const { heroes } = useSelector((state) => state.heroes);
  // const [filtered, setFiltered] = useState(heroes);

  const filteredList = heroes.filter((obj) => obj.attribute === 'light');

  return (
    <section className="list-container">
      {filteredList ? filteredList.map((hero) => (
        <div
          className={`list-container__item ${hero.attribute}`}
          key={nanoid()}
        >
          <img src={hero.icon} alt="hero icon" />
          <h3>
            {' '}
            {hero.name}
          </h3>
          <div>
            <p>{`${hero.rarity} Stars Hero`}</p>
          </div>
        </div>
      ))
        : null}

    </section>
  );
};

export default LightList;
