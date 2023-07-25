function TransactionList({ type, allTransacs }) {
    const incomeTransacs = allTransacs.filter((transaction) => transaction.type === type);
    return (
        <table className="mt-12">
            <caption>Transaction List</caption>
            <thead>
                <tr>
                    <th>Description</th>
                    <th>Value</th>
                </tr>
            </thead>
            <tbody>
                {incomeTransacs.map((data) => {
                    return (
                        <tr key={data.id}>
                            <td>{data.description}</td>
                            <td>{data.value}</td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
}

export default TransactionList;
