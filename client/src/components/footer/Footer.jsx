import React from "react";
import "./Footer.scss";

function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="top">
          <div className="item">
            <h2>Categories</h2>
            <span>metal works </span>
            <span>wood work </span>
            <span>Writing & Translation</span>
            <span>crafts</span>
            <span>food</span>
           
            
            <span>painting</span>
          </div>
          <div className="item">
            <h2>About</h2>
            <span>Press & News</span>
            <span>Partnerships</span>
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
            
          </div>
          <div className="item">
            <h2>Support</h2>
            <span>Help & Support</span>
            <span>Trust & Safety</span>
            <span>Selling on Artisan Studio</span>
            <span>Buying on Artisan Studio</span>
          </div>
          <div className="item">
            <h2>Community</h2>
            <span>Customer Success Stories</span>
            <span>Community hub</span>
            <span>Forum</span>
          
          </div>
          <div className="item">
            <h2>More From Artisan Studio</h2>
            <span>Artisan Studio Business</span>
            <span>Artisan Studio Pro</span>
            <span>Artisan Studio Logo Maker</span>
            <span>Artisan Studio Guides</span>
           
          </div>
        </div>
        <hr />
        <div className="bottom">
          <div className="left">
            <img className="logo" src="/img/logo_only.png"></img> 
            <span>© Artisan Studio International Ltd. 2023</span>
          </div>
          <div className="right">
            <div className="social">
              <img src="/img/twitter.png" alt="" />
              <img src="/img/facebook.png" alt="" />
              <img src="/img/linkedin.png" alt="" />
              <img src="/img/pinterest.png" alt="" />
              <img src="/img/instagram.png" alt="" />
            </div>
           
            <div className="link">
              <img src="/img/coin.png" alt="" />
              <span>INR</span>
            </div>
            <img src="/img/accessibility.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
