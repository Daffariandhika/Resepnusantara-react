import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebook, faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons"
import { faEnvelope, faFlag, faPhone } from "@fortawesome/free-solid-svg-icons"

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
                <div className="contact">
                    <a href="" ><FontAwesomeIcon icon={faEnvelope} />
                    <p>resepnusantara@gmail.com</p></a>

                    <a href="" ><FontAwesomeIcon icon={faPhone} />
                    <p>0000 0000 0000</p></a>
                    
                    <FontAwesomeIcon icon={faFlag} />
                    <p>Jakarta, Indonesia</p>
                </div>
            </div>
            <div className="footer-section">
                <p className="title">Socials</p>
                <div className="social">
                    <a href=""><FontAwesomeIcon icon={faFacebook} bounce/>
                    <p>Facebook</p></a>

                    <a href=""><FontAwesomeIcon icon={faTwitter} bounce/>
                    <p>Twitter</p></a>

                    <a href=""><FontAwesomeIcon icon={faInstagram} bounce/>
                    <p>Instagram</p></a>
                </div>
            </div>
        </div>
    )
}