import logo from './logo.svg';
import './App.css';
import AddOrder from "./AddOrder";
import {useState, useEffect} from "react";

function App() {
    const [orders, setOrders] = useState([]);

    return (
        <div className="App">
            <div className="container">
                <section className="mt-4">
                    <h1 className="mb-5">Order App</h1>
                    <AddOrder orders={orders} setOrders={setOrders}/>
                    <div id="tableContainer" className="mt-4 table-wrapper-scroll-y my-custom-scrollbar">
                        <table className="table" id="orders">
                        <thead>
                        <tr key="head">
                            <th scope="col">Name</th>
                            <th scope="col">Quantity</th>
                            <th scope="col">Status</th>
                        </tr>
                        </thead>
                        <tbody id="orders">
                                {orders.map((order, index) => (
                                    <tr key={index}>
                                        <td>{order.name}</td>
                                        <td>{order.quantity}</td>
                                        <td>{
                                            (order.status === 'Delivered')
                                                ? <i className="fas fa-check-square statusIconDelivered "></i>
                                                : <i className="fas fa-circle-notch fa-spin statusIconProcessing"></i>
                                        }
                                            {order.status}
                                        </td>
                                    </tr>
                                ))}
                        </tbody>
                    </table>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default App;
