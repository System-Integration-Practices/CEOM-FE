import React from 'react';
import "../css/pages/ManageEditPage.css";
import {Link} from "react-router-dom";
 
const ManageEditPage = () => {

    return (
       
        <div className="view__container">
            <div className="flex h-[200px] bg-white rounded-xl w-[20%] view__user">
                <div className="manage__edit__user-media">
                <img src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="" className="w-[200px] h-[200px] rounded-full object-cover "/>
                </div> 
            </div>
            <div className="flex items-center gap-5 mb-5 w-[80%] h-[30px]">
                <h1 className="manage__heading">User Profile</h1>
                <div className="manage__line"></div>
            </div>
            <div className="manage__edit__user-profile">
                <div className="h-[400px] bg-white rounded-xl w-[800px] t-[300px] view__user">
                    <form>
                        <div className="menu">
                            <div className="form-group">
                                <label for="first-name" className="form-label">FirstName</label>
                                <input id="first-name" className="form-control" type="text" name="firstName"/>
                            </div>
                            <div className="form-group">
                                <label for="last-name" className="form-label">LastName</label>
                                <input id="last-name" className="form-control" type="text" name="lastName"/>
                            </div>
                            <div className="form-group">
                                <label for="middle-initial" className="form-label">Middle-Initial</label>
                                <input id="middle-initial" className="form-control" type="text" name="middle-Initial"/>
                                </div>
                            <div className="form-group">
                                <label for="gender" className="form-label">Gender</label>
                                <select id="gender" className="form-control">
                                    <option value="male">Male</option>
                                    <option selected value="female">Female</option>
                                </select>
                            </div>
                        </div>
                        <div className="menu-1">
                            <label htmlForm="address1" className="form-label">Address 1</label>
                            <input id="address1" className="form-control" type="text" name="address1"/>
                            <label htmlForm="address2" className="form-label">Address 2</label>
                            <input id="address2" className="form-control" type="text" name="address2"/>
                        </div>
                        <div className="menu-2">
                        <div class="form-group">
                                <label for="city" className="form-label">City</label>
                                <input id="city" className="form-control" type="text" name="city"/>
                            </div>
                            <div class="form-group">
                                <label for="state" className="form-label">State</label>
                                <input id="state" className="form-control" type="text" name="state"/>
                            </div>
                            <div class="form-group">
                                <label for="zip" className="form-label">Zip</label>
                                <input id="zip" className="form-control" type="text" name="zip"/>
                            </div>
                        </div>
                        <div class="menu-3">
                            <div class="form-group">
                                <label for="email" className="form-label">Email</label>
                                <input id="email" className="form-control" type="text" name="email"/>
                            </div>
                            <div class="form-group">
                                <label for="phone-number" className="form-label">Phone Number</label>
                                <select id="gender" className="form-control">
                                    <option value="+85">+85</option>
                                    <option selected value="+84">+84</option>
                                </select>
                                <input id="phone-number" className="form-control" type="text" name="phoneNumber"/>
                            </div>
                        </div>
                    </form>
                </div>
            </div>

            <div className="flex items-center gap-5 mb-5 w-[80%] h-[30px]">
                <h1 className="manage__heading">Employment</h1>
                <div className="manage__line"></div>
            </div>

            <div className="h-[400px] bg-white rounded-xl w-[800px] t-[300px] view__user">
                <div class="">
                    <table>
                        <thead>
                            <tr>
                                <th>Status</th>
                                <th>Hire Date</th>
                                <th>Termination Date</th>
                                <th>Rehire Date</th>
                                <th>Last Review Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <select id="gender" className="form-control1">
                                    <option value="partTime">Part-time</option>
                                    <option selected value="fullTime">Full-time</option>
                                </select>
                                <td>23/02/2024</td>
                                <td>23/02/2025</td>
                                <td>N/A</td>
                                <td>01/01/20204</td>              
                                </tr>
                        </tbody>
                        <tbody>
                            <tr>
                                <select id="gender" className="form-control1">
                                    <option value="partTime">Part-time</option>
                                    <option selected value="fullTime">Full-time</option>
                                </select>
                                <td>23/02/2023</td>
                                <td>23/02/2024</td>
                                <td>23/02/2024</td>
                                <td>01/06/2023</td>              
                                </tr>
                        </tbody>
                        <tbody>
                            <tr>
                                <select id="gender" className="form-control2">
                                    <option value="fullTime">Full-time</option>
                                    <option selected value="partTime">Part-time</option>
                                </select>
                                <td>23/12/2022</td>
                                <td>23/02/2023</td>
                                <td>23/02/2023</td>
                                <td>01/01/2023</td>              
                                </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <div class="contain">
                <div class="pagination">
                    <button class="btn1">First Page</button>
                    <ul>
                        <li className="link" value="1">1</li>
                    </ul>
                    <button className="btn1">Last Page</button> 
                </div>
            </div>

            

            <div className="flex items-center gap-5 mb-5 w-[80%] h-[30px]">
                <h1 className="manage__heading">Alert</h1>
                <div className="manage__line"></div>
            </div>
            <div className="h-[400px] bg-white rounded-xl w-[800px] t-[300px] view__user">
            <div class="App">
                    <table>
                        <thead>
                            <tr>
                                <th>Alert Type</th>
                                <th>Alert Detail</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <select id="notification" class="form-control1">
                                    <option value="A">Approaching hiring anniversary</option>
                                    <option value="B">Benefit plan change affecting payroll</option>
                                    <option value="E">Employees with birthdays this month</option>
                                    </select>
                                <td>Birthday on February 26, 2024</td>
                                <td>Done</td>         
                            </tr>

                            <tr>
                                <select id="notification" class="form-control1">
                                    <option value="A">Approaching hiring anniversary</option>
                                    <option value="B">Benefit plan change affecting payroll</option>
                                    <option value="E">Employees with birthdays this month</option>
                                    </select>
                                <td>Birthday on February 26, 2024</td>
                                <td>Done</td>         
                            </tr>

                            <tr>
                                <select id="notification" class="form-control1">
                                    <option value="A">Approaching hiring anniversary</option>
                                    <option value="B">Benefit plan change affecting payroll</option>
                                    <option value="E">Employees with birthdays this month</option>
                                    </select>
                                <td>Birthday on February 26, 2024</td>
                                <td>Done</td>         
                            </tr>
                        </tbody>
                        
                    </table>
                </div>
                
            </div>
            <div class="contain">
                <div class="pagination">
                    <button class="btn1">First Page</button>
                    <ul>
                        <li className="link" value="1">1</li>
                        <li className="link" value="2">2</li>
                        <li className="link" value="3">3</li>
                    </ul>
                    <button className="btn1">Last Page</button> 
                </div>
            </div>

            <div className="row mb-5">
					<div className="col-sm-2">
						<button
							type="submit"
							className="btn btn-outline-success btn-lg">
							Save
						</button>
					</div>

					<div className="col-sm-2">
						<Link
							to={"/manage"}
							type="submit"
							className="btn btn-outline-warning btn-lg">
							Cancel
						</Link>
					</div>
				</div>
        </div>
    );
};


export default ManageEditPage;
