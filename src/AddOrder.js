import React, {useState} from 'react';


const AddOrder = ({orders, setOrders}) => {
    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState("");

    const _addOrder = () => {
        if (name === '' || quantity === '') {
            alert('Please enter a name and quantity');
            return;
        }

        if (orders.some(order => order.name === name)) {
            alert('You already ordered '+name+'!');
            return;
        }

        const newOrder = {
            id: orders.length,
            name,
            quantity,
            status: "Processing"
        };
        setOrders(prevOrder => [...prevOrder, newOrder]);
        setTimeout(() => {
            setOrders(prevOrder => {
                return prevOrder.map((order) => {
                    if (order.id === newOrder.id) {
                        return {...order, status: "Delivered",};
                    }
                    return order;
                });
            });
        }, 5000);
    };


    return (
        <div>
            <div className="form-row align-items-center justify-content-center">
                <div className="col-auto">
                    <input
                        className="mb-2"
                        type="text"
                        name="name"
                        value={name}
                        placeholder="Name"
                        onChange={(e) => {setName(e.target.value);}}
                    />
                </div>

                <div className="col-auto">
                    <input
                        className="mb-2"
                        type="text"
                        name="quantity"
                        value={quantity}
                        placeholder="Quantity"
                        onChange={(e) => setQuantity(e.target.value)}
                    />
                </div>
                <div className="col-auto">
                    <button type="button" className="btn btn-primary" onClick={(e) => {_addOrder(name, quantity, setOrders, orders)}}>Add Order</button>
                </div>
            </div>
        </div>
    )
};

export default AddOrder;

