const TransactionList = ({ transactions }) => {
    return (
        <>
        <h3>History</h3>
        <ul className="list">
            {transactions.map((t, index) => (
                <li key={t.amount < 0 ?  'minus' : 'plus'}>
                  {t.text} <span>{t.amount < 0 ? '-' : '+'}${Math.abs(t.amount)}</span>
                </li>
            ))}
        </ul>
    </>
    );
};

export default TransactionList;