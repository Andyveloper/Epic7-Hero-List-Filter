import { useSelector } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
// import { useState } from 'react';

const IceList = () => {
  const { heroes } = useSelector((state) => state.heroes);
  // const [filtered, setFiltered] = useState(heroes);

  const filteredList = heroes.filter((obj) => obj.attribute === 'ice');

  return (
    <section className="list-container">
      {filteredList ? filteredList.map((obj) => (
        <div
          className={obj.attribute}
          key={nanoid()}
        >
          <img src={obj.icon} alt="hero icon" />
          <h3>
            {' '}
            {obj.name}
          </h3>
          <div>
            <p>{obj.rarity}</p>
            <i className="fa-solid fa-caret-right" />
          </div>
        </div>
      ))
        : null}

    </section>
  );
};

export default IceList;
