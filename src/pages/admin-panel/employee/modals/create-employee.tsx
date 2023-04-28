import React, { useEffect, useState } from 'react'
import * as ReactDOM from 'react-dom';
import { IRole, PRIVILEGE, STATUS } from '../../../../utils/custom.data';
import service from '../../../../services/admin.service';
import { notifyError, notifySuccess } from '../../../../utils/alerts';
import authService from '../../../../services/auth.service';

const CreateEmployee = ({ showModal, onClose }: { showModal: Boolean, onClose: any }) => {
    const [isBrowser, setBrowser] = useState<Boolean>(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        status: '',
        role: '',
        privilege: PRIVILEGE.EMPLOYEE
    })
    const [roleArr, setRoleValues] = useState<IRole[]>([])
    useEffect(() => {
        setBrowser(true)
        async function fetchRoles() {
            try {
                const roles = await service.getRoles();
                setRoleValues(roles?.data?.roles)
            } catch (error: any) {
                const ERROR_MESSAGE = error.response ? error.response?.data?.error || "Not Fetched, try again!" : error.error;
                notifyError(ERROR_MESSAGE);
            }
        }
        fetchRoles()
    }, []);
    const handleOnSave = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            let res = await authService.signup(formData);
            if (res.status === 200) {
                notifySuccess("Successfully Created the service");
                setFormData({
                    name: '',
                    email: '',
                    password: '',
                    status: '',
                    role: '',
                    privilege: PRIVILEGE.EMPLOYEE
                });
                onClose();
            }
        } catch (error: any) {
            notifyError(error)
            return;
        }
    }
    const ModalContent = showModal ? (
        <div className='bg-[#0000004d] min-h-screen flex place-items-center justify-center absolute z-20 top-0 bottom-0 left-0 right-0'>
            <div className='bg-white text-black py-2 px-10 w-[36vw] rounded-sm'>
                <div className='flex justify-between place-items-center py-2'>
                    <h1>Create Employee.</h1>
                    <div>
                        <button onClick={onClose} className='bg-slate-100 text-main h-12 w-12 text-2xl rounded-full hover:bg-slate-300 duration-500'>
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                </div>
                <div className='modal-body text-slate-500'>
                    <div>
                        <label className="block text-gray-700 text-[12px] py-2">
                            Name
                        </label>
                        <input value={formData.name} onChange={(e) => { setFormData({ ...formData, name: e.target.value }) }} className="shadow appearance-none bg-inputG border rounded w-full py-3 text-[10px] px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Enter employee name" />
                    </div>
                    <div>
                        <label className="block text-gray-700 text-[12px] py-2">
                            Email
                        </label>
                        <input value={formData.email} onChange={(e) => { setFormData({ ...formData, email: e.target.value }) }} className="shadow appearance-none bg-inputG border rounded w-full py-3 text-[10px] px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Enter employee email" />
                    </div>
                    <div>
                        <label className="block text-gray-700 text-[12px] py-2">
                            Password
                        </label>
                        <input value={formData.password} onChange={(e) => { setFormData({ ...formData, password: e.target.value }) }} className="shadow appearance-none bg-inputG border rounded w-full py-3 text-[10px] px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="Enter employee password" />
                    </div>
                    <div>
                        <label className="block text-gray-700 text-[12px] py-2">
                            Role
                        </label>
                        <select onChange={(e) => setFormData({ ...formData, role: e.target.value })} className="shadow appearance-none bg-inputG border rounded w-full py-3 text-[10px] px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                            <option defaultValue={''}>Select Valid Option</option>
                            {roleArr.map((role: IRole) => (
                                <option value={role?.id}>{role?.value} {role?.fee}</option>
                            ))}
                        </select>
                    </div>
                    <div>
                        <label className="block text-gray-700 text-[12px] py-2">
                            Status
                        </label>
                        <select onChange={(e) => setFormData({ ...formData, status: e.target.value })} className="shadow appearance-none bg-inputG border rounded w-full py-3 text-[10px] px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                            <option value={'none'}>Choose Status </option>
                            <option value={STATUS.ACTIVE}>Active </option>
                            <option value={STATUS.INACTIVE}>Inactive </option>
                        </select>
                    </div>
                    <div>
                        <small className='text-[8px] py-1 text-red-500'>Enter Valid info</small>
                    </div>
                </div>
                <form onSubmit={handleOnSave}>
                    <div className='flex justify-between py-4'>
                        <button type="submit" className="text-white bg-main px-20 focus:ring-4 focus:outline-none font-medium rounded-md text-[12px] w-full sm:w-auto py-3 text-center dark:bg-main dark:hover:bg-white hover:text-main border-2 border-transparent hover:border-main transition-all duration-500 dark:focus:ring-slate-50">Save</button>
                        <button onClick={onClose} type="button" className="text-white bg-slate-500 px-20 hover:bg-white focus:ring-4 focus:outline-none font-medium rounded-md text-[12px] w-full sm:w-auto py-3 text-center dark:bg-slate-500 dark:hover:bg-slate-900 dark:focus:ring-slate-600 duration-500">Reset</button>
                    </div>
                </form>
            </div>
        </div>
    ) : null
    if (isBrowser) {
        return ReactDOM.createPortal(ModalContent, document.getElementById('modal-root') as HTMLElement)
    } else {
        return null
    }
}

export default CreateEmployee