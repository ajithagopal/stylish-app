import "./SocialMediaSideBar.css";

const SocialMediaSideBar = () => {
  return (
    <div className="sticky-icon">
      <a
        href="https://www.facebook.com/stylishparkbridalstudio/"
        target="_blank"
        rel="noreferrer"
        className="Facebook"
      >
        <i className="fab fa-facebook-f"> </i>
      </a>
      <a
        href="https://www.instagram.com/stylish_park_bridal_studio/"
        target="_blank"
        rel="noreferrer"
        className="Instagram"
      >
        <i className="fab fa-instagram"></i>
      </a>
      <a
        href="https://api.whatsapp.com/send?phone=7904733762&amp;text=Welcome to Stylish PARK BRIDAL STUDIO"
        target="_blank"
        rel="noreferrer"
        className="Whatsapp"
      >
        <i className="fab fa-whatsapp"> </i>
      </a>
    </div>
  );
};

export default SocialMediaSideBar;
