const KeenSlider = ({ Imageurl, children }) => {
  return (
    <div className="keen-slider__slide">
      <div className="mode">
        <img src={Imageurl} />
        <p>{children}</p>
      </div>
    </div>
  );
};

export default KeenSlider;
