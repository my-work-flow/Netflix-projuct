import React from 'react'
import './footer.css';
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
const Footer = () => {
  return (
    <>
      <div className="footer-outer-container">
        <div className="footer-iner-container">
          <div className="footer-icons">
            <FacebookIcon />
            <InstagramIcon />
            <YouTubeIcon />
          </div>
          <div className="footer-data">
            <div>
              <ul>
                <li>Audio Description</li>
                <li>Inverslet Relation</li>
                <li>local Notice</li>
              </ul>
            </div>
            <div>
              <ul>
                <li>Help center</li>
                <li>Jobs</li>
                <li>Cookie Preference</li>
              </ul>
            </div>
            <div>
              <ul>
                <li>Gift Card</li>
                <li>Terms of Use</li>
                <li>Corporat Information</li>
              </ul>
            </div>

            <div>
              <ul>
                <li>Midea Center</li>
                <li>Privacy</li>
                <li>Contact Us</li>
              </ul>
            </div>
          </div>
          <div className="service-code">
            <p>Service Code</p>
          </div>
          <div className="copy-write">&copy: 1997-2025 Netflix, Inc.</div>
        </div>
      </div>
    </>
  );
}

export default Footer
