export default function ResepTrending(){
    const list = [
        "Cari tau resep baru",
        "Coba buat masakan dengan menu baru",
        "Sejarah makanan",
        "Ketahui kandungan nutrisi",
        "Dapatkan tips untuk memasak",
        "Bagikan dengan kerabat dan teman"
    ]

    return(
        <div className="section resep-trending">
            <div className="col img">
                <img src="/gallery/sate_ayam.jpg"/>
            </div>
            <div className="col typography">
                <h1 className="title">Resep Trending</h1>
                { list.map((item, index) => (
                    <p className="skill-item" key={index}>{item}</p>
                )) }
                <button className="btn">Lihat Detail Resep</button>
            </div>
        </div>
    )
}