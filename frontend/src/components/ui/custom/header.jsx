import { UserButton, useUser } from '@clerk/clerk-react';
import { Link } from 'react-router-dom';
import React from 'react';
import "./header.css"; 

function Header() {
    const { user, isSignedIn } = useUser();

    return (
        <div className="ahmat p-3 px-5 flex justify-between shadow-md">
            <img src="/logo.svg" width={50} height={50} alt="Logo" />
            
            {isSignedIn ? (
                <div className="flex items-center">
                    <button className="mr-4">Dashboard</button>
                    <UserButton />
                </div>
            ) : (
                <div className="flex items-center">
                    <Link to={"/auth/sign-in"}> 
                        <button className="btn-primary">Get Started</button>
                    </Link>
                </div>
            )}
        </div>
    );
}

export default Header;

