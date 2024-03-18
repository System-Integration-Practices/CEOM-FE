import React from 'react';
import "../css/pages/ManageEditPage.css";

const ManageEditPage = () => {

    return (
       
        <div className="view__container flex">
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
            <div className=" h-[300px] bg-white rounded-xl w-[100%] view__user">
                <div className="manage__edit__user-profile flex">
                    <form>
                        <div class="menu flex">
                            <label htmlForm="first-name" className="form-label">FirstName</label>
                            <input 
                            id="first-name"
                            className="form-control"
                            type="text"
                            name="firstName"
                            />
                            <label htmlForm="last-name" className="form-label">LastName</label>
                            <input 
                            id="last-name"
                            className="form-control"
                            type="text"
                            name="lastName"
                            />
                            <label htmlForm="middle-initial" className="form-label">Middle-Initial</label>
                            <input 
                            id="middle-initial"
                            className="form-control"
                            type="text"
                            name="middle-Initial"
                            />
                            <label htmlForm="gender" className="form-label">Gender</label>
                            <select>
                                <option value="male">Male</option>
                                <option selected value="femal">Femal</option>
                            </select>
                        </div>
                        <div class="menu-1">
                            <label htmlForm="address1" className="form-label">Address 1</label>
                            <input 
                            id="address1"
                            className="form-control"
                            type="text"
                            name="address1"
                            />
                        </div>
                        <div class ="menu-2">
                            <label htmlForm="address2" className="form-label1">Address 2</label>
                            <input 
                            id="address2"
                            className="form-control"
                            type="text"
                            name="address2"
                            />
                        </div>
                        <div class="menu-3">
                            <label htmlForm="city" className="form-label">City</label>
                            <input 
                            id="city"
                            className="form-control"
                            type="text"
                            name="city"
                            />
                            <label htmlForm="state" className="form-label">State</label>
                            <input 
                            id="satte"
                            className="form-control"
                            type="text"
                            name="state"
                            />

                            <label htmlForm="zip" className="form-label">Zip</label>
                            <input 
                            id="zip"
                            className="form-control"
                            type="text"
                            name="Zip"
                            />
                        </div>
                        <div class="flex">
                            <label htmlForm="email" className="form-label">Email</label>
                            

                            <label htmlForm="phone-number" className="form-label">Phone Number</label>
                            <input 
                            id="phone-number"
                            className="form-control"
                            type="text"
                            name="phoneNumber"
                            />
                        
                            

                        </div>
                    </form>
                </div>
            </div>
        </div>
    


        
    );
};

export default ManageEditPage;
