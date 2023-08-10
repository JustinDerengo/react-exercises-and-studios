import './App.css';
import stockData from './data'

const stockList = stockData.map((stock) => (
  <tr key={stock.id}>
    <td>{stock.name}</td>
    <td>{stock.ticker}</td>
    <td>{stock.price}</td>
    <td></td>
  </tr>
));


export default function Stocks() {
    return (
        <div>
            <h1 className="stock-container">Welcome to the Stock Tracker</h1>
            <h2 className="header">Your Stock Trader</h2>
            <table className="table">
                <th>Stock Name</th>
                <th>Ticker</th>
                <th>Price</th>
                <th>Time Elapsed</th>
                {stockList}
            </table>
        </div>
    )
}