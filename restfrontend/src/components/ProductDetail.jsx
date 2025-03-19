import { useParams } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import axios from "axios";
import { CartContext } from "./CartContext";
import '../styles/ProductDetail.css'


const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const { cart, setCart, triggerToast } = useContext(CartContext);
  const [quantity, setQuantity] = useState(1); // Local quantity state
  const [descOpen, setDescOpen] = useState(false); // Toggle for description

  useEffect(() => {
    axios.get(`http://127.0.0.1:8000/items/${id}/`)
      .then((response) => setProduct(response.data))
      .catch((error) => console.log("Error fetching product:", error));
  }, [id]);

  if (!product) return <h2>Loading...</h2>;

  const cartItem = cart.find((cItem) => cItem.item.id === product.id);

  // Increase quantity locally
  const increaseQuantity = () => setQuantity(quantity + 1);

  // Decrease quantity locally, but not below 1
  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  // Handle add to cart
  const handleCart = async () => {
    try {
      if (cartItem) {
        // If item is already in cart, update its quantity
        const updatedQuantity = cartItem.quantity + quantity;
        await axios.patch(`http://127.0.0.1:8000/cart/${cartItem.id}/`, { quantity: updatedQuantity });
        setCart(cart.map(item => 
          item.id === cartItem.id ? { ...item, quantity: updatedQuantity } : item
        ));
      } else {
        // If item is not in cart, add it
        const payload = { item: product.id, quantity: quantity };
        const res = await axios.post("http://127.0.0.1:8000/cart/", payload);
        setCart([...cart, res.data]);
      }
      triggerToast(`${product.name} added to cart`);
    } catch (error) {
      console.log(error);
      alert("Couldn't add to cart");
    }
  };

  return (
    <div>
    <div className="product-detail-container">
      {/* Left Section - Image & Description Toggle */}
      <div className="left-section">
        <img src={product.image_url} alt={product.name} className="product-image" />
        
       

   
      </div>

      {/* Right Section - Product Details */}
      <div className="right-detailed">
        <p className="detailed_name">{product.name}</p>
        <p className="detailed_price"> Rs.{product.price}.00</p>

        {/* Key Features Section */}
        <div className="product-features">
          <div className="feature-box">            
            <img src={`${process.env.PUBLIC_URL}/images/Veg.webp`} alt="Vegetarian" className="feature-icon" />
            <span>Pure Vegetarian</span>
            </div>
          <div className="feature-box">
          <img src={`${process.env.PUBLIC_URL}/images/Shelf_life.avif`} alt="Vegetarian" className="feature-icon" />
          <span>45 Days Shelf Life</span>
       </div>
          <div className="feature-box">
          <img src={`${process.env.PUBLIC_URL}/images/Free_Express_Delivery.avif`} alt="Vegetarian" className="feature-icon" />
          <span>Free Express Delivery</span>
            </div>
        </div>

        {/* "What Sets Us Apart" Section */}
        <p className="apart-heading">What Sets Us Apart</p>
        <div className="apart-section">
          <div className="apart-box">
          <img src={`${process.env.PUBLIC_URL}/images/Dry_Fruits.webp`} alt="Vegetarian" className="feature-icon" />
          <span>  Baked Not Fried</span>
          </div>
          <div className="apart-box">
          <img src={`${process.env.PUBLIC_URL}/images/Ghee.avif`} alt="Vegetarian" className="feature-icon" />
          <span>Pure Ghee</span>
            </div>
        </div>

        {/* Quantity Controls */}
        <div className="quan">
            <p>Quantity</p>
            <div className="quantity-controls">
          <button onClick={decreaseQuantity}>-</button>
          <span>{quantity}</span>
          <button onClick={increaseQuantity}>+</button>
        </div>
        </div>
      

        {/* Add to Cart Button */}
        <button 
          className="add-to-cart-btn-detail"
          onClick={handleCart}>
          Add to Cart
        </button>



        {/* "Tax Included" Section */}
        <p className="tax-info">
  Tax included. Shipping calculated at checkout.
</p>

{/* Additional Features Section */}
<div className="additional-features">
  <div className="feature-item">
    <img src={`${process.env.PUBLIC_URL}/images/Leakproof_packaging.webp`} alt="Leakproof" className="feature-icon" />
    <span>Leakproof, Airtight & Insulated Packaging to Maintain Freshness</span>
  </div>
  <div className="feature-item">
    <img src={`${process.env.PUBLIC_URL}/images/bulk_order.webp`} alt="Storage" className="feature-icon" />
    <span>Stored at Room Temperature. Transfer into an Airtight Container to Maintain Freshness</span>
  </div>
  <div className="feature-item">
    <img src={`${process.env.PUBLIC_URL}/images/Pan_India.avif`} alt="Delivery" className="feature-icon" />
    <span>Pan India 2-7 Days Express Delivery</span>
  </div>
  <div className="feature-item">
    <img src={`${process.env.PUBLIC_URL}/images/Ships_within_24_Hours.avif`} alt="Shipping" className="feature-icon" />
    <span>Ships within 24 hours</span>
  </div>
  <div className="feature-item">
    <img src={`${process.env.PUBLIC_URL}/images/Secure_payment.avif`} alt="Secure Payment" className="feature-icon" />
    <span>Secure Payment Using Credit Card, Debit Card, UPI & Net Banking</span>
  </div>
</div>



        {/* Description Toggle */}
        <div 
          className={`description-toggle ${descOpen ? "open" : ""}`}
          onClick={() => setDescOpen(!descOpen)}> 
          Description
          <span>{descOpen ? "-" : "+"}</span>
        </div>

        {/* Description Content */}
        {descOpen && (
          <p className={`description-text ${descOpen ? "open" : ""}`}>
            Our Baklava Pistachio Sobiyet is a classic Turkish pastry made with layers of flaky phyllo dough 
            filled with crunchy, nutty goodness. The perfect combination of pistachios and honey give each 
            bite an unmistakable richness that feels just as indulgent as it tastes. Delight in these traditional 
            sweets today. Vegetarian, eggless, zero preservatives, contains dry fruits and honey.
          </p>
        )}


      </div>





      </div>
       



       {/* Full-Width Section Below Left & Right Sections */}
<div className="full-width-features">
  <div className="feature-card">
    <img src={`${process.env.PUBLIC_URL}/images/Authentic_Recipe.avif`} alt="Authentic Recipe" />
    <span>Authentic Recipe</span>
  </div>
  <div className="feature-card">
    <img src={`${process.env.PUBLIC_URL}/images/Freshly_Baked.avif`} alt="Freshly Made" />
    <span>Freshly Made in<br></br> Small Batches</span>
  </div>
  <div className="feature-card">
    <img src={`${process.env.PUBLIC_URL}/images/Crispy_Note.avif`} alt="Crispy" />
    <span>Crispy</span>
  </div>
  <div className="feature-card">
    <img src={`${process.env.PUBLIC_URL}/images/Handmade.avif`} alt="Hand Made" />
    <span>Hand Made</span>
  </div>
  <div className="feature-card">
    <img src={`${process.env.PUBLIC_URL}/images/Flavourful.avif`} alt="Flavourful" />
    <span>Flavourful</span>
  </div>
  <div className="feature-card">
    <img src={`${process.env.PUBLIC_URL}/images/Made_with_Phello_Sheets.avif`} alt="Flavourful" />
    <span>Made with Phyllo Sheets</span>
  </div>
</div>

    </div>
  );
};

export default ProductDetail;
