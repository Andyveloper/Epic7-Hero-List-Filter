import { useSelector } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import { DARK } from './Card';

const DarkList = () => {
  const { heroes } = useSelector((state) => state.heroes);
  // const [filtered, setFiltered] = useState(heroes);

  const filteredList = heroes.filter((obj) => obj.attribute === 'dark');

  return (
    <section
      data-testid="list"
      className="list-container"
    >
      {filteredList ? filteredList.map((hero) => (
        <div
          className={`list-container__item ${hero.attribute}`}
          key={nanoid()}
        >
          <img src={hero.icon} alt="hero icon" />
          <div className="list-container__item__info">
            <h3 data-testid="hero-name">
              {' '}
              {hero.name}
            </h3>
            <img className="list-container__item__info-icon" src={DARK} alt="element icon" />
          </div>
          <div className="list-container__rarity">
            <p data-testid="hero-rarity">{`${hero.rarity} Stars Hero`}</p>
          </div>
        </div>
      ))
        : null}

    </section>
  );
};

export default DarkList;
