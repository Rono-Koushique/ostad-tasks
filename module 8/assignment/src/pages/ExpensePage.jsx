import MasterLayout from "../layouts/MasterLayout";
import TransactionForm from "../components/TransactionForm";
import TransactionList from "../components/TransactionList";

function ExpensePage({ allTransacs, addNewTransac }) {
    return (
        <MasterLayout>
            <h2 className="text-3xl">All Expenses</h2>
            <TransactionForm type="expense" addNewTransac={addNewTransac} />
            <TransactionList type="expense" allTransacs={allTransacs} />
        </MasterLayout>
    );
}

export default ExpensePage;
