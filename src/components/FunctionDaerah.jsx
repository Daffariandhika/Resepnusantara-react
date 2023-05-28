import { Link } from 'react-router-dom';

export default function Data({chief}) {
    return (
        // Renders a clickable Link that navigates to a specific page based on the 'daerah' property of the chief object
        <Link to={`/daerah/${chief.daerah}`}>
            {/*Renders a div that represents a chief card*/}
            <div className="chief-card">
                {/* Renders an image with the URL specified in the 'img' property of the chief object*/}
                <img src={chief.img} alt="" />
                {/* Renders a div that contains information about the chief*/}
                <div className="chief-card-info">
                    {/* Renders the name of the 'daerah' property of the chief object*/}
                    <h3 className="daerah">{chief.daerah}</h3>
                    {/*Renders the number of 'jumlah_menu' property of the chief object*/}
                    <p className="jumlah_menu">Jumlah Resep: <b>{chief.jumlah_menu}</b></p>
                    {/* Renders the name of the most famous dish of the 'paling_terkenal' property of the chief object*/}
                    <p className="paling_terkenal">Paling Terkenal: <b>{chief.paling_terkenal}</b></p>
                </div>
            </div>
        </Link>
    )
}