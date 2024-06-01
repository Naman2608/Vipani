import { useEffect, useState } from "react";
import { VscError } from "react-icons/vsc";
import ProductCard from "../components/Product-Card";
import CartItem from "../components/Cart-Item";
import { Link } from "react-router-dom";
const Cart = () => {
  const cartItems = [
    {
      productId: 32123,
      photo:
        "https://www.maggi.in/sites/default/files/styles/product_image_tab_portrait_708_600/public/maggi-2minutes-noodles-617x900.png?itok=iJWsobZh",
      name: "Maggei",
      price: 12,
      quantity: 2,
      stock: 10,
    },
  ];
  const subtotal = 4000;
  const tax = Math.round(subtotal * 0.18);
  const shippingCharges = 200;
  const discount = 400;
  const total = subtotal + tax + shippingCharges - discount;

  const [couponCode, setCouponCode] = useState("");
  const [isValidCouponCode, setIsValidCouponCode] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (Math.random() > 0.5) setIsValidCouponCode(true);
      else setIsValidCouponCode(false);
    }, 1000);
    return () => {
      clearTimeout(timeoutId);
      setIsValidCouponCode(false);
    };
  }, [couponCode]);

  return (
    <div className="cart">
      <main>
        {cartItems.length > 0 ? (
          cartItems.map((i, idx) => <CartItem key={idx} cartItems={i} />)
        ) : (
          <h1>No items Added</h1>
        )}
      </main>
      <aside>
        <p>Subtotal : ₹ {subtotal} </p>
        <p>Shipping Charges : ₹ {shippingCharges} </p>
        <p>Tax(18%) : ₹ {tax} </p>
        <p>
          Discount : <em> ₹ - {discount}</em>
        </p>
        <p>Total : ₹ {total}</p>
        <input
          type="text"
          placeholder="Coupon Code"
          value={couponCode}
          onChange={(e) => setCouponCode(e.target.value)}
        />
        {couponCode &&
          (isValidCouponCode ? (
            <span className="green">
              ₹{discount} off using the <code>{couponCode}</code>{" "}
            </span>
          ) : (
            <span className="red">
              Invalid Coupon <VscError />
            </span>
          ))}
        {cartItems.length > 0 && <Link to="/shipping">Checkout</Link>}
      </aside>
    </div>
  );
};

export default Cart;
