
import './Navbar.css'
import { Link } from 'react-router-dom'
import { getUser, logOut } from '../../service/AuthService'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function Navbar() {
    const navigate = useNavigate();
    const curUser = getUser();



    const logout = () => {
        logOut();
        navigate('/')
        window.location.reload();


    }

   
    return (
        <header>
            <nav className="navbar">
                <Link to='/' className='home'>
                    <div className="nav-item-name">
                        <span className="icon-e">T</span>
                        <span className="commerce">est</span>
                    </div>
                </Link>
                {!curUser && <Link to='/' className='login'>
                    <div className="nav-login">
                        Login
                    </div></Link>}
                {!curUser && <Link to='/reg' className='login'>
                    <div className="nav-login">
                        Registration
                    </div>
                </Link>}
                {curUser && <Link to='/addCommand' className='login' >
                    <div className="nav-login">
                        Add command
                    </div></Link>}
                {curUser && <Link to='/getByCommand' className='login' >
                    <div className="nav-login">
                        Get by command
                    </div>
                </Link>}
                {curUser && <Link to='/logout' className='login'>
                    <div className="nav-login" onClick={logout}>
                        LogOut
                    </div>
                </Link>}



            </nav>
        </header>
    );
}


export default Navbar