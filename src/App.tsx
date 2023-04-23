import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Album from './pages/albums'
import CreateAlbum from './pages/createAlbum'
import CreateSong from './pages/createSong'
import Genre from './pages/genre'
import GenreDetails from './pages/genreDetails'
import Songs from './pages/songs'
import UpdateAlbum from './pages/updateAlbum'
import UpdateSong from './pages/updateSong'
import Login from './pages/auth/login'
import SignUp from './pages/auth/signup'
import DashboardRole from './pages/admin-panel/role/dashboard'
import DashboardEmployee from './pages/admin-panel/employee/dashboard'
import DashboardCustomer from './pages/admin-panel/customer/dashboard'
import DashboardTask from './pages/admin-panel/task/dashboard'
import DashboardUser from './pages/admin-panel/user/dashboard'
import DashboardEmployeeAccess from './pages/employee-panel/dashboard'

export const App = () => {
    return (
       <>
       <Routes>
            <Route element={<DashboardEmployee/>} path='/admin/dashboard'/>
            <Route element={<DashboardRole/>} path='/admin/role'/>
            <Route element={<DashboardCustomer/>} path='/admin/customer'/>
            <Route element={<DashboardTask/>} path='/admin/task'/>
            <Route element={<DashboardUser/>} path='/admin/user'/>
            <Route element={<DashboardEmployeeAccess/>} path='/employee/dashboard'/>
            <Route element={<Album/>} path='/albums'/>
            <Route element={<Songs/>} path='/songs'/>
            <Route element={<Genre/>} path='/music/genre'/>
            <Route element={<CreateSong/>} path='/songs/new'/>
            <Route element={<UpdateSong />} path='/songs/:id/update' />
            <Route element={<CreateAlbum />} path='/album/new'/>
            <Route element={<UpdateAlbum />} path='/albums/:id/update' />
            <Route element={<GenreDetails />} path='/genre/:id/details' />
            <Route element={<Login />} path='/auth/login'/>
            <Route element={<SignUp/>} path='/auth/signup' />
       </Routes>
       </>
    )
}