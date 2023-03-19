import React from 'react';
import {NavLink} from "react-router-dom";
import {UserAuth} from "../Context/Context";

const Navbar = () => {
    const {user, logOut} = UserAuth()
    const handleSignOut = async () => {
        try {
            await logOut()
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div className={'w-full p-4 bg-amber-400 '}>
            <div className={'max-w-[1400px] m-auto flex justify-between items-center w-full p-4'}>
                <h1 className={'text-center text-2xl font-bold'}>Firebase google auth</h1>
                <NavLink to={"/"}>Home</NavLink>
                {user?.displayName ? (
                    <button className={'p-4 bg-sky-500 shadow-zinc-900 ' +
                        'rounded-md bg-violet-500 hover:bg-violet-600 ' +
                        'active:bg-violet-700 focus:outline-none focus:ring ' +
                        'focus:ring-violet-300 ...'} onClick={handleSignOut}>LogOut</button>
                ) : (<NavLink to={"/signin"}>Sign In</NavLink>
                )}
                {/*<NavLink to={"/logout"}>LogOut</NavLink>*/}
            </div>
        </div>
    );
};

export default Navbar;