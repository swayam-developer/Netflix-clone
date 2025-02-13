 import "./Footer.css";
 import youtube_icon from "../../assets/youtube_icon.png";
 import instagram_icon from "../../assets/instagram_icon.png";
 import twitter_icon from "../../assets/twitter_icon.png";
 import facebook_icon from "../../assets/facebook_icon.png";

 const Footer = () => {
   return (
     <div className="footer">
       <div className="footer-icons">
         <img src={youtube_icon} alt="" />
         <img src={instagram_icon} alt="" />
         <img src={twitter_icon} alt="" />
         <img src={facebook_icon} alt="" />
       </div>
       <ul>
         <li>Audio Description</li>
         <li>help center</li>
         <li>Gift Cards</li>
         <li>Media Center</li>
         <li>Investor Relations</li>
         <li>Jobs</li>
         <li>Terms of use</li>
         <li>Privacy</li>
         <li>Legal Notice</li>
         <li>Cookie Preferances</li>
         <li>Corporate Information</li>
         <li>contact Us</li>
       </ul>
       <p className="copyright-text">&copy; 1997-2025 NETFLIX, Inc.</p>
     </div>
   );
 };

 export default Footer;

