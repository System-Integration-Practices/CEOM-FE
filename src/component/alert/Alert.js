import React from "react";
import "../Alert.css";

const Alert = () => {
  return (
    <div className="alert__container">
      <div className="alert__table">
        <form action="" className="alert__table-form">
          <div className="alert__table-group">
            <div className="flex items-center gap-8">
              <div className="flex items-center gap-4 text-lg">
                <img src="/assets/icons/sort.svg" alt="" />
                Sort
              </div>
              <div className="flex items-center gap-4 text-lg">
                <img src="/assets/icons/filter.svg" alt="" />
                Filter
              </div>
            </div>
          </div>
          <table className="alert__table-alert">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Alert Type</th>
                <th>Alert Details</th>
                <th>Send Alert</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Nguyen Van A</td>
                <td className="alert__status vacation">Vacation time running out</td>
                <td>2 vacation days left</td>
                <td className="alert__table-button">Send</td>
              </tr>
              <tr>
                <td>1</td>
                <td>Nguyen Van A</td>
                <td className="alert__status vacation">Vacation time running out</td>
                <td>2 vacation days left</td>
                <td className="alert__table-button">Send</td>
              </tr>
              <tr>
                <td>1</td>
                <td>Nguyen Van A</td>
                <td className="alert__status vacation">Vacation time running out</td>
                <td>2 vacation days left</td>
                <td className="alert__table-button">Send</td>
              </tr>
              <tr>
                <td>1</td>
                <td>Nguyen Van A</td>
                <td className="alert__status vacation">Vacation time running out</td>
                <td>2 vacation days left</td>
                <td className="alert__table-button">Send</td>
              </tr>
              <tr>
                <td>1</td>
                <td>Nguyen Van A</td>
                <td className="alert__status vacation">Vacation time running out</td>
                <td>2 vacation days left</td>
                <td className="alert__table-button">Send</td>
              </tr>
            </tbody>
          </table>
          <Pagination
            itemsPerPage={4}
            setCurrentPage={1}
            totalPages={20}
          ></Pagination>
        </form>
      </div>
    </div>
  );
};

export default Alert;