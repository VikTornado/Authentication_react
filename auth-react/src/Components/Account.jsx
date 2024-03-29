import React from 'react';
import {UserAuth} from "../Context/Context";

const Account = () => {
    const {logOut, user} = UserAuth()
    const handleSignOut = async () => {
        try {
            await logOut()
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div className={'w-[300px] m-auto'}>
            <h1 className={'text-2xl text-center font-bold pt-12'}>Account</h1>
            <div>
                <p>Welcome, {user?.displayName}</p>
            </div>
            <button onClick={handleSignOut} className={'border py-2 px-5 mt-10'}>Log out</button>
        </div>
    );
};

export default Account;