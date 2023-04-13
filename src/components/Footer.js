import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebook, faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons"

export default function Footer(){
    return (
        <div className="footer container">
            <div className="footer-section">
                <p className="title">Resep<span>Nusan</span>tara.com</p>
                <p>ResepNusantara adalah website yang menyediakan berbagai macam resep-resep masakan nusantara</p>
                <p>&copy; 2023 | All Rights Reserved</p>
            </div>
            <div className="footer-section">
                <p className="title">Contact Us</p>
                <p>resepnusantara@gmail.com</p>
                <p>0000 0000 0000 </p>
                <p>Jakarta, Indonesia</p>
            </div>
            <div className="footer-section">
                <p className="title">Socials</p>
                <div className="social">
                    <FontAwesomeIcon icon={faFacebook} />
                    <p>Facebook</p>
                    <FontAwesomeIcon icon={faTwitter} />
                    <p>Twitter</p>
                    <FontAwesomeIcon icon={faInstagram} />
                    <p>Instagram</p>
                </div>
            </div>
        </div>
    )
}