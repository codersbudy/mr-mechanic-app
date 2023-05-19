import Footer from "../Footer/Footer";
import Carousel from "../carousel/Carousel";
import Navbar from "../navbar/Navbar";

function Home() {
    return <>
        <Navbar />
        <div className="app-container">
            <Carousel />
            <Footer />
        </div>
    </>
}

export default Home;