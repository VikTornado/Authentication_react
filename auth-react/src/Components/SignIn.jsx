import React, {useEffect} from 'react';
import {UserAuth} from "../Context/Context";
import { useNavigate } from "react-router-dom"

const SignIn = () => {
    const {googleSignIn, user} = UserAuth()
    const navigate = useNavigate()


    const handleGoogleSignIn = async () => {
        try {
            await googleSignIn()
         } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        if(user != null) {
            navigate('/account')
        }
    }, [user])

    return (
        <div>
            <h1 className={'text-center text-3xl font-bold py-4'}>Sign In</h1>
            <div className={'text-2xl text-center font-bold py-4'}>
                <button onClick={handleGoogleSignIn} className={'p-4 bg-sky-500 shadow-zinc-900 ' +
                    'rounded-md bg-violet-500 hover:bg-violet-600 ' +
                    'active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 ...'}>Push
                    me
                </button>
            </div>
        </div>
    );
};

export default SignIn;