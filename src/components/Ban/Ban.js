import "./Ban.css";

const Ban = (props) => {
  const { img, text } = props;

  return (
    <div className="ban-cont">
      <img loading="lazy" src={img} alt="banner" />
      <div className="banner-text">
        <h1 className="animate__animated animate__bounceInDown">{text}</h1>
      </div>
    </div>
  );
};

export default Ban;
