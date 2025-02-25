import React, { useEffect } from "react";
import ProductCard from "@/components/ProductCard";
import Header from "@/components/Header";
import "@/styles/main.scss";
import { Link } from "react-router-dom";
import { UseStateValue } from "@/context";
import { useTranslation } from "react-i18next";

function Favorite() {
  const { favorites, toggleFavorite } = UseStateValue();
  const {t, i18n} = useTranslation()

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header favoriteCount={favorites.length} />
      <section className="favorite">
        <div className="container">
          <div className='favorite-Links'>
            <Link to='/'>{t('Home_page')}</Link>
            <span>&gt;</span>
            <p>{t('favorite.Favorite')}</p>
          </div>

          {favorites.length === 0 ? (
            <div className="favorite-empty">
              <img src="/assets/images/heart-bubble.svg" alt="" />
              <p>{t('favorite.Not_available')}</p>
              <span>{t('favorite.Span')}</span>
              <Link to='/' className="btn">{t('Add_product')}</Link>
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
              <Link to='/' className="btn">{t('Add_product')}</Link>
            </div>
          )}
        </div>
      </section>
    </>
  );
}

export default Favorite;
