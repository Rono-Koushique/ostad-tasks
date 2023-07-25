import MasterLayout from "../layouts/MasterLayout";
import TransactionForm from "../components/TransactionForm";
import TransactionList from "../components/TransactionList";

function IncomePage({ allTransacs, addNewTransac }) {
    return (
        <MasterLayout>
            <h2 className="text-3xl">All Incomes</h2>
            <TransactionForm type="income" addNewTransac={addNewTransac} />
            <TransactionList type="income" allTransacs={allTransacs} />
        </MasterLayout>
    );
}

export default IncomePage;
