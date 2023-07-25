import MasterLayout from "../layouts/MasterLayout";

function HomePage() {
    return (
        <MasterLayout>
            <h1 className="text-2xl">Money Tracker</h1>
            <span className="mt-2">by</span>
            <h2 className="mt-2 text-lg">Rono Koushique</h2>
            <ul className="mt-12 list-disc">
                <li>Pagination by react-router-dom</li>
                <li>
                    Used both {`"Link"`} and {`"NavLink"`} component from react-router-dom
                </li>
                <li>Have new expense and income add feature</li>
                <li>
                    Used props drilling for maintaining persistanace of state across pages
                </li>
            </ul>
        </MasterLayout>
    );
}

export default HomePage;
