const Balance = ({ transactions }) => {
    const amounts = transactions.map( t => t.amount);
    const total = amounts.reduce((acc , item) => acc + item, 0).toFixed(2);
    return (
        <div>
            <h3>Your Balance</h3>
            <h1>${total}</h1>
        </div>
    );
};

export default Balance;