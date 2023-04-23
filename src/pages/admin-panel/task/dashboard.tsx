import React, { useEffect, useState } from 'react'
import { albumDataArr, songAlbumArr } from '../../../utils/album.data'
import AlbumService from '../../../services/album.service'
import SongService from '../../../services/song.service'
import Sidebar from '../../../components/Sidebar'
import Header from '../../../components/Header'
import CreateTask from './modals/create-task'


const Dashboard = () => {
    const [albumData, setalbumData] = useState<any>(albumDataArr)
    const [songData, setSongData] = useState<any>(songAlbumArr)
    const [showModal, setShowModal] = useState<boolean>(false)
    const fetchAlbums = async () => {
        const albumService = new AlbumService();
        const albums = await albumService.showAlbum();
        setalbumData(albums?.data?.albums);
    }
    const fetchSongs = async () => {
        const songService = new SongService()
        const songs = await songService.displaySongs();
        setSongData(songs?.data?.songs);
    }
    useEffect(() => {
        try {
            fetchAlbums();
            fetchSongs()
        } catch (error: any) {
            return error;
        }
    }, [])

    return (
        <div className='bg-white min-h-screen min-w-screen flex justify-start'>
            <Sidebar />
            <div className='py-4 sm:ml-80 w-[80vw] lg:p-8'>
                <Header />
                <div className='py-12'>
                    <div className='bg-music flex px-6  flex-col justify-center w-full h-[20vh] rounded-xl'>
                        <div className='text-white'>
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
                                <button className='bg-white text-main py-3 border-2 border-main duration-500 font-medium hover:bg-main hover:text-white text-[12px] px-8 rounded-md'>Print Report</button>
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
                                    {songData ? songData.map((song: any, i: number) => (
                                        <tr key={i + 1} className="border-b-2 hover:bg-slate-900 hover:cursor-pointer border-gray-500 text-[12px] font-semibold">
                                            <td className='text-center'>
                                                # {i + 1}
                                            </td>
                                            <td className='flex gap-8 py-3 justify-center place-items-center text-center'>
                                                <span>{song.title}</span>
                                            </td>
                                            <td className='text-center'>{song.artist}</td>
                                            <td className='text-center'>{song.length}</td>
                                            <td className='text-center'>{song.genre}</td>
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