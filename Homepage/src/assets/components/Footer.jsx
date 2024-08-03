import React from 'react';
import './Footer.css'; 

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-section">
                <ul>
                    <li>On the Menu</li>
                    <li>Pricing</li>
                    <li>Our Vision</li>
                    <li>Market</li>
                    <li>Gift Cards</li>
                    <li>Blog</li>
                    <li>Cookbook</li>
                </ul>
            </div>
            <div className="footer-section">
                <ul>
                    <li>Suppliers</li>
                    <li>Affiliates</li>
                    <li>Supply Chains Act</li>
                    <li>Food Safety</li>
                    <li>Career</li>
                    <li>Press</li>
                    <li>Our Team</li>
                </ul>
            </div>
            <div className="footer-section">
                <ul>
                    <li>Military & Veterans</li>
                    <li>Students</li>
                    <li>Graduates</li>
                    <li>Teachers</li>
                    <li>Seniors (+55)</li>
                    <li>Medical Staff</li>
                    <li>First Responders</li>
                </ul>
            </div>
            <div className="footer-section">
                <h4>Customer Support</h4>
                <ul>
                    <li><a href="help-center">Help Center & FAQ</a></li>
                    <li><a href="mailto:contact@blueapron.com">contact@blueapron.com</a></li>
                    <li>(646) 891-4349</li>
                </ul>
            </div>
            <div className="footer-section">
                <p>© Blue Apron, LLC 2024</p>
                <ul>
                    <li><a href="do-not-sell">Do Not Sell or Share My Info</a></li>
                    <li><a href="california-residents">Notice to California Residents</a></li>
                    <li><a href="ad-preferences">Ad Preferences</a></li>
                    <li><a href="privacy">Privacy</a></li>
                    <li><a href="terms">Terms</a></li>
                </ul>
                <div className="app-links">
                    <img src="https://iconape.com/wp-content/png_logo_vector/app-store-google-play-logo.png" alt="App Store" height="70" width="90"/>
                </div>
            </div>
            <div className="footer-section">
                <p>If you are using a screen reader and are having problems using this website, please call 1-844-462-8299 for assistance.</p>
            </div>
        </footer>
    );
}

export default Footer;