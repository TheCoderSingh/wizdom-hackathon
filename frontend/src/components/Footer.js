import "../css/footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-items">
        <img src="/assets/head.svg" alt="head" className="footer-icon" />
      </div>
      <div className="footer-item">
        <img src="/assets/search.svg" alt="search" className="footer-icon" />
      </div>
      <div className="footer-item">
        <img
          src="/assets/favorite.svg"
          alt="favorite"
          className="footer-icon"
        />
      </div>
      <div className="footer-item">
        <img src="/assets/mail.svg" alt="mail" className="footer-icon" />
      </div>
      <div className="footer-item">
        <img src="/assets/face.svg" alt="face" className="footer-icon" />
      </div>
    </div>
  );
};

export default Footer;
