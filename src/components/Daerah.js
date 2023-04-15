import ChiefCard from "./ChiefCard"

export default function ChiefsSection(){
    const chiefs = [
        {
            daerah: "Jawa",
            img: "/gallery/indonesia.png",
            jumlah_menu: "0",
            menu_terenak: "Nasi Kucing",
        },
        {
            daerah: "Sumatera",
            img: "/gallery/indonesia.png",
            jumlah_menu: "0",
            menu_terenak: "Rendang",
        },
        {
            daerah: "Kalimantan",
            img: "/gallery/indonesia.png",
            jumlah_menu: "0",
            menu_terenak: "Soto Banjar",
        },
        {
            daerah: "Papua",
            img: "/gallery/indonesia.png",
            jumlah_menu: "0",
            menu_terenak: "Gohu"
        },
        {
            daerah: "Sulawesi",
            img: "/gallery/indonesia.png",
            jumlah_menu: "0",
            menu_terenak: "Sop Konro"
        },
        {
            daerah: "Bali",
            img: "/gallery/indonesia.png",
            jumlah_menu: "0",
            menu_terenak: "Babi Guling"
        }
    ]
    return (
        <div className="section chiefs">
            <h1 className="title">Daerah Terpopuler</h1>
            <div className="top-chiefs-container">
                {/* <ChiefCard />
                <ChiefCard />
                <ChiefCard />
                <ChiefCard />
                <ChiefCard />
                <ChiefCard /> */}
                { chiefs.map(chief => <ChiefCard key={chief.name} chief={chief} />) }
            </div>
        </div>
    )
}