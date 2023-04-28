import React, { useEffect, useState } from 'react'
import Sidebar from '../../../components/Sidebar'
import Header from '../../../components/Header'
import CreateTask from './modals/create-task'
import { ITask } from '../../../utils/custom.data'
import service from '../../../services/admin.service'
import { notifyError } from '../../../utils/alerts'


const Dashboard = () => {
    const [showModal, setShowModal] = useState<boolean>(false)
    const [taskArr, setTaskArr] = useState<ITask[]>([])
    useEffect(() => {
        async function fetchTasks() {
            try {
                const tasks = await service.showTasks();
                setTaskArr(tasks?.data?.tasks)
            } catch (error: any) {
                const ERROR_MESSAGE = error.response ? error.response?.data?.error || "Not Fetched, try again!" : error.error;
                notifyError(ERROR_MESSAGE);
            }
        }
        fetchTasks()
    }, []);

    return (
        <div className='bg-white min-h-screen min-w-screen flex justify-start'>
            <Sidebar />
            <div className='py-4 sm:ml-80 w-[80vw] lg:p-8'>
                <Header />
                <div className='py-12'>
                    <div className='border-slate-300 border-2 flex px-6 border-dashed flex-col justify-center w-full h-[20vh] rounded-xl'>
                        <div className='text-black'>
                            <div className='py-6'>
                                <h1 className='font-bold text-4xl'>Task Referal Page!</h1>
                                <p className='text-gray-500'>Live Automated Billing System</p>
                            </div>
                        </div>
                    </div>
                    <div className='w-full'>
                        <div className='flex place-items-center justify-between'>
                            <h1 className='py-6 text-black'>Task 's list</h1>
                            <div className='flex gap-3'>
                                <button onClick={() => setShowModal(true)} className='bg-main text-white py-3 border-2 border-main duration-500 font-medium hover:bg-transparent hover:text-main text-[12px] px-8 rounded-md'>New Task</button>
                            </div>
                            {showModal && <CreateTask showModal={showModal} onClose={() => setShowModal(false)} />}
                        </div>
                        <div>
                            <table className=' w-full'>
                                <thead>
                                    <tr className='text-gray-500 outline-2 outline-dashed h-12 border-gray-500 text-[12px]'>
                                        <th>#</th>
                                        <th>Task Name</th>
                                        <th>Sub-task Name </th>
                                        <th>Actions </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {taskArr ? taskArr.map((task: ITask, i: number) => (
                                        <tr key={i + 1} className={`${i % 2 === 0 ? 'bg-slate-100' : ''} border-b-2 hover:bg-slate-50 hover:cursor-pointer border-gray-100 text-[12px]`}>
                                            <td className='text-center'>
                                                # {i + 1}
                                            </td>
                                            <td className='flex gap-8 py-3 justify-center place-items-center text-center'>
                                                <span>{task.task}</span>
                                            </td>
                                            <td className='text-center'>{task.sub_task}</td>
                                            <td className='text-center'>{task.status}</td>
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

export default Dashboard