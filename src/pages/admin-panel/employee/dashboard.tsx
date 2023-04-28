import React, { useEffect, useState } from 'react'
import Sidebar from '../../../components/Sidebar'
import Header from '../../../components/Header'
import CreateEmployee from './modals/create-employee'
import RouteProtection from '../../../utils/route_protection'
import { IEmployee, employeeArrState0 } from '../../../utils/custom.data'
import service from '../../../services/admin.service'
import { useNavigate } from 'react-router-dom'

const Dashboard = () => {
    const [showModal, setShowModal] = useState<boolean>(false)
    let [employeeArr, setEmployeeArr] = useState<IEmployee[]>(employeeArrState0);
    const navigate = useNavigate()
    const fetchEmployeeInfos = async () => {
        const data = await service.getEmployee();
        setEmployeeArr(data?.data?.employees);
    }
    useEffect(() => {
        try {
            fetchEmployeeInfos();
        } catch (error: any) {
            return error;
        }
    }, [])
    const handleNavigateReport = (id: string) => {
        return navigate(`/admin/report/${id}/EMPLOYEE`)
    }
    return (
        <div className='bg-white min-h-screen min-w-screen relative flex justify-start'>
            <Sidebar />
            <div className='py-4 sm:ml-80 w-[80vw] lg:p-8'>
                <Header />
                <div className='py-12'>
                    <div className='border-slate-300 border-2 flex px-6 border-dashed flex-col justify-center w-full h-[20vh] rounded-xl'>
                        <div className='text-black'>
                            <div className='py-6'>
                                <h1 className='font-bold text-4xl'>Employee Referal Page!</h1>
                                <p className='text-gray-500'>Live Automated Billing System</p>
                            </div>
                        </div>
                    </div>
                    <div className='w-full'>
                        <div className='flex place-items-center justify-between'>
                            <h1 className='py-6 text-black'>Employee 's list</h1>
                            <div className='flex gap-3'>
                                <button onClick={() => setShowModal(true)} className='bg-main text-white py-3 border-2 border-main duration-500 font-medium hover:bg-transparent hover:text-main text-[12px] px-8 rounded-md'>New Employee</button>
                            </div>
                            {showModal && <CreateEmployee showModal={showModal} onClose={() => setShowModal(false)} />}
                        </div>
                        <div>
                            <table className=' w-full'>
                                <thead>
                                    <tr className='text-slate-400 outline-2 outline-dashed h-12 border-gray-500 text-[12px]'>
                                        <th>#</th>
                                        <th>Name</th>
                                        <th>Email </th>
                                        <th>Role</th>
                                        <th>Status</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {employeeArr ? employeeArr.map((employee: IEmployee, i: number) => ( 
                                        <tr onClick={() => handleNavigateReport(employee.id)} key={i + 1} className={`${i % 2 === 0 ? 'bg-slate-100' : ''} border-b-2 hover:bg-slate-50 hover:cursor-pointer border-gray-100 text-[12px]`}>
                                            <td className='text-center'>
                                                # {i + 1}
                                            </td>
                                            <td className='flex gap-8 py-3 justify-center place-items-center text-center'>
                                                <span>{employee.name}</span>
                                            </td>
                                            <td className='text-center'>{employee?.email}</td>
                                            <td className='text-center'>{''}</td>
                                            <td className='text-center'>{employee.status}</td>
                                        </tr>
                                    )) :
                                        <tr className='text-main text-[12px]'>
                                            <td>No Data</td>
                                        </tr>
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RouteProtection(Dashboard)