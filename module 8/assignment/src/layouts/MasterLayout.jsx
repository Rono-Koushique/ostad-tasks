import Navbar from "../components/Navbar";

function MasterLayout({ children }) {
    return (
        <>
            <Navbar />
            <main className="py-12 flex flex-col items-center">{children}</main>
        </>
    );
}

export default MasterLayout;
