import CustomImage from "./CustomImage"

export default function HeroSection(){
    const images = [
        "/gallery/cakwe.jpeg",
        "/gallery/gudeg.jpg",
        "/gallery/klepon.jpeg",
        "/gallery/mie_ayam.jpeg",
        "/gallery/nasi_goreng.jpg",
        "/gallery/pempek.jpg",
        "/gallery/salad_buah.jpeg",
        "/gallery/sate_ayam.jpg",
        "/gallery/sop_buntut.jpg"
    ]
    return (
        <div className="section hero">
            <div className="col typography">
                <h1 className="title">Resep<span>Nusan</span>tara</h1>
                <p className="info">ResepNusantara adalah website yang menyediakan berbagai macam resep-resep masakan nusantara</p>
                <button className="btn">temukan cita rasa</button>
            </div>
            <div className="col gallery">
                { images.map((src, index) => (
                    <CustomImage key={index} imgSrc={src} pt={"90%"} />
                )) }
            </div>
        </div>
    )
}