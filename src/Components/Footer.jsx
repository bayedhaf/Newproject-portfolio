// import React from 'react';
 import './Footer.css'; // Assuming you have a separate CSS file for styling

const Footer = () => {
  return (
    <footer className="footer">
      <h1>Contact Information</h1>

     <div className="footer-section">
        <div className="footer-card">
          <h6>Telegram</h6>
          <a className="link" href="https://t.me/bayedhaf">
          <p>Telegram</p>
          </a>
          <h6>Email address</h6>
          <a class="link" href="mailto:bayedhaf2023@gmail.com">bayedhaf2023@gmail.com</a>
        </div>
        <div className="footer-card">
          <h6>FaceBook</h6>
          <a className="link" href="https://www.facebook.com/bayisabalcha1665">
            <p>Facebook</p>
          </a>
          <h6>Certificate Udacity</h6>
          <a class="lnk"  href="https://www.udacity.com/certificate/e/862c40a6-bcb3-11ef-be96-b31889be8afe" target="_blank">Certificate Link</a>
          
        </div>
        <div className="footer-card">
          <h6>LinkedIn</h6>
          <a className="link" href="https://et.linkedin.com/in/bayisa-balcha-52b12a334">
            <p>Linkedln</p>
          </a>
          <h6>Github</h6>
          <a class="lnk" href="https://github.com/bayedhaf" target="_blank">GitHub Profile</a>
        </div>
      </div>
      

      <div className="footer-section">
        <div className="footer-card">
          <p>All Copy Right is reserved</p>
        </div>
        <div className="footer-card">
        <h6>Phone No:</h6>
                    <ul>
                        <li>📞+251916656489</li>
                        <li>📞+251799468313</li>
                    </ul>

          <h6>@2025 G.C</h6>
        </div>
        <div className="footer-card">
          <p>Company: ASTU (University)</p>
          <p>Bayisa @Software Engineer's</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;