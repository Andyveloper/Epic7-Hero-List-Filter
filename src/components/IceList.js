import { useSelector } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import { ICE } from './Card';

const IceList = () => {
  const { heroes } = useSelector((state) => state.heroes);
  // const [filtered, setFiltered] = useState(heroes);

  const filteredList = heroes.filter((obj) => obj.attribute === 'ice');

  return (
    <section className="list-container">
      {filteredList ? filteredList.map((hero) => (
        <div
          className={`list-container__item ${hero.attribute}`}
          key={nanoid()}
        >
          <img src={hero.icon} alt="hero icon" />
          <div className="list-container__item__info">
            <h3>
              {' '}
              {hero.name}
            </h3>
            <img className="list-container__item__info-icon" src={ICE} alt="element icon" />
          </div>
          <div className="list-container__rarity">
            <p>{`${hero.rarity} Stars Hero`}</p>
          </div>
        </div>
      ))
        : null}

    </section>
  );
};

export default IceList;
