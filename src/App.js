import './App.css';
import {Routes, Route} from "react-router-dom";
import Header from "./components/main/header/header"
import Footer from "./components/main/footer/footer"
import Home from "./components/main/home";
import Register from "./components/register/register/Register";
import RegisterConfig from "./components/register/register/RegisterConfig";
import CreateAccount from "./components/register/register/CreateAccount";
import Login from "./components/register/Login/Login";
import ForgotPassword from "./components/register/Forgot/ForgotPassword";
import ChangePassword from "./components/register/Forgot/ChangePassword";
import ConfigForgotPassword from "./components/register/Forgot/ConfigForgotPassword";
import Employees from "./pages/employees/employees";
import Branches from "./pages/branches/branches";
import Departments from "./pages/departments/departments";
import DepartmentsPage from "./pages/departments/departmentsPage";
import Jonele from "./pages/departments/jonele";
import EmployeePage from "./pages/employees/employeePage";

function App() {
    return (
        <>
            {/*<Header/>*/}
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/register' element={<Register/>}/>
                <Route path='/register/config' element={<RegisterConfig/>}/>
                <Route path='/create-account' element={<CreateAccount/>}/>
                <Route path='/login' element={<Login/>}/>
                <Route path='/forgot-password' element={<ForgotPassword/>}/>
                <Route path='/change-password' element={<ChangePassword/>}/>
                <Route path='/config-forgot-password' element={<ConfigForgotPassword/>}/>

                <Route path='/employees' element={<Employees/>}/>
                <Route path='/employee-page' element={<EmployeePage/>}/>
                <Route path='/branches' element={<Branches/>}/>
                <Route path='/departments' element={<Departments/>}/>
                <Route path='/departments/page' element={<DepartmentsPage/>}/>
                {/*<Route path='/settings' element={<Settings/>}/>*/}
                {/*<Route path='/profile' element={<Profile/>}/>*/}
                {/*<Route path='/rate' element={<Rate/>}/>*/}

            </Routes>
            {/*<Footer/>*/}
        </>

    );
}

export default App;