import "./App.css";
import Content from "./component/Content";
import Footer from "./component/Footer";
import Header from "./component/Header";

function App() {
    return (
        <div className="page">
            <Header title="Text Copy" />
            <Content />
            <Footer />
        </div>
    );
}

export default App;
