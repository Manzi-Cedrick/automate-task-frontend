import Logo from '../assets/logo'
import { Link, useLocation } from 'react-router-dom'
import { sideBarArr, sideBarArrEmployee } from '../utils/pagedata'
const Sidebar = () => {
    const linkSet = sideBarArr;
    const route = useLocation();
    const changeHeader = (path: string) => {
        if (path === route.pathname) {
            return ` bg-main text-white font-bold`
        }
    }
    const role = "ADMIN"
    const verifyUser = () => {
        if (role === "ADMIN") {
            return sideBarArr;
        }
        return sideBarArrEmployee
    }
    return (
        <aside className='bg-[#F4F6F8] fixed top-0 left-0 z-10 border-r-2 border-gray-200 w-[20vw] min-h-screen flex px-2 flex-col'>
            <div className='flex gap-4 px-4 place-items-center flex-row py-6'>
                <Logo />
                <span className='font-bold text-2xl text-black'>Automate Bill</span>
            </div>
            <div className='py-4 flex flex-col group text-black gap-4'>
                {verifyUser().map((link: any) => (
                    <Link key={link.link_id} to={`${link.link_url}`} className={` py-4 hover:cursor-pointer duration-500 flex place-items-center px-8 hover:bg-white gap-8 rounded-md ${changeHeader(link.link_url)}`}>
                        {link.link_icon_name}
                        <span>{link.link_name}</span>
                    </Link>
                ))}
            </div>
        </aside>
    )
}

export default Sidebar