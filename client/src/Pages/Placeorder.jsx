import React, { useContext, useState } from 'react';
import { storecontext } from '../Context/StoreContext';

const PlaceOrder = () => {
  const { cartItem, food_list } = useContext(storecontext);
  const [userInfo, setUserInfo] = useState({
    name: '',
    address: '',
    phone: '',
    paymentMethod: 'COD', // Default to Cash on Delivery
  });

  const [orderPlaced, setOrderPlaced] = useState(false);

  // Calculate total price from the cart items
  const calculateTotalPrice = () => {
    return food_list.reduce((total, item) => {
      if (cartItem[item.id] > 0) {
        return total + (cartItem[item.id] * item.price);
      }
      return total;
    }, 0);
  };

  // Handle user input for the form
  const handleInputChange = (e) => {
    setUserInfo({
      ...userInfo,
      [e.target.name]: e.target.value,
    });
  };

  // Handle form submission (place order)
  const handleSubmit = (e) => {
    e.preventDefault();

    // Simulate order placement process
    console.log("Order Placed:", userInfo);
    setOrderPlaced(true);
  };

  return (
    <div className="place-order p-4">
      <h2>Place Your Order</h2>
      {!orderPlaced ? (
        <>
          <div className="cart-summary">
            <h3>Your Cart Items</h3>
            {food_list.map((item) => {
              if (cartItem[item.id] > 0) {
                return (
                  <div key={item.id} className="cart-item">
                    <p><strong>{item.name}</strong> x {cartItem[item.id]}</p>
                    <p>Price: {cartItem[item.id] * item.price}</p>
                  </div>
                );
              }
              return null;
            })}
            <hr />
            <h4>Total Price: {calculateTotalPrice()}</h4>
          </div>

          <form className="order-form" onSubmit={handleSubmit}>
            <h3>Delivery Information</h3>
            <div className="form-group">
              <label>Name:</label>
              <input
                type="text"
                name="name"
                value={userInfo.name}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Address:</label>
              <input
                type="text"
                name="address"
                value={userInfo.address}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Phone Number:</label>
              <input
                type="tel"
                name="phone"
                value={userInfo.phone}
                onChange={handleInputChange}
                required
              />
            </div>

            <h3>Payment Method</h3>
            <div className="form-group">
              <label>
                <input
                  type="radio"
                  name="paymentMethod"
                  value="COD"
                  checked={userInfo.paymentMethod === 'COD'}
                  onChange={handleInputChange}
                />
                Cash on Delivery
              </label>
              <br />
              <label>
                <input
                  type="radio"
                  name="paymentMethod"
                  value="Card"
                  onChange={handleInputChange}
                />
                Credit/Debit Card
              </label>
            </div>

            <button type="submit" className="btn btn-primary">
              Place Order
            </button>
          </form>
        </>
      ) : (
        <div className="order-confirmation">
          <h3>Order Placed Successfully!</h3>
          <p>Thank you for your order, {userInfo.name}.</p>
          <p>Your order will be delivered to {userInfo.address}.</p>
          <p>Payment Method: {userInfo.paymentMethod}</p>
          <p>Total Price: {calculateTotalPrice()}</p>
        </div>
      )}
    </div>
  );
};

export default PlaceOrder;
