import * as UpdateService from '../../service/UpdateService'
import React, { useEffect, useState } from "react";
import { Field, Form, Formik, ErrorMessage } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";
import { NavLink, useNavigate, useParams } from "react-router-dom";

export const Update = () => {
    const navigate = useNavigate();
    const [errorData, setErrorData] = useState({})
    const [benefitPlans, setBenefitPlans] = useState([])
    const [payRates, setPayRates] = useState([])
    const [personal, setPersonal] = useState()
    const [employment, setEmployment] = useState()
    const [employee, setEmployee] = useState()


   const { personalId, employmentId } = useParams();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const employment = await UpdateService.getEmploymenyById(employmentId);
                const personal = await UpdateService.getPersonalById(personalId);
                const employee = await UpdateService.getEmployeeById(employmentId);
                const benefitPlans = await UpdateService.findAllBenefit();
                const payRates = await UpdateService.findAllPayrates();

                setEmployment(employment);
                setPersonal(personal);
                setEmployee(employee)
                setBenefitPlans(benefitPlans);
                setPayRates(payRates);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        fetchData();
    }, []);
    return employment ? (
        <>
            <div>Update</div>
            <Formik
                initialValues={{
                    personal: {
                        firstName: personal.current_FIRST_NAME,
                        lastName: personal.current_LAST_NAME,
                        middleInitial: personal.current_MIDDLE_NAME,
                        birthday: personal.birth_DATE,
                        ssn: personal.social_SECURITY_NUMBER,
                        driversLicense: personal.driver_LICENSE,
                        address1: personal.current_ADDRESS_1,
                        address2: personal.current_ADDRESS_2,
                        city: personal.current_CITY,
                        country: personal.current_COUNTRY,
                        zip: personal.current_ZIP,
                        gender: personal.current_GENDER,
                        email: personal.current_PERSONAL_EMAIL,
                        phoneNumber: personal.current_PHONE_NUMBER,
                        maritalStatus: personal.current_MARITAL_STATUS,
                        ethnicity: personal.ethnicity,
                        shareholderStatus: personal.shareholder_STATUS,
                        benefitPlanId: personal.benefit_PLAN_ID
                    },
                    employee: {
                        idEmployee: employee.idEmployee,
                        paidLastYear: employee.paidLastYear,
                        paidToDate: employee.paidToDate,
                        payRate: employee.payRate,
                        idPayRate: employee.idPayRates,
                        ssn: employee.ssn,
                        vacationDays: employee.vacationDays
                    },
                    employment: {
                        employmentCode: employment.employment_CODE,
                        employmentStatus: employment.employment_STATUS,
                        hireDateForWorking: employment.hire_DATE_FOR_WORKING,
                        workersCompCode: employment.workers_COMP_CODE,
                        terminationDate: employment.termination_DATE,
                        rehireDateForWorking: employment.rehire_DATE_FOR_WORKING,
                        lastReviewDate: employment.last_REVIEW_DATE,
                        daysWorkingPerMonth: employment.number_DAYS_REQUIREMENT_OF_WORKING_PER_MONTH
                    }
                }}

                validationSchema={Yup.object({

                })}

                onSubmit={async (values) => {
                    try {
                        const response = await UpdateService.save(employee.employeeNumber, personal.personal_ID, employment.employment_ID, values);

                        if (response != null) {
                            setErrorData(response)
                            toast('Lỗi! Thêm mới thất bại');
                        } else {
                            setErrorData({})
                            toast('Thêm mới thành công!!!!');
                            setTimeout(() => {
                                navigate("/home")
                            }, 1000)
                        }
                        console.log(errorData)
                    } catch (error) {
                        toast('Lỗi! thêm mới thất bại');
                        console.log(error)
                    }
                }}
            >
                <Form>

                    {/* Personal */}

                    <div>
                        <label htmlFor="firstName">First name (<span
                            className="text-danger">*</span>):</label>
                        <Field type="text" className="form-control" id="firstName" name="personal.firstName" />
                        <ErrorMessage name="firstName" className="text-danger" component="p" />
                    </div>

                    <div>
                        <label htmlFor="lastName">Last name (<span
                            className="text-danger">*</span>):</label>
                        <Field type="text" className="form-control" id="lastName" name="personal.lastName" />
                        <ErrorMessage name="lastName" className="text-danger" component="p" />
                    </div>

                    <div>
                        <label htmlFor="middleInitial">Middle name (<span
                            className="text-danger">*</span>):</label>
                        <Field type="text" className="form-control" id="middleInitial" name="personal.middleInitial" />
                        <ErrorMessage name="middleInitial" className="text-danger" component="p" />
                    </div>

                    <div>
                        <label htmlFor="birthday">Date of birth(<span
                            className="text-danger">*</span>):</label>
                        <Field type="date" className="form-control" id="birthday" name="personal.birthday" />
                        <ErrorMessage name="birthday" className="text-danger" component="p" />
                    </div>

                    <div>
                        <label htmlFor="ssn">Social Security Number (<span
                            className="text-danger">*</span>):</label>
                        <Field type="text" className="form-control" id="ssn" name="personal.ssn" />
                        <ErrorMessage name="ssn" className="text-danger" component="p" />
                    </div>

                    <div>
                        <label htmlFor="driversLicense">Drivers License (<span
                            className="text-danger">*</span>):</label>
                        <Field type="text" className="form-control" id="driversLicense" name="personal.driversLicense" />
                        <ErrorMessage name="driversLicense" className="text-danger" component="p" />
                    </div>

                    <div>
                        <label htmlFor="address1">Address1 (<span
                            className="text-danger">*</span>):</label>
                        <Field type="text" className="form-control" id="address1" name="personal.address1" />
                        <ErrorMessage name="address1" className="text-danger" component="p" />
                    </div>

                    <div>
                        <label htmlFor="address2">Address2 (<span
                            className="text-danger">*</span>):</label>
                        <Field type="text" className="form-control" id="address2" name="personal.address2" />
                        <ErrorMessage name="address2" className="text-danger" component="p" />
                    </div>

                    <div>
                        <label htmlFor="city">City (<span
                            className="text-danger">*</span>):</label>
                        <Field type="text" className="form-control" id="city" name="personal.city" />
                        <ErrorMessage name="city" className="text-danger" component="p" />
                    </div>

                    <div>
                        <label htmlFor="country">Country (<span
                            className="text-danger">*</span>):</label>
                        <Field type="text" className="form-control" id="country" name="personal.country" />
                        <ErrorMessage name="country" className="text-danger" component="p" />
                    </div>

                    <div>
                        <label htmlFor="zip">Zip (<span
                            className="text-danger">*</span>):</label>
                        <Field type="text" className="form-control" id="zip" name="personal.zip" />
                        <ErrorMessage name="zip" className="text-danger" component="p" />
                    </div>

                    <div>
                        <label htmlFor="gender">Gender (<span
                            className="text-danger">*</span>):</label>
                        <Field as="select" className="form-control" id="gender" name="personal.gender">
                            <option value={true}>Male</option>
                            <option value={false}>Female</option>
                        </Field>

                        <ErrorMessage name="gender" className="text-danger" component="p" />
                    </div>

                    <div>
                        <label htmlFor="email">Email (<span
                            className="text-danger">*</span>):</label>
                        <Field type="text" className="form-control" id="email" name="personal.email" />
                        <ErrorMessage name="email" className="text-danger" component="p" />
                    </div>

                    <div>
                        <label htmlFor="phoneNumber">Phone Number (<span
                            className="text-danger">*</span>):</label>
                        <Field type="text" className="form-control" id="phoneNumber" name="personal.phoneNumber" />
                        <ErrorMessage name="phoneNumber" className="text-danger" component="p" />
                    </div>

                    <div>
                        <label htmlFor="maritalStatus">Marital Status (<span
                            className="text-danger">*</span>):</label>
                        <Field as="select" className="form-control" id="maritalStatus" name="personal.maritalStatus">
                            <option value="Single">Single</option>
                            <option value="Married">Married</option>
                        </Field>
                        <ErrorMessage name="maritalStatus" className="text-danger" component="p" />
                    </div>

                    <div>
                        <label htmlFor="ethnicity">Ethnicity (<span
                            className="text-danger">*</span>):</label>
                        <Field type="text" className="form-control" id="ethnicity" name="personal.ethnicity" />
                        <ErrorMessage name="ethnicity" className="text-danger" component="p" />
                    </div>

                    <div>
                        <label htmlFor="shareholderStatus">Shareholder Status (<span
                            className="text-danger">*</span>):</label>
                        <Field as="select" className="form-control" id="shareholderStatus" name="personal.shareholderStatus">
                            <option value={true}>Yes</option>
                            <option value={false}>No</option>
                        </Field>
                        <ErrorMessage name="shareholderStatus" className="text-danger" component="p" />
                    </div>

                    <div>
                        <label htmlFor="benefitPlans">Benefit Plans (<span
                            className="text-danger">*</span>):</label>
                        <Field as="select" className="form-control" id="benefitPlans" name="personal.benefitPlans.benefitPlanId">
                            {benefitPlans && benefitPlans.length > 0 ? (
                                benefitPlans.map((benefit) => (
                                    <option key={benefit.benefitPlanId} value={benefit.benefitPlanId}>{benefit.planName}</option>
                                ))
                            ) : (
                                <option value="" disabled>Not found</option>
                            )}
                        </Field>
                    </div>

                    {/* Employee */}

                    <div>
                        <label htmlFor="idEmployee">IdEmployee (<span
                            className="text-danger">*</span>):</label>
                        <Field type="text" className="form-control" id="idEmployee" name="employee.idEmployee" />
                        <ErrorMessage name="idEmployee" className="text-danger" component="p" />
                    </div>

                    <div>
                        <label htmlFor="paidLastYear">Paid Last Year (<span
                            className="text-danger">*</span>):</label>
                        <Field type="text" className="form-control" id="paidLastYear" name="employee.paidLastYear" />
                        <ErrorMessage name="paidLastYear" className="text-danger" component="p" />
                    </div>

                    <div>
                        <label htmlFor="paidToDate">Paid To Date (<span
                            className="text-danger">*</span>):</label>
                        <Field type="text" className="form-control" id="paidToDate" name="employee.paidToDate" />
                        <ErrorMessage name="paidToDate" className="text-danger" component="p" />
                    </div>

                    <div>
                        <label htmlFor="payRate">Pay Rate (<span
                            className="text-danger">*</span>):</label>
                        <Field type="text" className="form-control" id="payRate" name="employee.payRate" />
                        <ErrorMessage name="payRate" className="text-danger" component="p" />
                    </div>

                    <div>
                        <label htmlFor="payRates">Pay Rates (<span
                            className="text-danger">*</span>):</label>
                        <Field as="select" className="form-control" id="payRates" name="employee.payRates">
                            {payRates && payRates.length > 0 ? (
                                payRates.map((payRate) => (
                                    <option key={payRate.idPayRate} value={payRate.idPayRate}>{payRate.payRateName}</option>
                                ))
                            ) : (
                                <option value="" disabled>Not found</option>
                            )}
                        </Field>
                    </div>

                    <div>
                        <label htmlFor="ssn">SSN(<span
                            className="text-danger">*</span>):</label>
                        <Field type="text" className="form-control" id="ssn" name="employee.ssn" />
                        <ErrorMessage name="ssn" className="text-danger" component="p" />
                    </div>

                    <div>
                        <label htmlFor="vacationDays">Vacation Days(<span
                            className="text-danger">*</span>):</label>
                        <Field type="text" className="form-control" id="vacationDays" name="employee.vacationDays" />
                        <ErrorMessage name="vacationDays" className="text-danger" component="p" />
                    </div>

                    {/* Employment */}

                    <div>
                        <label htmlFor="employmentCode">Employment code(<span
                            className="text-danger">*</span>):</label>
                        <Field type="text" className="form-control" id="employmentCode" name="employment.employmentCode" />
                        <ErrorMessage name="employmentCode" className="text-danger" component="p" />
                    </div>

                    <div>
                        <label htmlFor="employmentStatus">Employment Status(<span
                            className="text-danger">*</span>):</label>
                        <Field type="text" className="form-control" id="employmentStatus" name="employment.employmentStatus" />
                        <ErrorMessage name="employmentStatus" className="text-danger" component="p" />
                    </div>

                    <div>
                        <label htmlFor="hireDateForWorking">Hire Date For Working(<span
                            className="text-danger">*</span>):</label>
                        <Field type="date" className="form-control" id="hireDateForWorking" name="employment.hireDateForWorking" />
                        <ErrorMessage name="hireDateForWorking" className="text-danger" component="p" />
                    </div>

                    <div>
                        <label htmlFor="workersCompCode">Workers CompCode(<span
                            className="text-danger">*</span>):</label>
                        <Field type="text" className="form-control" id="workersCompCode" name="employment.workersCompCode" />
                        <ErrorMessage name="workersCompCode" className="text-danger" component="p" />
                    </div>

                    <div>
                        <label htmlFor="terminationDate">Termination Date(<span
                            className="text-danger">*</span>):</label>
                        <Field type="date" className="form-control" id="terminationDate" name="employment.terminationDate" />
                        <ErrorMessage name="terminationDate" className="text-danger" component="p" />
                    </div>

                    <div>
                        <label htmlFor="rehireDateForWorking">Rehire Date For Working(<span
                            className="text-danger">*</span>):</label>
                        <Field type="date" className="form-control" id="rehireDateForWorking" name="employment.rehireDateForWorking" />
                        <ErrorMessage name="rehireDateForWorking" className="text-danger" component="p" />
                    </div>

                    <div>
                        <label htmlFor="lastReviewDate">Last Review Date(<span
                            className="text-danger">*</span>):</label>
                        <Field type="date" className="form-control" id="lastReviewDate" name="employment.lastReviewDate" />
                        <ErrorMessage name="lastReviewDate" className="text-danger" component="p" />
                    </div>

                    <div>
                        <label htmlFor="daysWorkingPerMonth">Days Working Per Month(<span
                            className="text-danger">*</span>):</label>
                        <Field type="text" className="form-control" id="daysWorkingPerMonth" name="employment.daysWorkingPerMonth" />
                        <ErrorMessage name="daysWorkingPerMonth" className="text-danger" component="p" />
                    </div>

                    <div>
                        <button type='submit'>Update</button>
                    </div>
                </Form>
            </Formik>
        </>
    ) : (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: '80vh',
            fontSize: '36px',
            color: '#87AA74',
            textTransform: 'uppercase',
            textAlign: 'center',
            fontFamily: 'Arial, sans-serif',
        }}>
            <div>
                <div style={{
                    fontSize: '120px',
                    fontWeight: 'bold',
                    marginRight: '20px',
                }}>404</div>
                <h2>NOT FOUND</h2>
            </div>
        </div>
    );
}