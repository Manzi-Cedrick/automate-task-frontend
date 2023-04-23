import { FaPlay, FaChartPie, FaPlaystation, FaSignOutAlt, FaWordpress, FaDirections, FaBuysellads, FaTasks, FaUsers, FaList } from 'react-icons/fa'

export interface linkSide {
    link_name:string;
    link_url:string;
    link_icon_name:any;
    link_id:number;
}
export const sideBarArr :linkSide[] = [
{
    link_name:'Employee',
    link_url:'/admin/dashboard',
    link_icon_name: <FaWordpress/>,
    link_id:1
},{
    link_name:'Role',
    link_url:'/admin/role',
    link_icon_name:<FaDirections/>,
    link_id:2
},{
    link_name:'Customer',
    link_url:'/admin/customer',
    link_icon_name:<FaBuysellads/>,
    link_id:3
},{
    link_name:'Task',
    link_url:'/admin/task',
    link_icon_name:<FaTasks/>,
    link_id:4
},
{
    link_name:'User Management',
    link_url:'/admin/user',
    link_icon_name:<FaUsers/>,
    link_id:4
},{
    link_name:'Sign out',
    link_url:'/logout',
    link_icon_name:<FaSignOutAlt/>,
    link_id:5
}]
export const sideBarArrEmployee :linkSide[] = [
    {
        link_name:'Time-sheet',
        link_url:'/employee/dashboard',
        link_icon_name: <FaList/>,
        link_id:1
    },
    {
        link_name:'Profile',
        link_url:'/employee/user',
        link_icon_name:<FaUsers/>,
        link_id:2
    },{
        link_name:'Sign out',
        link_url:'/logout',
        link_icon_name:<FaSignOutAlt/>,
        link_id:3
    }]