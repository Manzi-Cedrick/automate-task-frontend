import React, { useEffect, useState } from 'react'
import * as ReactDOM from 'react-dom';
import BasicTimeSheet from './basic-timesheet';
import AdvancedTimeSheet from './advanced-timesheet';

const CreateTimeSheet = ({ showModal, onClose }: { showModal: Boolean, onClose: any }) => {
    const [isBrowser, setBrowser] = useState<Boolean>(false);
    const [FormPageNumber, setFormPageNumber] = useState<number>(0);
    useEffect(() => {
        setBrowser(true)
    }, []);
    const PageDisplayForm = () => {
        if (FormPageNumber == 0) {
            return <BasicTimeSheet />
        } else {
            return <AdvancedTimeSheet />
        }
    }
    const handleOnSave = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {

        } catch (error: any) {
            console.log(error)
            return;
        }
    }
    const ModalContent = showModal ? (
        <div className='bg-[#0000004d] min-h-screen flex place-items-center justify-center absolute z-20 top-0 bottom-0 left-0 right-0'>
            <div className='bg-white text-black py-2 px-10 w-[36vw] rounded-sm'>
                <div className='flex justify-between place-items-center py-2'>
                    <h1>Create Timesheet.</h1>
                    <div>
                        <button onClick={onClose} className='bg-slate-100 text-main h-12 w-12 text-2xl rounded-full hover:bg-slate-300 duration-500'>
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                </div>
                <form onSubmit={handleOnSave}>
                    {PageDisplayForm()}
                    {FormPageNumber == 0 &&
                        <div className='flex justify-between py-4'>
                            <button onClick={onClose} type="button" className="text-white bg-slate-500 px-20 hover:bg-white focus:ring-4 focus:outline-none font-medium rounded-md text-[12px] w-full sm:w-auto py-3 text-center dark:bg-slate-500 dark:hover:bg-slate-900 dark:focus:ring-slate-600 duration-500">Reset</button>
                            <button onClick={() => setFormPageNumber(1)} type="button" className="text-white bg-main px-20 focus:ring-4 focus:outline-none font-medium rounded-md text-[12px] w-full sm:w-auto py-3 text-center dark:bg-main dark:hover:bg-white hover:text-main border-2 border-transparent hover:border-main transition-all duration-500 dark:focus:ring-slate-50">Next</button>
                        </div>
                    }
                    {FormPageNumber == 1 &&
                        <div className='flex justify-between py-4'>
                            <button onClick={() => setFormPageNumber(0)} type="button" className="text-white bg-slate-500 px-20 hover:bg-white focus:ring-4 focus:outline-none font-medium rounded-md text-[12px] w-full sm:w-auto py-3 text-center dark:bg-slate-500 dark:hover:bg-slate-900 dark:focus:ring-slate-600 duration-500">Previous</button>
                            <button type="submit" className="text-white bg-main px-20 focus:ring-4 focus:outline-none font-medium rounded-md text-[12px] w-full sm:w-auto py-3 text-center dark:bg-main dark:hover:bg-white hover:text-main border-2 border-transparent hover:border-main transition-all duration-500 dark:focus:ring-slate-50">Save</button>
                        </div>
                    }
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

export default CreateTimeSheet