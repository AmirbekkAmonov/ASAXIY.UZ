import React, { useEffect, useState } from "react";
import "@/styles/main.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faScaleBalanced,
  faCartShopping,
  faStar,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { faHeart as solidHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeart as regularHeart } from "@fortawesome/free-regular-svg-icons";
import { faStar as faStarRegular } from "@fortawesome/free-regular-svg-icons";
import { Link } from "react-router-dom";

function ProductCard({ product, removeProduct }) {
  const [like, setLike] = useState(false);
  const [compare, setCompare] = useState(false);

  useEffect(() => {
    const favoriteProducts = JSON.parse(localStorage.getItem("favorites")) || [];
    setLike(favoriteProducts.some((fav) => fav.id === product.id));

    const compareProducts = JSON.parse(localStorage.getItem("comparison")) || [];
    setCompare(compareProducts.some((comp) => comp.id === product.id));
  }, [product.id]);

  const toggleFavorite = () => {
    let favoriteProducts = JSON.parse(localStorage.getItem("favorites")) || [];

    if (like) {
      favoriteProducts = favoriteProducts.filter((fav) => fav.id !== product.id);
    } else {
      favoriteProducts.push(product);
    }

    localStorage.setItem("favorites", JSON.stringify(favoriteProducts));
    setLike(!like);

    window.dispatchEvent(new Event("storage"));
  };

  const handleRemove = () => {
    if (removeProduct) {
      removeProduct(product.id);
    }
  };

  const toggleComparison = () => {
    let compareProducts = JSON.parse(localStorage.getItem("comparison")) || [];

    if (compare) {
      compareProducts = compareProducts.filter((comp) => comp.id !== product.id);
    } else {
      compareProducts.push(product);
    }

    localStorage.setItem("comparison", JSON.stringify(compareProducts));
    setCompare(!compare);
  };

  const formatPrice = (price) => {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  };

  return (
    <div className="product-card">
      {removeProduct && (
        <button onClick={handleRemove} className="delete-icon">
           <FontAwesomeIcon  icon={faXmark} />
        </button>
      )}

      <Link to={`/product/${product.id}`} state={{ product }} className="product-card-img">
        <img src={product.thumbnail} alt={product.title} />
      </Link>
        <div className="product-card-icon">
          <FontAwesomeIcon
            icon={like ? solidHeart : regularHeart}
            onClick={toggleFavorite}
            style={{
              cursor: "pointer",
              color: like ? "red" : "#585757",
              transition: "color 0.3s ease",
              width: "25px",
              height: "25px",
            }}
          />
          <FontAwesomeIcon
            icon={faScaleBalanced}
            onClick={toggleComparison}
            style={{
              cursor: "pointer",
              color: compare ? "blue" : "#585757",
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
          {formatPrice(((product.price / 12) * 13000).toFixed(0))} so'm x 12 oy
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
