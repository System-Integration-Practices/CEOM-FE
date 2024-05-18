import { Formik, Form, ErrorMessage, Field } from 'formik'
import * as Yup from 'yup'
import { toast } from "react-toastify";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from 'react';
import * as CreateService from '../../service/CreateService'
export const Create = () => {
    const [errorData, setErrorData] = useState({})
    const [benefitPlans, setBenefitPlans] = useState([])
    const [payRates, setPayRates] = useState([])
    // useEffect(() => {
    //     const getAllBenefit = async () => {
    //         const benefitPlans = await CreateService.findAllBenefit();
    //         setBenefitPlans(benefitPlans);
    //     }

    //     const getAllPayRates = async () => {
    //         const payRates = await CreateService.findAllPayrates();
    //         setPayRates(payRates);
    //     }

    //     getAllBenefit()
    //     getAllPayRates()
    //     console.log(benefitPlans)
    // }, [])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const [benefitPlans, payRates] = await Promise.all([
                    CreateService.findAllBenefit(),
                    CreateService.findAllPayrates()
                ]);
                setBenefitPlans(benefitPlans);
                setPayRates(payRates);
            } catch (error) {
                console.error("Network Error", error);
            }
        }

        fetchData();
    }, []);


    const navigate = useNavigate()

    return (
        <>
            <Formik
                initialValues={{
                    personal: {
                        firstName: "",
                        lastName: "",
                        middleName: "",
                        birthday: '',
                        ssn: "",
                        driversLicense: "",
                        address1: "",
                        address2: "",
                        city: "",
                        country: "",
                        zip: '',
                        gender: 1,
                        email: "",
                        phoneNumber: "",
                        maritalStatus: 1,
                        ethnicity: "",
                        shareholderStatus: 1,
                        benefitPlanId: 1
                    },
                    employee: {
                        idEmployee: '',
                        paidLastYear: '',
                        paidToDate: '',
                        payRate: '',
                        idPayRate: 1,
                        ssn: '',
                        vacationDays: ''
                    },
                    employment: {
                        employmentCode: '',
                        employmentStatus: '',
                        hireDateForWorking: '',
                        workersCompCode: '',
                        terminationDate: null,
                        rehireDateForWorking: null,
                        lastReviewDate: '',
                        daysWorkingPerMonth: ''
                    }
                }}

                validationSchema={Yup.object({

                })}

                onSubmit={async (values) => {
                    try {
                        console.log(values);
                        const response = await CreateService.save(values);

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
                        <label htmlFor="middleName">Middle name (<span
                            className="text-danger">*</span>):</label>
                        <Field type="text" className="form-control" id="middleName" name="personal.middleName" />
                        <ErrorMessage name="middleName" className="text-danger" component="p" />
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
                        <label htmlFor="gender">Gender (<span className="text-danger">*</span>):</label>
                        <Field as="select" className="form-control" id="gender" name="personal.gender">
                            <option value="true">Male</option>
                            <option value="false">Female</option>
                        </Field>

                        <ErrorMessage name="personal.gender" className="text-danger" component="p" />
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
                        <Field as="select" className="form-control" id="benefitPlans" name="personal.benefitPlanId">
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
                        <Field as="select" className="form-control" id="payRates" name="employee.idPayRate">
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
                        <button type='submit'>CREATE</button>
                    </div>
                </Form>
            </Formik>
        </>
    )
}