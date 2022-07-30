import PropTypes from 'prop-types';

export const DARK = 'https://img.game8.co/3216715/086cf49a2a7581a7252b14392e376989.png/show';
export const LIGHT = 'https://img.game8.co/3216718/3eb76c98eaea2b7135733e0afa0f6db8.png/show';
export const ICE = 'https://img.game8.co/3216722/a59e14ac179fff8ab3e8a50968732ec0.png/show';
export const FIRE = 'https://img.game8.co/3216719/ae6439723955b90eb47c4c2177898ec6.png/show';
export const WIND = 'https://img.game8.co/3216720/158433589d2408c75881c7d55a6c392b.png/show';

const Card = (props) => {
  const pickElementIcon = (element) => {
    switch (element) {
      case 'wind':
        return WIND;
      case 'ice':
        return ICE;
      case 'fire':
        return FIRE;
      case 'light':
        return LIGHT;
      case 'dark':
        return DARK;
      default:
        return '';
    }
  };

  const { id, name } = props;
  return (
    <>
      <article
        data-testid="card"
        id={id}
        className="grid-container__element"
      >
        <i className="fa-solid fa-caret-right" />
        {id === 0
          ? (
            <img
              src={pickElementIcon(name)}
              className="grid-container__element__icon"
              alt="Element Icon"
              value="wind"
            />
          )
          : null}
        {id === 1
          ? (
            <img
              src={pickElementIcon(name)}
              className="grid-container__element__icon"
              alt="Element Icon"
              value="light"
            />
          )
          : null}
        {id === 2
          ? (
            <img
              src={pickElementIcon(name)}
              className="grid-container__element__icon"
              alt="Element Icon"
              value="dark"
            />
          )
          : null}
        {id === 3
          ? (
            <img
              src={pickElementIcon(name)}
              className="grid-container__element__icon"
              alt="Element Icon"
              value="fire"
            />
          )
          : null}
        {id === 4
          ? (
            <img
              src={pickElementIcon(name)}
              className="grid-container__element__icon"
              alt="Element Icon"
              value="ice"
            />
          )
          : null}

        <div className="grid-container__content">
          <h2 className="grid-container__content__title">{name.toUpperCase()}</h2>
          <p className="grid-container__content__text">Click to see the list</p>
        </div>
      </article>

    </>
  );
};

export default Card;

Card.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
};
