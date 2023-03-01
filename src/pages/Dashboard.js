import { Link } from 'react-router-dom'

export default function Dashboard({ stocks }) {

    return (
        <>
            <div className="container">
                <h1>Most Active Stocks</h1>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>Company Name</th>
                        <th>Price</th>
                        <th>Change</th>
                    </tr>
                </thead>
                <tbody>

                    {stocks.map((stock) =>
                       
                            <tr>
                                <td>  <Link className="links" to={`/stock/${stock.symbol}`}> {stock.name} </Link>  </td>
                                <td>{stock.lastPrice}</td>
                                <td>{stock.change}</td>
                            </tr>
                        



                    )}
                </tbody>
            </table>



        </>
    );
}