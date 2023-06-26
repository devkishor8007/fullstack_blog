"use client"

import Input from '@/components/input';
import { useFormik } from 'formik';

export default function Register() {
    const formik = useFormik({
        initialValues: {
            password: '',
            email: '',
        },
        onSubmit: values => {
        },
    });
    return (
        <div className=''>
            <form onSubmit={formik.handleSubmit}>
                <div className='flex flex-col justify-center text-xs md:text-sm h-[450px] w-[200px] md:w-[350px] mx-auto gap-2 mb-[200px]'>

                    <div>
                        <label htmlFor="email">Email Address</label>
                        <Input placeholder='Enter your email' id='email' name='email' type='text' onChange={formik.handleChange} value={formik.values.email} />

                    </div>
                    <div><label htmlFor="password">Password</label>
                        <Input placeholder='Enter your password' id='password' name='password' type='password' onChange={formik.handleChange} value={formik.values.password} />

                    </div>

                    <button className='bg-cyan-400 w-1/2 justify-center p-2 ml-auto mr-auto mt-2 rounded-2xl hover:text-white hover:bg-black' type="submit">Login</button>
                </div>
            </form>
        </div>
    )
}
