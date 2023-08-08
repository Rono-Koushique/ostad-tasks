export default function Home() {
    return (
        <>
            <div className="px-4 max-w-screen-lg mx-auto">
                <h1 className="text-4xl font-light">Welcome to this demo blog website</h1>
            </div>
            <div className="mt-12 px-4 max-w-screen-lg mx-auto">
                <h2 className="text-xl font-semibold">Features</h2>
                <ul className="mt-6 list-disc list-inside leading-relaxed">
                    <li>Navigate through pages</li>
                    <li>App routers layout system is adopted</li>
                    <li>Loading Screen added</li>
                    <li>Not Found Screen added</li>
                </ul>
            </div>
        </>
    );
}
