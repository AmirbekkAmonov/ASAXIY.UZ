import React, { useEffect, useState } from "react";
import ProductCard from "@/components/ProductCard";
import Header from "@/components/Header";
import "@/styles/main.scss";

function Favorite() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const loadFavorites = () => {
      const favoriteProducts = JSON.parse(localStorage.getItem("favorites")) || [];
      setFavorites(favoriteProducts);
    };

    loadFavorites();

    window.addEventListener("storage", loadFavorites);
    return () => window.removeEventListener("storage", loadFavorites);
  }, []);

  const removeFavorite = (id) => {
    const updatedFavorites = favorites.filter((product) => product.id !== id);
    setFavorites(updatedFavorites);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));

    window.dispatchEvent(new Event("storage"));
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header favoriteCount={favorites.length} />

      <section className="favorite">
        <div className="container">
          <h2>Sevimlilar</h2>
          {favorites.length === 0 ? (
            <p>Sevimlilarga hech qanday mahsulot qo'shilmagan.</p>
          ) : (
            <div className="product-grid">
              {favorites.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  removeProduct={() => removeFavorite(product.id)}
                />
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}

export default Favorite;
