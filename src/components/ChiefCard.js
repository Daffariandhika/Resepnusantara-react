import { faCutlery } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"


export default function Data({chief}) {
    return (
        <div className="chief-card">
            <img src={chief.img} alt="" />
            <div className="chief-card-info">
                <h3 className="daerah">{chief.daerah}</h3>
                <p className="jumlah_menu">Jumlah Menu: <b>{chief.jumlah_menu}</b></p>
                <p className="hidangan_terenak">Menu Terenak: <b>{chief.menu_terenak}</b></p>
                <p className="chief-icons">
                    <FontAwesomeIcon icon={faCutlery} />
                </p>
            </div>
        </div>
    )
}