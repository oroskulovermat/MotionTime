import './App.css';
import {Routes, Route} from "react-router-dom";
import Home from "./components/pages/Home/Home";
import Register from "./components/register/register/Register";
import RegisterConfig from "./components/register/register/RegisterConfig";
import CreateAccount from "./components/register/register/CreateAccount";
import Login from "./components/register/Login/Login";
import ForgotPassword from "./components/register/Forgot/ForgotPassword";
import ChangePassword from "./components/register/Forgot/ChangePassword";
import ConfigForgotPassword from "./components/register/Forgot/ConfigForgotPassword";
import Employees from "./components/pages/Employees/employees";
import Branches from "./components/pages/Branches/Branches";
import Departments from "./components/pages/Departments/Departments";
import Reports from "./components/pages/Reports/Reports";
import Settings from "./components/pages/Settings/Settings";
import Profile from "./components/pages/Profile/Profile";
import Rate from "./components/pages/Rate/Rate";
// import Burger from "./components/pages/burger"
function App() {
    return (
        <>
            {/*<Burger/>*/}
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
                <Route path='/branches' element={<Branches/>}/>
                <Route path='/departments' element={<Departments/>}/>
                <Route path='/reports' element={<Reports/>}/>
                <Route path='/settings' element={<Settings/>}/>
                <Route path='/profile' element={<Profile/>}/>
                <Route path='/rate' element={<Rate/>}/>
            </Routes>
        </>

    );
}

export default App;