import React, { useState } from "react";
import "@/styles/main.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faScaleBalanced, faCartShopping, faStar, faSpinner, faTrash } from "@fortawesome/free-solid-svg-icons";
import { faHeart as solidHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeart as regularHeart } from "@fortawesome/free-regular-svg-icons";
import { faStar as faStarRegular } from "@fortawesome/free-regular-svg-icons";
import { Link } from "react-router-dom";
import { UseStateValue } from "@/context";
import { useTranslation } from "react-i18next";

function ProductCard({ product, isBasket, isOrder }) {
  const { favorites, toggleFavorite, comparison, toggleComparison, cart, toggleCart, updateCartQuantity, removeFromCart } = UseStateValue();
  const [imageLoaded, setImageLoaded] = useState(false);
  const isLiked = favorites.some((fav) => fav.id === product.id);
  const isCompared = comparison.some((comp) => comp.id === product.id);
  const isInCart = cart.some((item) => item.id === product.id);
  const {t, i18n} = useTranslation();

  return (
    <div className={`product-card ${isBasket ? "basket-card" : ""}`}>

      {isBasket ? (
        <>
          <div className="basket-info">
            <Link to={`/product/${product.id}`} state={{ product }}>
              <img
                src={product.thumbnail}
                alt={product.title}
                className="basket-img"
                onLoad={() => setImageLoaded(true)}
                style={{ display: imageLoaded ? "block" : "none" }}
              />
            </Link>
            {!imageLoaded && <FontAwesomeIcon icon={faSpinner} spin className="loading-spinner" />}
            <div className="basket-text">
              <div className="product-name">
                <Link to={`/product/${product.id}`} state={{ product }}>{product.title}</Link>
                <Link to={`/product/${product.id}`} state={{ product }} className="basket-button">{product.brand || product.category || "Noma'lum"}</Link>
              </div>
              <div className="counter">
                <button
                  className={product.quantity === 1 ? "disabled-btn" : ""}
                  disabled={product.quantity === 1}
                  onClick={() => updateCartQuantity(product.id, product.quantity - 1)}
                >-</button>
                <span>{product.quantity}</span>
                <button onClick={() => updateCartQuantity(product.id, product.quantity + 1)}>+</button>
              </div>
              <div className="basket-text2">
                <div className="price">
                  <span className="old">
                    {(product.price * 1.2 * 13000).toLocaleString()} {t('sum')}
                  </span>
                  <span className="new">
                    {(product.price * 13000).toLocaleString()} {t('sum')}
                  </span>
                </div>
                <p className="to-pay">
                  {((product.price / 12) * 13000).toFixed(0)} {t('sum')} x 12 {t('Month')}
                </p>
              </div>
              <div className="basket-icon">
                <FontAwesomeIcon
                  icon={isLiked ? solidHeart : regularHeart}
                  onClick={() => toggleFavorite(product)}
                  style={{
                    cursor: "pointer",
                    color: isLiked ? "red" : "#cbd5e1 ",
                    transition: "color 0.3s ease",
                    width: "20px",
                    height: "20px",
                  }}
                />
                <FontAwesomeIcon
                  onClick={() => removeFromCart(product.id)}
                  icon={faTrash}
                  style={{ width: "20px", height: "20px", cursor: "pointer", }}
                  className="delete-icon"
                />
              </div>
            </div>
          </div>
        </>
      ) : isOrder ? (
        <div className="order-card">
          <Link to={`/product/${product.id}`} state={{ product }} className="order-card-img">
            <img
              src={product.thumbnail}
              alt={product.title}
              className="order-img"
            />
          </Link>
          <div className="order-text">
            <b>{product.title}</b>
            <div className="order-text2">
              <span className="order-quantity">{product.quantity} {t('order.Piece')}</span>
              <p className="order-price">
                {(product.price * 13000).toLocaleString()} {t('sum')}
              </p>
            </div>
            <div className="order-icon" onClick={() => removeFromCart(product.id)}>
              <FontAwesomeIcon
                icon={faTrash}
                style={{ width: "20px", height: "20px", cursor: "pointer", }}
                className="delete-icon"
              />
              <p>{t('order.Delete')}</p>
            </div>
          </div>
        </div>
      ) : (
        <>
          <div className="asosiy-card">
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
                <span className="comments">{product.reviews?.length || 0} {t('productCard.Comment')}</span>
              </div>
              <div className="price">
                <span className="old">
                  {(product.price * 1.2 * 13000).toLocaleString()} {t('sum')}
                </span>
                <span className="new">
                  {(product.price * 13000).toLocaleString()} {t('sum')}
                </span>
              </div>
              <button className="to-pay">
                {((product.price / 12) * 13000).toFixed(0)} {t('sum')} x 12 {t('Month')}
              </button>
            </Link>
            <div className="product-card-btn">
              <button className="buy">{t('productCard.Buy_now')}</button>
              <button
                className={`add`}
                onClick={() => toggleCart(product)}
                style={{ backgroundColor: "#00bfaf" }}
              >
                <FontAwesomeIcon
                  icon={faCartShopping}
                  style={{ color: "#FFFFFF", width: "24px", height: "24px" }}
                />
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default ProductCard;
