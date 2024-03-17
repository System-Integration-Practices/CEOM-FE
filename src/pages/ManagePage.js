import React from 'react';
import "../css/pages/ManagePage.css"

const ManagePage = () => {
    return (
        <>
            <div className="manage__buttons">
                <button className="manage__button active">All</button>
                <button className="manage__button">Earnings</button>
                <button className="manage__button">Vacation days</button>
                <button className="manage__button">Benefits</button>
            </div>
            <div className="manage__tabular--wrapper">
                <div className="manage__toolbar">
                    <div className="manage__search--box">
                        <i className="fa-solid fa-search"></i>
                        <input type="text" placeholder="Search" />
                    </div>
                    <div className="manage__sort-filter">
                        <i className="fa-solid fa-arrow-up-wide-short">Sort</i>
                        <i className="fa-solid fa-filter">Filter</i>
                    </div>
                    <button type="button" id="delete">Delete</button>
                </div>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Department</th>
                            <th>Shareholder</th>
                            <th>Gender</th>
                            <th>Type</th>
                            <th>Total Earnings</th>
                            <th>Total Vacation Days</th>
                            <th>Total Benefit</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Nguyen Van A</td>
                            <td>Sales</td>
                            <td>True</td>
                            <td>Male</td>
                            <td>Full-time</td>
                            <td>100000 USD</td>
                            <td>35000 USD</td>
                            <td>35000 USD</td>
                            <td><i className="fa-solid fa-user-pen"></i></td>
                        </tr>
                        <tr>
                            <td>Nguyen Van A</td>
                            <td>Sales</td>
                            <td>True</td>
                            <td>Male</td>
                            <td>Full-time</td>
                            <td>100000 USD</td>
                            <td>35000 USD</td>
                            <td>35000 USD</td>
                            <td><i className="fa-solid fa-user-pen"></i></td>
                        </tr>
                        <tr>
                            <td>Nguyen Van A</td>
                            <td>Sales</td>
                            <td>True</td>
                            <td>Male</td>
                            <td>Full-time</td>
                            <td>100000 USD</td>
                            <td>35000 USD</td>
                            <td>35000 USD</td>
                            <td><i className="fa-solid fa-user-pen"></i></td>
                        </tr>
                        <tr>
                            <td>Nguyen Van A</td>
                            <td>Sales</td>
                            <td>True</td>
                            <td>Male</td>
                            <td>Full-time</td>
                            <td>100000 USD</td>
                            <td>35000 USD</td>
                            <td>35000 USD</td>
                            <td><i className="fa-solid fa-user-pen"></i></td>
                        </tr>
                        <tr>
                            <td>Nguyen Van A</td>
                            <td>Sales</td>
                            <td>True</td>
                            <td>Male</td>
                            <td>Full-time</td>
                            <td>100000 USD</td>
                            <td>35000 USD</td>
                            <td>35000 USD</td>
                            <td><i className="fa-solid fa-user-pen"></i></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default ManagePage;

