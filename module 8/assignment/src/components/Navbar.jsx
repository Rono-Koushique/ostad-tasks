import { NavLink, Link } from "react-router-dom";

function Navbar() {
    return (
        <nav className="w-full h-20 flex items-center px-4 shadow-lg shadow-neutral-100">
            <div className="flex items-center justify-between w-full max-w-screen-xl mx-auto">
                <Link to="/" className="text-xl text-neutral-700">
                    ostrack
                </Link>
                <div className="flex">
                    <NavbarLink to="/income">Income</NavbarLink>
                    <NavbarLink to="/expense">Expense</NavbarLink>
                </div>
            </div>
        </nav>
    );
}

function NavbarLink({ to, children }) {
    return (
        <NavLink
            className={({ isActive, isPending }) => {
                return `px-4 py-2 text-neutral-500 ${
                    isPending
                        ? "pending"
                        : isActive
                        ? "text-neutral-900 font-bold"
                        : "hover:text-neutral-900"
                }`;
            }}
            to={to}
            replace={true}
        >
            {children}
        </NavLink>
    );
}

export default Navbar;
