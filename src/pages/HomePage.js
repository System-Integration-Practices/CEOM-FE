import React from "react";
import "../css/pages/HomePage.css";
import Pagination from "../components/Pagination";

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
        <form action="" className="view__table-form">
          <div className="view__table-group">
            <input type="text" className="view__table-input" />
            <button className="view__table-button"></button>
          </div>
          <table className="view__table-view">
            <thead>
              <tr>
                <th>Name</th>
                <th>Department</th>
                <th>Shareholder</th>
                <th>Gender</th>
                <th>Type</th>
                <th>
                  Total Earnings <span>(last year)</span>
                </th>
                <th>
                  Total Earnings <span>(present)</span>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Nguyen Van A</td>
                <td>Maketing</td>
                <td>True</td>
                <td>Male</td>
                <td>Full-time</td>
                <td>100 000 USD</td>
                <td>35 000 USD</td>
              </tr>
              <tr>
                <td>Nguyen Van A</td>
                <td>Maketing</td>
                <td>True</td>
                <td>Male</td>
                <td>Full-time</td>
                <td>100 000 USD</td>
                <td>35 000 USD</td>
              </tr>
              <tr>
                <td>Nguyen Van A</td>
                <td>Maketing</td>
                <td>True</td>
                <td>Male</td>
                <td>Full-time</td>
                <td>100 000 USD</td>
                <td>35 000 USD</td>
              </tr>
              <tr>
                <td>Nguyen Van A</td>
                <td>Maketing</td>
                <td>True</td>
                <td>Male</td>
                <td>Full-time</td>
                <td>100 000 USD</td>
                <td>35 000 USD</td>
              </tr>
              <tr>
                <td>Nguyen Van A</td>
                <td>Maketing</td>
                <td>True</td>
                <td>Male</td>
                <td>Full-time</td>
                <td>100 000 USD</td>
                <td>35 000 USD</td>
              </tr>
            </tbody>
          </table>
          <Pagination
            itemsPerPage={5}
            setCurrentPage={1}
            totalPages={100}
          ></Pagination>
        </form>
      </div>
    </div>
  );
};

export default HomePage;
