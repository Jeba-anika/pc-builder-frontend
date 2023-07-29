import Navbar from "../Navbar";

const RootLayout = ({ children }) => {
    return (
        <>
            <Navbar></Navbar>
            {children}

        </>
    );
};

export default RootLayout;