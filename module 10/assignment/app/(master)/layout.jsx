import NavBar from "@/components/Navbar";

export const metadata = {
    title: "Ostad - Assignment 10",
    description: "Generated by create next app",
};

export default function RootLayout({ children }) {
    return (
        <>
            <NavBar />
            <main className="py-24 bg-neutral-100 grow">{children}</main>
        </>
    );
}
