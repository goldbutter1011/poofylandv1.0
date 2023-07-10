const KeenSlider = ({ Imageurl, children }) => {
  return (
    <div className="keen-slider__slide">
      <div className="mode">
        <img src={Imageurl} />
        <p>{children}</p>
        <svg
          className="arrow arrow--left "
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z"></path>
        </svg>
        <svg
          className="arrow arrow--right  arrow--disabled"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z"></path>
        </svg>
      </div>
    </div>
  );
};

export default KeenSlider;
