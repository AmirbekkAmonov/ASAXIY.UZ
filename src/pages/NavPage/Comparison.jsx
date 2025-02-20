import React, { useEffect, useState } from "react";
import ProductCard from "@/components/ProductCard";
import "@/styles/main.scss";
import { Link } from "react-router-dom";
import { UseStateValue } from "@/context";

function Comparison() {
  const { comparison, toggleComparison } = UseStateValue();
  const [localComparison, setLocalComparison] = useState([]);

  useEffect(() => {
    setLocalComparison(comparison);
  }, [comparison]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <section className="comparison">
      <div className="container">
        <div className="comparison-Links">
          <Link to="/">Bosh sahifa</Link>
          <span>&gt;</span>
          <p>Taqqoslash</p>
        </div>

        {localComparison.length === 0 ? (
          <div className="comparison-empty">
            <img src="/assets/images/campare_not_page.webp" alt="Bo‘sh sahifa" />
            <p>Hozirda sizda mahsulotlar mavjud emas.</p>
            <Link to="/" className="btn">
              Mahsulot qo'shish
            </Link>
          </div>
        ) : (
          <div className="comparison-content">
            <div className="comparison-grid">
              {localComparison.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  removeProduct={() => toggleComparison(product)}
                />
              ))}
            </div>
            <Link to="/" className="btn">
              Mahsulot qo'shish
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}

export default Comparison;
