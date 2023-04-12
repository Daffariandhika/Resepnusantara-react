import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons"

export default function QouteSection(){
    return (
        <div className="section quote">
            <p className="qoute-text"><FontAwesomeIcon icon={faQuoteLeft} /> Nasi goreng ternyata sudah lama banget eksistensinya! 
            Nasi goreng ternyata sudah ada semenjak 4000 SM!! Tua banget kan! Dan nasi goreng bisa tersebar 
            ke seluruh dunia berkat para pedagang ala Tiongkok yang memang tersebar keseluruh dunia.</p>
            <p className="qoute-auther">- Seseorang</p>
        </div>
    )
}