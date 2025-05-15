import React from "react";
import "./getintouch.css";

const GetInTouch = () => {
  return (
    <section className="getintouch-section">
      <div className="getintouch-container">
        <p className="getintouch-subtitle">
          Let’s build something amazing together!
        </p>
        <h1 className="getintouch-email">
          <a
            href="mailto:htetlinko.dev@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            htetlinko.dev@gmail.com
          </a>
        </h1>
        <div className="getintouch-links">
          <a
            href="https://www.linkedin.com/in/htet-lin-ko-411b02204/"
            target="_blank"
            rel="noopener noreferrer"
            className="getintouch-link"
          >
            LinkedIn
          </a>
          <a
            href="https://www.facebook.com/htetlin.ko.7"
            target="_blank"
            rel="noopener noreferrer"
            className="getintouch-link"
          >
            Facebook
          </a>
          <a
            href="https://github.com/HtetLin27"
            target="_blank"
            rel="noopener noreferrer"
            className="getintouch-link"
          >
            GitHub
          </a>
          {/* <a href="tel:+959254351761" className="getintouch-link">
            Phone
          </a> */}
        </div>
      </div>
      <footer className="getintouch-footer">
        <p>© 2025 Htet Lin Ko</p>
        {/* <div className="footer-contact">
          <span>Yangon, Myanmar</span>
          <span>+959254351761</span>
        </div> */}
      </footer>
    </section>
  );
};

export default GetInTouch;
