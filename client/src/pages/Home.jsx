import AiTools from "../components/AiTools";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Plans from "../components/Plans";
import Testimonial from "../components/Testimonial";

const Home = () => {
    return (
        <div>
            <Navbar/>
            <Hero/>
            <AiTools/>
            <Testimonial/>
            <Plans/>
            <Footer/>
        </div>
    );
};

export default Home;
