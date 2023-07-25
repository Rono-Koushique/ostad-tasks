import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import IncomePage from "./pages/IncomePage";
import ExpensePage from "./pages/ExpensePage";
import NotFoundPage from "./pages/NotFoundPage";
import { useState } from "react";
import HomePage from "./pages/HomePage";

function App() {
    const [allTransacs, setAllTransacs] = useState([]);

    const addNewTransac = (transac) => {
        setAllTransacs((prevState) => [...prevState, transac]);
    };

    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route
                    path="/income"
                    element={
                        <IncomePage
                            allTransacs={allTransacs}
                            addNewTransac={addNewTransac}
                        />
                    }
                />
                <Route
                    path="/expense"
                    element={
                        <ExpensePage
                            allTransacs={allTransacs}
                            addNewTransac={addNewTransac}
                        />
                    }
                />
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </Router>
    );
}

export default App;
