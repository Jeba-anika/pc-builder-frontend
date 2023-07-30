import Footer from "../Footer";
import Navbar from "../Navbar";

const RootLayout = ({ children }) => {
    return (
        <>
            <Navbar></Navbar>
            <div style={{ minHeight: '100%' }}>
                {children}
            </div>
            <Footer></Footer>
        </>
    );
};

export default RootLayout;