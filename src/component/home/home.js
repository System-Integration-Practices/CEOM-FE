import { useEffect, useState } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import { PaginationNav } from "../pagination/PaginationNav";
import * as HomeService from '../../service/HomeService'
import * as DeleteService from '../../service/DeleteService'
import DeleteConfirmation from "../delete/DeleteConfirmation";
import { toast } from "react-toastify";
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

    const [displayModal, setDisplayModal] = useState(false);
    const [deleteMessage, setDeleteMessage] = useState(null);

    const [personalId, setPersonalId] = useState(null);
    const [employmentId, setEmploymentId] = useState(null);

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

    const showDeleteModal = (personalId) => {
        setPersonalId(personalId)
        setDeleteMessage(
            `Are u sure about that?`
        );
        setDisplayModal(true);
    }

    const hideConfirmationModal = () => {
        setDisplayModal(false);
    };

    const submitDelete = async (personalId) => {
        await DeleteService.deletePersonal(personalId);
        toast.success(`Xóa thành công.`)
        setDisplayModal(false);
        await fetchData(0, '');
    };

    return (
        <>
            <h1>TRANG CHỦ</h1>
            <div>
                <NavLink to={`/create`}>
                    <button className="btn btn-success" >CREATE</button>
                </NavLink>
            </div>
            <div>
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">STT</th>
                            <th scope="col">First name</th>
                            <th scope="col">Middle name</th>
                            <th scope="col">Last name</th>
                            <th scope="col">Gender</th>
                            <th scope="col">Email</th>
                            <th scope="col">Phone</th>
                            <th scope="col">Plan name</th>
                            <th scope="col">Pay amount</th>
                            <th scope="col">Vacation working days per month</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((p, index) => (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{p.current_FIRST_NAME}</td>
                                <td>{p.current_MIDDLE_NAME}</td>
                                <td>{p.current_LAST_NAME}</td>
                                <td>{p.current_GENDER}</td>
                                <td>{p.current_PERSONAL_EMAIL}</td>
                                <td>{p.current_PHONE_NUMBER}</td>
                                <td>{p.plan_NAME}</td>
                                <td>{p.payAmount}</td>
                                <td>{p.total_NUMBER_VACATION_WORKING_DAYS_PER_MONTH}</td>
                                <td>
                                    <div className="card-footer">

                                        <div className="card-footer">
                                            <div style={{ float: 'right' }}>

                                                <NavLink to={`/detail-personal/${p.personal_ID}/${p.employment_ID}`}
                                                    className="btn btn-secondary rounded-circle center-icon ">
                                                    <div>
                                                        <i className="bi bi-info-lg"></i>
                                                    </div>
                                                </NavLink>

                                                <button className="btn btn-danger rounded-circle " onClick={() => showDeleteModal(p.personal_ID)}><i
                                                    className="bi bi-trash "></i>
                                                </button>

                                                <NavLink to={`/edit-personal/${p.personal_ID}/${p.employment_ID}`}
                                                    className="btn btn-success rounded-circle center-icon ">
                                                    <div>
                                                        <i className="bi bi-pencil"></i>
                                                    </div>
                                                </NavLink>
                                            </div>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className="row" style={{ marginTop: '20px' }}>
                <div>
                    <PaginationNav pageNumber={pageNumber}
                        totalPages={totalPages}
                        setPageNumber={setPageNumber} />
                </div>
            </div>

            <DeleteConfirmation showModal={displayModal} confirmModal={submitDelete}
                hideModal={hideConfirmationModal} id={personalId} message={deleteMessage} />

            <button onClick={logout}>Logout</button>
        </>
    )
}