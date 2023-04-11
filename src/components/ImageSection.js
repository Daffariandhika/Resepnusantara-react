import CustomImage from"./CustomImage"

export default function ImageSection(){
    const images = [
        "/gallery/cakwe.jpeg",
        "/gallery/gudeg.jpg",
        "/gallery/klepon.jpeg",
        "/gallery/nasi_goreng.jpg",
        "/gallery/sate_ayam.jpg",
        "/gallery/sop_buntut.jpg",
        "/gallery/pempek.jpg",
        "/gallery/salad_buah.jpeg",
        "/gallery/mie_ayam.jpeg",
    ]
    return(
        <div className="image section">
            <div className="col typography">
                <h1 className="title">Resep<span>Nusan</span>tara</h1>
                <p className="info">
                    Hidangan Indonesia adalah salah satu tradisi kuliner yang paling kaya di dunia, 
                dan penuh dengan cita rasa yang kuat. 
                Kekayaan jenis masakannya merupakan cermin keberagaman budaya dan tradisi 
                Nusantara yang terdiri dari sekitar 6.000 pulau berpenghuni, 
                dan menempati peran penting dalam budaya nasional Indonesia secara umum.</p>
                <button className="btn">Temukan Cita Rasa</button>
            </div>
            <div className="col gallery">
                { images.map((src, index) => (
                    <CustomImage key={index} imgSrc={src} pt={"90%"} />
                )) }
            </div>
        </div>
    )
}