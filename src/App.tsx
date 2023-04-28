import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from './pages/auth/login'
import SignUp from './pages/auth/signup'
import DashboardRole from './pages/admin-panel/role/dashboard'
import DashboardEmployee from './pages/admin-panel/employee/dashboard'
import DashboardCustomer from './pages/admin-panel/customer/dashboard'
import DashboardTask from './pages/admin-panel/task/dashboard'
import DashboardUser from './pages/admin-panel/user/dashboard'
import DashboardEmployeeAccess from './pages/employee-panel/dashboard'
import ReportsDashboard from './pages/admin-panel/reports/dashboard'

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
            <Route element={<ReportsDashboard/>} path='/admin/report/:id/:strategy'/>
            <Route element={<Login />} path='/'/>
            <Route element={<SignUp/>} path='/auth/signup' />
       </Routes>
       </>
    )
}