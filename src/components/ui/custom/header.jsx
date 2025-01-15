import { UserButton, useUser } from '@clerk/clerk-react';
import { Link } from 'react-router-dom';
import React from 'react';
import "../../../App.css"; 

function Header() {
    const { user, isSignedIn } = useUser();

    return (
        <div className="p-3 px-5 flex justify-between shadow-md">
            <img src="/logo.svg" width={100} height={100} alt="Logo" />
            
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

