import { useState } from "react";
import { v4 as generateRandomId } from "uuid";

const initialValue = {
    description: "",
    value: "",
};

function TransactionForm({ type, addNewTransac }) {
    const [transaction, setTransaction] = useState(initialValue);

    const handleChange = (event) => {
        setTransaction((prevState) => ({
            ...prevState,
            [event.target.id]: event.target.value,
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        if (!transaction.description || !transaction.value) return;

        const newTransaction = {
            id: generateRandomId(),
            type: type,
            description: transaction.description,
            value: parseFloat(transaction.value),
        };

        addNewTransac(newTransaction);
        setTransaction(initialValue);
    };

    return (
        <section className="mt-12 px-4 w-full">
            <form
                onSubmit={handleSubmit}
                className="rounded p-6 w-full max-w-screen-xl mx-auto flex flex-col lg:flex-row gap-2"
            >
                <div className="form-control flex-1">
                    <input
                        type="text"
                        id="description"
                        placeholder="Description"
                        autoComplete="off"
                        className="flex-1"
                        value={transaction.description}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-control">
                    <input
                        type="text"
                        id="value"
                        placeholder="Value"
                        autoComplete="off"
                        value={transaction.value}
                        onChange={handleChange}
                    />
                </div>
                <button
                    className="px-4 py-2 mt-2 lg:mt-0 lg:ml-2 rounded bg-green-500 text-white font-medium"
                    type="submit"
                >
                    Add {type === "income" ? "Income" : "Expense"}
                </button>
            </form>
        </section>
    );
}

export default TransactionForm;
