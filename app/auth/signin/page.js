'use client'
import React, { useState, useEffect } from 'react';
import { useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import { useRouter } from 'next/navigation';

const SignIn = () => {
    const [user, setUser] = useState(null);
    const [profile, setProfile] = useState(null);
    const router = useRouter()

    const login = useGoogleLogin({
        onSuccess: (codeResponse) => setUser(codeResponse),
        onError: (error) => console.log('Login Failed:', error)
    });

    useEffect(() => {
        const storedProfile = localStorage.getItem('profileDetails');
        if (storedProfile) {
            setProfile(JSON.parse(storedProfile));
        }
    }, []);

    useEffect(() => {
        if (user) {
            axios.get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`, {
                headers: {
                    Authorization: `Bearer ${user.access_token}`,
                    Accept: 'application/json'
                }
            })
            .then((res) => {
                const profileDetails = JSON.stringify(res.data);
                localStorage.setItem('profileDetails', profileDetails);
                setProfile(res.data);
                router.push('/app/email-accounts')
            })
            .catch((err) => console.log(err));
        }
    }, [user]);



    return (
        <div className='w-screen h-screen'>
            <p className='left text-bold text-3xl p-4 w-full bg-gray-100'><span className='text-green-500'>i</span><span className='text-blue-500'>SYS</span></p>
            <div className="card card-side bg-base-100 mx-auto my-28 shadow-xl w-[600px] h-[400px]">
                <figure className='w-[200px] '><img src="https://w0.peakpx.com/wallpaper/291/484/HD-wallpaper-g-google-black-g-logo-from-google-g-symbol-google-logo-logos.jpg" alt="Movie"/></figure>
                <div className="card-body space-y-10 h-full flex flex-col items-center justify-center">
                <h2 className="card-title w-full justify-center text-2xl">Login with Google</h2>
                <div className="card-actions justify-center items-center">
                    <button className="btn btn-primary w-64 text-slate-100" onClick={login} >Login</button>
                </div>
            </div>
            </div>
        </div>
    );
}

export default SignIn;
