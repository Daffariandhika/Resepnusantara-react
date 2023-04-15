export default function ImproveSkills(){
    const list = [
        "Temukan cita rasa baru",
        "Latihan memasak",
        "Belajar resep baru",
        "Cari tau kandungan nutrisi",
        "Tips untuk memasak",
        "Sajikan kepada keluarga anda"
    ]

    return (
        <div className="section improve-skills">
            <div className="col img">
                <img src="/gallery/salad_buah.jpeg" alt="" />
            </div>
            <div className="col typography">
                <h1 className="title">Temukan Resep Baru</h1>
                { list.map((item, index) => (
                    <p className="skill-item" key={index}>{item}</p>
                )) }
                <button className="btn">Daftar Sekarang</button>
            </div>
        </div>
    )
}