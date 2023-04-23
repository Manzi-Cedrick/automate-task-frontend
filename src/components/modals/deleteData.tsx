import React, { useEffect, useState } from 'react'
import * as ReactDOM from 'react-dom';
import { FaCross } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import AlbumService from '../../services/album.service';
import { notifyInfo, notifySuccess } from '../../utils/alerts';

const DeleteData = ({ showModal, onClose, id }: { showModal: Boolean, onClose: any, id: any }) => {
    const navigate = useNavigate();
    const [isBrowser, setBrowser] = useState<Boolean>(false)
    useEffect(() => {
        setBrowser(true)
    }, []);
    const handleOnDelete = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const albumService = new AlbumService();
            const data = await albumService.deleteAlbum(id);
            let message = data?.data?.message;
            if (message === 'Album deleted successfully') {
                notifySuccess(message);
                onClose();
                window.location.reload();
            } else {
                notifyInfo(message);
            }
        } catch (error: any) {
            console.log(error)
            return;
        }
    }
    const ModalContent = showModal ? (
        <div className='bg-[#000000cb] min-h-screen flex place-items-center justify-center absolute top-0 bottom-0 left-0 right-0'>
            <div className='bg-slate-800 text-white py-5 px-10 w-[36vw] rounded-sm'>
                <div className='flex justify-between place-items-center py-2'>
                    <h1>Delete song.</h1>
                    <div>
                        <button onClick={onClose} className='bg-slate-900 h-12 w-12 text-2xl rounded-full hover:bg-slate-300 duration-500'>
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                </div>
                <div className='modal-body text-slate-500 py-5 text-[12px]'>
                    <p>Delete the song from the list. In this example, we're adding an event listener to the delete button that will remove the text content of the paragraph when the button is clicked. Note that this will not remove the paragraph element itself, just its text content. If you want to remove the entire paragraph element, you can use the remove() method instead of setting textContent to an empty string. </p>
                </div>
                <form onSubmit={handleOnDelete}>
                    <div className='flex justify-between py-6'>
                        <button type="submit" className="text-white hover:font-bold bg-main px-20 focus:ring-4 focus:outline-none font-medium rounded-md text-sm w-full sm:w-auto py-4 text-center dark:bg-main dark:hover:bg-teal-900 duration-500 dark:focus:ring-slate-50">Delete</button>
                        <button onClick={onClose} type="button" className="text-white hover:font-bold bg-slate-500 px-20 hover:bg-white focus:ring-4 focus:outline-none font-medium rounded-md text-sm w-full sm:w-auto py-4 text-center dark:bg-slate-500 dark:hover:bg-slate-900 dark:focus:ring-slate-600 duration-500">Reset</button>
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

export default DeleteData