import Banner from '../Components/Banner';
import Navbar from '../Components/Navbar';
import Bio from '../Components/Bio';
import Book from '../Components/Book';
import Footer from '../Components/Footer';

function Home() {
    return (
        <>
            <Navbar />
            <Banner />
            <Bio />
            <Book />
            <Footer />
        </>
    );
}

export default Home;
