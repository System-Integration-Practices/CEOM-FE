import React, { useEffect, useState } from 'react';
import "../css/pages/ManagePage.css"
import {FaEdit, FaTrashAlt} from "react-icons/fa";
import axios from 'axios';


const ManagePage = () => {
    const [useData, setUserData] = useState([]);
    const [delMessage, setDelmessage] = useState('')
        useEffect( ()=>{
            const getData = async() => {
                const reqData =await fetch("");
                const resData =  reqData.json();
                setUserData(resData);
            }
            getData();
    },
    []);

    const handleChange=(e) => {
      const {name, checked} = e.target;
      if(name ==="allselect")
        {
          const checkedvalue = userData.map( ()=> {
            return {...user, isChecked:checked}
          })
          console.log(checkedvalue);
          setUserData(checkedvalue);
        } else {
          const checkedvalue = useData.map( (user) => 
            user.username === name? {...user, isChecked:checked}:user)
          console.log(checkedvalue);
          setUserData(checkedvalue);
        }
    }

    const handledelete = ()=> {
      const checkedinputValue = [];
      for(let i = 0; i <useData.length; i++)
        {
          if(useData[i].isChecked==true)
            {
              checkedinputValue.push(parseInt(userData[i].userid));
            }
        }
        const responce =axios.post(``,JSON.stringify(checkedinputValue));
        setDelmessage(responce.data.msg);
    }
       
    return (       
        <div className="manage__container">
            <div className="manage__buttons">
                <button className="manage__button active">All</button>
                <button className="manage__button">Earnings</button>
                <button className="manage__button">Vacation days</button>
                <button className="manage__button">Benefits</button> 
            </div>
            <div className="view__table-group">
            <div className="w-full">
              <input type="text" className="view__table-input" />
              <button className="view__table-button">
                <img src="/assets/icons/search.svg" alt="" />
              </button>
            </div>
            <div className="flex items-center gap-12">
              <div className="flex items-center gap-4 text-lg">
                <img src="/assets/icons/sort.svg" alt="" />
                Sort
              </div>
              <div className="flex items-center gap-4 text-lg">
                <img src="/assets/icons/filter.svg" alt="" />
                Filter
              </div>
              <div className="flex items-center gap-4 text-lg">
              <button className="btn btn-waring"><FaTrashAlt/></button>
              </div>
            </div>
          </div>
            
                <table>
                    <thead>
                        <tr>
                            <th><input type="checkbox" name="allselect" checked={!userData.some( (user)=>user?.isChecked!==true)} onChange={handleChange}/></th>
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
                        {useData.map ( (getusers, index)=> (

                        
                         <tr key = {index}>
                            <th><input type="checkbox" name={getusers.username} checked={getusers?.isChecked || false} onChange={handleChange}/></th>
                            <td>{index+1}</td> 
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <button className="btn btn-waring" onClick={()=>{handledelete}}><FaEdit/></button>
                        </tr>
                        
                        ))}  
                    </tbody>
                </table>
                {delMessage && <div className="delete-message">{delMessage}</div>}
            </div>
        
    
    );
};

export default ManagePage;

