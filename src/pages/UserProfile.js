import React from "react";
import "../css/pages/UserProfile.css";

const UserProfile = () => {
  return (
    <>
      <div className="view__container">
        <div className="flex items-center gap-5 mb-5 ">
          <h1 className="view__heading">User Profile</h1>
          <div className="view__line"></div>
          <button className="text-lg px-5 py-1 bg-[#4F65DF] rounded-xl text-white">
            Back
          </button>
        </div>
        <div className="flex h-[400px] items-center bg-white px-7 rounded-xl view__user">
          <div className="view__user-media">
            <img
              src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
              className="w-[200px] h-[200px] rounded-full object-cover"
            />
            <div className="view__user-name">Nguyen Van A</div>
            <div className="view__user-major">Maketing</div>
          </div>
          <div className="flex flex-col view__user-info gap-x-5 gap-y-10 flex-wrap">
            <div className="flex items-center">
              <div className="view__label-name">Gender:</div>
              <div className="view__label-value">Male</div>
            </div>
            <div className="flex items-center">
              <div className="view__label-name">Phone Number:</div>
              <div className="view__label-value">0123.456.789</div>
            </div>
            <div className="flex items-center">
              <div className="view__label-name">Address 1:</div>
              <div className="view__label-value">Vietnam</div>
            </div>
            <div className="flex items-center">
              <div className="view__label-name">Address 2:</div>
              <div className="view__label-value">N/A</div>
            </div>
            <div className="flex items-center">
              <div className="view__label-name">Shareholder:</div>
              <div className="view__label-value">True</div>
            </div>
            <div className="flex items-center">
              <div className="view__label-name">Day of Birth:</div>
              <div className="view__label-value">20/01/1995</div>
            </div>
            <div className="flex items-center ">
              <div className="view__label-name">Email:</div>
              <div className="view__label-value">abc@gmail.com</div>
            </div>
            <div className="flex items-center">
              <div className="view__label-name">Employment Type:</div>
              <div className="view__label-value">Full-time</div>
            </div>
          </div>
        </div>
        <div className="flex items-center border-b-2 mb-5">
          <button className="px-8 py-5 font-bold view__user-button active">
            Employment
          </button>
          <button className="px-8 py-5 font-bold view__user-button">
            Alert
          </button>
        </div>
        <table className="view__user-table">
          <thead>
            <tr>
              <th>Employment Status</th>
              <th>Hire Date</th>
              <th>Termination Date</th>
              <th>Rehire Date</th>
              <th>Last Review Date</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <div>Full-time</div>
              </td>
              <td>23/02/2024</td>
              <td>23/02/2025</td>
              <td>N/A</td>
              <td>01/01/2024</td>
            </tr>
            <tr>
              <td>
                <div>Full-time</div>
              </td>
              <td>23/02/2024</td>
              <td>23/02/2025</td>
              <td>N/A</td>
              <td>01/01/2024</td>
            </tr>
            <tr>
              <td>
                <div>Full-time</div>
              </td>
              <td>23/02/2024</td>
              <td>23/02/2025</td>
              <td>N/A</td>
              <td>01/01/2024</td>
            </tr>
            <tr>
              <td>
                <div>Full-time</div>
              </td>
              <td>23/02/2024</td>
              <td>23/02/2025</td>
              <td>N/A</td>
              <td>01/01/2024</td>
            </tr>
            <tr>
              <td>
                <div>Full-time</div>
              </td>
              <td>23/02/2024</td>
              <td>23/02/2025</td>
              <td>N/A</td>
              <td>01/01/2024</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default UserProfile;
