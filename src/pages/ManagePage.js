import React from 'react';
import "../css/pages/ManagePage.css"

const ManagePage = () => {
    return (       
        <div className="manage__container">
            <div className="manage__buttons">
                <button className="manage__button active">All</button>
                <button className="manage__button">Earnings</button>
                <button className="manage__button">Vacation days</button>
                <button className="manage__button">Benefits</button>
            </div>
            <div className="manage__tabular--wrapper">
                <div className="manage__toolbar">
                        <i className="fa-solid fa-search"></i>
                        <input type="text" placeholder="Search" />  
                        <i className="fa-solid fa-arrow-up-wide-short">Sort</i>
                        <i className="fa-solid fa-filter">Filter</i>
                        <button type="button" className="button__delete">Delete</button>
                
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
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    
    );
};

export default ManagePage;

