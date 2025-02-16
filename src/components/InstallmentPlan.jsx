import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";

function InstallmentPlan({ product }) {
  const [selectedMonths, setSelectedMonths] = useState(3);

  const monthsOptions = [3, 6, 12, 18];
  const installmentPrice = ((product.price * 13000) / selectedMonths).toLocaleString();

  return (
    <div className="product-about-price">
      <h2>Bo'lib to'lash</h2>
      <div className="card-month">
        {monthsOptions.map((months) => (
          <button
            key={months}
            className={selectedMonths === months ? "active" : ""}
            onClick={() => setSelectedMonths(months)}
          >
            {months} oy
          </button>
        ))}
      </div>
      <div className="product-about-price-card">
        <span>
          Smartbank hamkorining muddatli to'lovi
          <FontAwesomeIcon icon={faCircleInfo} style={{ width: "15px", height: "15px" }} />
        </span>
        <div className="card-price">
          <img src="/assets/images/SmartBank.svg" alt="SmartBank logo" />
          <p>{installmentPrice} so'm</p>
        </div>
        <p className='p'>Umumiy qiymat: <b>{(product.price * 13000).toLocaleString()} so'm</b></p>

        <button className="btn-card">Bo'lib to'lashga olish</button>
      </div>
    </div>
  );
}

export default InstallmentPlan;
