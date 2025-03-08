
import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { CartContext } from "./CartContext";

export default function Items() {
    const [allitems, setAllitems] = useState([]);
    const { cart, setCart, incQuant, decQuant } = useContext(CartContext);

    useEffect(() => {
        const fetchdata = async () => {
            try {
                const itemres = await axios.get("http://localhost:8000/items/");
                setAllitems(itemres.data);
            } catch (error) {
                console.log(error);
            }
        };
        fetchdata();
    }, []);

    const handleCart = async (item) => {
        try {
            const payload = { item: item.id, quantity: 1 };
            const res = await axios.post("http://127.0.0.1:8000/cart/", payload);
            setCart([...cart, res.data]);
            alert("Item added");
        } catch (error) {
            console.log(error);
            alert("Couldn't add");
        }
    };

    return (
        <div className="container mt-4">
            <h1 className="text-center mb-4">All Items</h1>
            <div className="row">
                {allitems.map((item) => {
                    const cartItem = cart.find((cItem) => cItem.item.id === item.id);
                    return (
                        <div key={item.id} className="col-md-4 mb-4">
                            <div className="card shadow-sm h-100 d-flex flex-column" style={{ minHeight: "400px" }}> 
                                <img
                                    src={item.image}
                                    className="card-img-top"
                                    alt={item.name}
                                    style={{ height: "250px", width: "100%", objectFit: "cover" }} 
                                />
                                <div className="card-body d-flex flex-column">
                                    <h5 className="card-title">{item.name}</h5>
                                    <p className="card-text">₹{item.price}</p>
                                    <div className="mt-auto">
                                        {cartItem ? (
                                            <div className="d-flex align-items-center justify-content-center">
                                                <button className="btn me-2" style={{ backgroundColor: "olive", color: "white", border: "none" }} onClick={() => incQuant(cartItem)}>+</button>
                                                <span className="fw-bold">{cartItem.quantity}</span>
                                                <button className="btn ms-2" style={{ backgroundColor: "olive", color: "white", border: "none" }} onClick={() => decQuant(cartItem)}>-</button>
                                            </div>
                                        ) : (
                                            <button className="btn w-100" style={{ backgroundColor: "olive", color: "white", border: "none" }} onClick={() => handleCart(item)}>Add to Cart</button>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
