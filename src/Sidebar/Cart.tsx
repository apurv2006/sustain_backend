import React, { useState } from 'react';

interface CartItem {
  id: number;
  name: string;
  description: string;
  price: number;
  quantity: number;
}

const Cart: React.FC = () => 
    {
  const [cartItems, setCartItems] = useState<CartItem[]>([
    { id: 1, name: "Wood Magazine Rack", description: "Red", price: 120, quantity: 2 },
    { id: 2, name: "Eco-friendly Helmet", description: "Black", price: 132, quantity: 1 },
    { id: 3, name: "Sigg Water Bottle", description: "Graphite Black", price: 23, quantity: 2 },
  ]);

  const handleQuantityChange = (id: number, delta: number) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(0, item.quantity + delta) }
          : item
      )
    );
  };

  const handleRemoveItem = (id: number) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const calculateSubtotal = (): number => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px' }}>
      <h2 style={{ textAlign: 'center' }}>Your Cart</h2>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px' }}>
        {/* Cart Items */}
        <table style={{ width: '65%', borderCollapse: 'collapse' }}>
          <thead>
            <tr>
              <th style={{ textAlign: 'left', padding: '10px' }}>Product</th>
              <th style={{ textAlign: 'left', padding: '10px' }}>Price</th>
              <th style={{ textAlign: 'center', padding: '10px' }}>Quantity</th>
              <th style={{ textAlign: 'right', padding: '10px' }}>Total</th>
              <th style={{ padding: '10px' }}> </th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((item) => (
              <tr key={item.id} style={{ borderBottom: '1px solid #ccc' }}>
                <td style={{ padding: '10px' }}>
                  <div>
                    <strong>{item.name}</strong>
                    <br />
                    <span style={{ color: '#777' }}>{item.description}</span>
                  </div>
                </td>
                <td style={{ padding: '10px' }}>${item.price}</td>
                <td style={{ textAlign: 'center', padding: '10px' }}>
                  <button onClick={() => handleQuantityChange(item.id, -1)}>-</button>
                  <span style={{ margin: '0 10px' }}>{item.quantity}</span>
                  <button onClick={() => handleQuantityChange(item.id, 1)}>+</button>
                </td>
                <td style={{ textAlign: 'right', padding: '10px' }}>${item.price * item.quantity}</td>
                <td style={{ textAlign: 'center', padding: '10px' }}>
                  <button onClick={() => handleRemoveItem(item.id)}>X</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Order Summary */}
        <div
          style={{
            width: '30%',
            padding: '20px',
            backgroundColor: '#f9f9f9',
            borderRadius: '8px',
            boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
          }}
        >
          <h3>Order Summary</h3>
          <div style={{ display: 'flex', justifyContent: 'space-between', margin: '10px 0' }}>
            <span>Subtotal</span>
            <span>${calculateSubtotal()}</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', margin: '10px 0' }}>
            <span>Shipping</span>
            <span>Free</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', margin: '10px 0', fontWeight: 'bold' }}>
            <span>Total</span>
            <span>${calculateSubtotal()}</span>
          </div>
          <button
            style={{
              width: '100%',
              padding: '10px',
              backgroundColor: '#28a745',
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
              marginTop: '20px',
            }}
          >
            CHECKOUT
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
