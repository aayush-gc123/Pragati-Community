"use client"
import React from 'react'
import "./page.scss";
import { useSession, signIn, signOut } from 'next-auth/react';
import { useRouter } from 'next/navigation'
import { useState, useEffect } from 'react';
import { fetchUser, updateProfile } from '@/actions/useractions';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Bounce } from 'react-toastify';
import './page.scss'

const Dashboard = () => {
    const { data: session } = useSession();
    const router = useRouter();
    const [form, setform] = useState({ name: "", email: "", username: "", profilepic: "", coverpic: "", razorpayId: "", razorpaySecret: "" })

    useEffect(() => {
        if (!session) {
            router.push('/Login');
        }
        getData();
    }, [router, session])

    const getData = async () => {
        if (session) {
            let u = await fetchUser(session.user.name);
            setform(u);
        }
    }


    const handleChange = (e) => {
        setform({ ...form, [e.target.name]: e.target.value });
    }

    const handleSubmit = async (data) => {
        let a = await updateProfile(data, session.user.name, session.user.email);
        if (a.error == 1) {
            toast('Email and username updation not Allowed!', {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                transition: Bounce,
            });
        }

        toast('Details updated!', {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            transition: Bounce,
        });

        getData();
    }

    return (
        <>
            <ToastContainer
                position="bottom-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark" />
            <ToastContainer />

            <div className='dashPage'>
                <h2>Welcome to your Dashboard</h2>
                <form className="dashContainer" action={handleSubmit}>

                    <div className='inputDiv'>
                        <label htmlFor="name">Name</label>
                        <input value={form.name ? form.name : ""} onChange={handleChange} name='name' id='name' type="text" />
                    </div>

                    <div className='inputDiv'>
                        <label htmlFor="email">Email</label>
                        <input value={form.email ? form.email : ""} onChange={handleChange} name='email' id='email' type="email" />
                    </div>

                    <div className='inputDiv'>
                        <label htmlFor="username">Username</label>
                        <input value={form.username ? form.username : ""} onChange={handleChange} name='username' id='username' type="text" />
                    </div>

                    <div className='inputDiv'>
                        <label htmlFor="profilePicture">Profile Picture</label>
                        <input value={form.profilepic ? form.profilepic : ""} onChange={handleChange} name='profilepic' id='profilePicture' type="text" />
                    </div>

                    <div className='inputDiv'>
                        <label htmlFor="coverPicture">Cover Picture</label>
                        <input value={form.coverpic ? form.coverpic : ""} onChange={handleChange} name='coverpic' id='coverPicture' type="text" />
                    </div>

                    <div className='inputDiv'>
                        <label htmlFor="easewayId">easeway Id</label>
                        <input value={form.easewayId ? form.easewayId : ""} onChange={handleChange} name='easewayId' id='easewayId' type="password" />
                    </div>

                    <div className='inputDiv'>
                        <label htmlFor="easewaySecret">easeway Secret</label>
                        <input value={form.easewaySecret ? form.easewaySecret : ""} onChange={handleChange} name='easewaySecret' id='easewaySecret' type="password" />
                    </div>

                    <button type='submit'> Save </button>

                </form>

            </div>
        </>
    )
}

export default Dashboard
