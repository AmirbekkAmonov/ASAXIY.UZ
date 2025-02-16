import React, { useEffect, useState } from "react";
import ProductCard from "@/components/ProductCard";
import "@/styles/main.scss";

function Comparison() {
  const [comparison, setComparison] = useState([]);

  useEffect(() => {
    const compareProducts = JSON.parse(localStorage.getItem("comparison")) || [];
    setComparison(compareProducts);
  }, []);

  // Mahsulotni o‘chirish funksiyasi
  const removeComparison = (id) => {
    const updatedComparison = comparison.filter((product) => product.id !== id);
    setComparison(updatedComparison);
    localStorage.setItem("comparison", JSON.stringify(updatedComparison));
  };

  return (
    <section className="comparison">
      <div className="container">
      <h2>Taqqoslash</h2>
      {comparison.length === 0 ? (
        <p>Taqqoslash ro‘yxatiga hech qanday mahsulot qo‘shilmagan.</p>
      ) : (
        <div className="product-grid">
          {comparison.map((product) => (
            <ProductCard key={product.id} product={product} removeProduct={removeComparison} />
          ))}
        </div>
      )}
      </div>
    </section>
  );
}

export default Comparison;
