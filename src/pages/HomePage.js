import React from "react";
import "../css/pages/HomePage.css";

const HomePage = () => {
  return (
    <div className="view__container">
      <div className="view__overview-number">
        <div className="view__overview-number__item">
          <div className="view__overview-number__title">Total Earnings</div>
          <div className="view__overview-number__number">90 000 000</div>
          <div className="view__overview-number__desc">USD (in present)</div>
        </div>
        <div className="view__overview-number__item">
          <div className="view__overview-number__title">
            Total number of vacation days
          </div>
          <div className="view__overview-number__number">23</div>
          <div className="view__overview-number__desc">days (in present)</div>
        </div>
        <div className="view__overview-number__item">
          <div className="view__overview-number__title">Average benefits </div>
          <div className="view__overview-number__number">90 000 000</div>
          <div className="view__overview-number__desc">USD (in present)</div>
        </div>
      </div>
      <div className="view__buttons">
        <button className="view__button active">Earnings</button>
        <button className="view__button">Vacation days</button>
        <button className="view__button">Benefits</button>
      </div>
      <div className="view__table">
        <form action="" className="view__table-form"></form>
      </div>
    </div>
  );
};

export default HomePage;
