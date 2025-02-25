import React, { useEffect, useState } from "react";
import ProductCard from "@/components/ProductCard";
import "@/styles/main.scss";
import { Link } from "react-router-dom";
import { UseStateValue } from "@/context";
import { useTranslation } from "react-i18next";

function Comparison() {
  const { comparison, toggleComparison } = UseStateValue();
  const [localComparison, setLocalComparison] = useState([]);
  const {t, i18n} = useTranslation()

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
          <Link to="/">{t('Home_page')}</Link>
          <span>&gt;</span>
          <p>{t('comparison.Comparison')}</p>
        </div>

        {localComparison.length === 0 ? (
          <div className="comparison-empty">
            <img src="/assets/images/campare_not_page.webp" alt="Bo‘sh sahifa" />
            <p>{t('comparison.Not_available')}</p>
            <Link to="/" className="btn">
              {t('Add_product')}
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
            {t('Add_product')}
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}

export default Comparison;
