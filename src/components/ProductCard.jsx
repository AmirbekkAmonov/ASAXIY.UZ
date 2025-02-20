import React, { useState } from "react";
import "@/styles/main.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faScaleBalanced, faCartShopping, faStar, faXmark, faSpinner } from "@fortawesome/free-solid-svg-icons";
import { faHeart as solidHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeart as regularHeart } from "@fortawesome/free-regular-svg-icons";
import { faStar as faStarRegular } from "@fortawesome/free-regular-svg-icons";
import { Link } from "react-router-dom";
import { UseStateValue } from "@/context";

function ProductCard({ product, removeProduct }) {
  const { favorites, toggleFavorite, comparison, toggleComparison } = UseStateValue();
  const [imageLoaded, setImageLoaded] = useState(false);

  const isLiked = favorites.some((fav) => fav.id === product.id);
  const isCompared = comparison.some((comp) => comp.id === product.id);

  return (
    <div className="product-card">
      {removeProduct && (
        <button onClick={() => removeProduct(product.id)} className="delete-icon">
          <FontAwesomeIcon icon={faXmark} style={{ color: "white", fontSize: "20px" }} />
        </button>
      )}

      <Link to={`/product/${product.id}`} state={{ product }} className="product-card-img">
        {!imageLoaded && (
          <div className="loading-spinner">
            <FontAwesomeIcon icon={faSpinner} spin style={{ fontSize: "54px", color: "#ccc" }} />
          </div>
        )}
        <img
          src={product.thumbnail}
          alt={product.title}
          onLoad={() => setImageLoaded(true)}
          style={{ display: imageLoaded ? "block" : "none" }}
        />
      </Link>

      <div className="product-card-icon">
        <FontAwesomeIcon
          icon={isLiked ? solidHeart : regularHeart}
          onClick={() => toggleFavorite(product)}
          style={{
            cursor: "pointer",
            color: isLiked ? "red" : "#585757",
            transition: "color 0.3s ease",
            width: "25px",
            height: "25px",
          }}
        />
        <FontAwesomeIcon
          icon={faScaleBalanced}
          onClick={() => toggleComparison(product)}
          style={{
            cursor: "pointer",
            color: isCompared ? "blue" : "#585757",
            transition: "color 0.3s ease",
            width: "25px",
            height: "25px",
          }}
        />
      </div>

      <Link to={`/product/${product.id}`} state={{ product }} className="product-card-info">
        <p>{product.title}</p>
        <div className="stars">
          <div className="rating">
            {[...Array(5)].map((_, i) => (
              <FontAwesomeIcon
                key={i}
                icon={i < Math.round(product.rating) ? faStar : faStarRegular}
                style={{ color: "#FFC107", marginRight: "5px" }}
              />
            ))}
          </div>
          <span className="comments">{product.reviews?.length || 0} ta sharh</span>
        </div>
        <div className="price">
          <span className="old">
            {(product.price * 1.2 * 13000).toLocaleString()} so'm
          </span>
          <span className="new">
            {(product.price * 13000).toLocaleString()} so'm
          </span>
        </div>
        <button className="to-pay">
          {((product.price / 12) * 13000).toFixed(0)} so'm x 12 oy
        </button>
      </Link>
      <div className="product-card-btn">
        <button className="buy">Hoziroq harid qilish</button>
        <button className="add">
          <FontAwesomeIcon
            icon={faCartShopping}
            style={{ color: "#FFFFFF", width: "24px", height: "24px" }}
          />
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
