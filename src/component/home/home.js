import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {PaginationNav} from "../pagination/PaginationNav";
import * as HomeService from '../../service/HomeService'
export const Home = () => {
    const navigate = useNavigate();
    let logout = () => {
        localStorage.removeItem('token')
        navigate("/login")
    }

    const [data, setData] = useState([]);

    const [currentPage, setCurrentPage] = useState(0);

    const [totalPages, setTotalPages] = useState(0);
    const [pageNumber, setPageNumber] = useState(0);
    const [find, setFind] = useState("");

    const fetchData = async () => {
        try {
            const response = await HomeService.findAll(find, pageNumber);
            setData(response);
            setTotalPages(localStorage.getItem('totalPage'));
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    useEffect(() => {
        fetchData();
    }, [find, pageNumber]);

    

    const handleNextPage = () => {
        if (currentPage < totalPages - 1) {
            setCurrentPage(currentPage + 1);
        }
    };

    const handlePrevPage = () => {
        if (currentPage > 0) {
            setCurrentPage(currentPage - 1);
        }
    };

    return (
        <>
            <h1>TRANG CHỦ</h1>
            <div>
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">First name</th>
                            <th scope="col">Middle name</th>
                            <th scope="col">Last name</th>
                            <th scope="col">Gender</th>
                            <th scope="col">Email</th>
                            <th scope="col">Phone</th>
                            <th scope="col">Plan name</th>
                            <th scope="col">Pay amount</th>
                            <th scope="col">Vacation working days per month</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((p, index) => (
                            <tr key={index}>
                                <td>{p.current_FIRST_NAME}</td>
                                <td>{p.current_MIDDLE_NAME}</td>
                                <td>{p.current_LAST_NAME}</td>
                                <td>{p.current_GENDER}</td>
                                <td>{p.current_PERSONAL_EMAIL}</td>
                                <td>{p.current_PHONE_NUMBER}</td>
                                <td>{p.plan_NAME}</td>
                                <td>{p.payAmount}</td>
                                <td>{p.total_NUMBER_VACATION_WORKING_DAYS_PER_MONTH}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            {/* <button onClick={handlePrevPage} disabled={currentPage === 0}>Previous Page</button>
            <button onClick={handleNextPage} disabled={currentPage === totalPages - 1}>Next Page</button> */}

            <div className="row" style={{ marginTop: '20px' }}>
                <div>
                    <PaginationNav pageNumber={pageNumber}
                        totalPages={totalPages}
                        setPageNumber={setPageNumber} />
                </div>
            </div>

            <button onClick={logout}>Logout</button>
        </>
    )
}