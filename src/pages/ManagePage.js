import React from 'react';
import "../css/pages/ManagePage.css"

const ManagePage = () => {
    return (
        <div>
              <div class="manage__main--content">
        <div class="manage__header--wrapper">
            
            <div class="manage__user--info">
                <div class="manage__search--box">
                    <i class="fa-solid fa-search"></i>
                    <input type="text" placeholder="Search" />
                </div>
                <img src="img.jpg" alt="" />
            </div>
        </div>

        
        <div class="manage__tabular--wrapper">
            <div class="manage__toolbar">
                <div class="manage__search--bax">
                    <i class="fa-solid fa-search"></i>
                    <input type="text" placeholder="Search" />
                </div>
                    <i class="fa-solid fa-arrow-up-wide-short">Sort</i>
                    <i class="fa-solid fa-filter">Filter</i>
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
                            <th>Total benefit</th>
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
                                <td>35000USD</td>
                                <td><i class="fa-solid fa-user-pen"></i></td>
                            </tr>
                            <tr>
                                <td>Nguyen Van A</td>
                                <td>Sales</td>
                                <td>True</td>
                                <td>Male</td>
                                <td>Full-time</td>
                                <td>100000 USD</td>
                                <td>35000 USD</td>
                                <td>35000USD</td>
                                <td><i class="fa-solid fa-user-pen"></i></td>
                            </tr>
                            <tr>
                                <td>Nguyen Van A</td>
                                <td>Sales</td>
                                <td>True</td>
                                <td>Male</td>
                                <td>Full-time</td>
                                <td>100000 USD</td>
                                <td>35000 USD</td>
                                <td>35000USD</td>
                                <td><i class="fa-solid fa-user-pen"></i></td>
                            </tr>
                            <tr>
                                <td>Nguyen Van A</td>
                                <td>Sales</td>
                                <td>True</td>
                                <td>Male</td>
                                <td>Full-time</td>
                                <td>100000 USD</td>
                                <td>35000 USD</td>
                                <td>35000USD</td>
                                <td><i class="fa-solid fa-user-pen"></i></td>
                            </tr>
                            <tr>
                                <td>Nguyen Van A</td>
                                <td>Sales</td>
                                <td>True</td>
                                <td>Male</td>
                                <td>Full-time</td>
                                <td>100000 USD</td>
                                <td>35000 USD</td>
                                <td>35000USD</td>
                                <td><i class="fa-solid fa-user-pen"></i></td>
                            </tr>
                        </tbody>
                </table>
            </div>
        </div>
    </div>
       
    );
};

export default ManagePage;