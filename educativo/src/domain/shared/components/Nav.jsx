import React, { useRef, useContext } from 'react'
import { Menubar } from 'primereact/menubar';
import { OverlayPanel } from 'primereact/overlaypanel';
import { Avatar } from 'primereact/avatar';
import { Divider } from 'primereact/divider';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

export default function Nav() {

    const {user} = useContext(AuthContext);
    console.log(user);
    const op = useRef(null);
    const setLocation = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('authToken');
        console.clear();
        setLocation('/');
      };

    return (
        <nav>
            <label htmlFor="">{user?.lName} {user?.mName}</label>
            <Avatar image="logo.png" shape="circle" onClick={(e) => op.current.toggle(e)}/>

            <OverlayPanel ref={op}>
                <div><i className='pi pi-user icono'></i> My profile</div>
                <div className='logout' onClick={handleLogout}> <i className='pi pi-sign-out'></i> Logout</div>
            </OverlayPanel>
        </nav>
    )
}
