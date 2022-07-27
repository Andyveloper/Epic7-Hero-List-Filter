const Header = () => {
  const randomNumber = Math.floor(Math.random() * 10000);
  return (
    <>
      <nav>
        <div>
          <span>&lsaquo; 2015</span>
          <p>Most Views</p>
          <div>
            <button type="button">Mic Icon</button>
            <button type="button">Settings Icon</button>
          </div>
        </div>
      </nav>
      <header>
        <div>
          <img src="#" alt="Epic Seven Hero" />
          <div>
            <h1>Epic Seven</h1>
            {/* Use epic seven logo here */}
            <p>{`${randomNumber} views`}</p>
          </div>
        </div>
      </header>
    </>
  );
};
export default Header;
