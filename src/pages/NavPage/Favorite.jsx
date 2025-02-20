import React, { useEffect } from "react";
import ProductCard from "@/components/ProductCard";
import Header from "@/components/Header";
import "@/styles/main.scss";
import { Link } from "react-router-dom";
import { UseStateValue } from "@/context";

function Favorite() {
  const { favorites, toggleFavorite } = UseStateValue();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header favoriteCount={favorites.length} />
      <section className="favorite">
        <div className="container">
          <div className='favorite-Links'>
            <Link to='/'>Bosh sahifa</Link>
            <span>&gt;</span>
            <p>Sevimlilar</p>
          </div>

          {favorites.length === 0 ? (
            <div className="favorite-empty">
              <img src="/assets/images/heart-bubble.svg" alt="" />
              <p>Sevimli mahsulotlar yo'q</p>
              <span>Mahsulotdagi ❤️ belgisi bilan qo'shing</span>
              <Link to='/' className="btn">Mahsulot qo'shish</Link>
            </div>
          ) : (
            <div className="favorite-content">
              <div className="favorite-grid">
                {favorites.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    removeProduct={() => toggleFavorite(product)}
                  />
                ))}
              </div>
              <Link to='/' className="btn"> Mahsulot qo'shish</Link>
            </div>
          )}
        </div>
      </section>
    </>
  );
}

export default Favorite;
