"use client"

import Input from '@/components/input';
import axios from 'axios';
import { useFormik } from 'formik';
import { useRouter } from 'next/navigation';
import * as Yup from "yup";

const RegisterSchema = Yup.object().shape({
    username: Yup.string()
        .min(2, 'Too Short!')
        .max(70, 'Too Long!')
        .matches(/^[A-Za-z0-9]+$/, 'Name must only contain letters and numbers')
        .required('Required'),
    email: Yup.string()
        .email('Invalid email')
        .required('Required'),
    password: Yup.string()
        .min(6, 'Too Short!')
        .required('Required'),
});

export default function Register() {
    const router = useRouter()
    const formik = useFormik({
        initialValues: {
            username: '',
            password: '',
            email: '',
        },
        validationSchema: RegisterSchema,
        onSubmit: (values) => {
            axios.post('/api/register', values)
                .then(() => {
                    setTimeout(() => {
                        router.push('/login')
                    })
                }).catch((error: any) => {
                })
        },
    });
    return (
        <div className=''>
            <form onSubmit={formik.handleSubmit}>
                <div className='flex flex-col justify-center text-xs md:text-sm h-[450px] w-[200px] md:w-[350px] mx-auto gap-2 mb-[200px]'>

                    <div>
                        <label htmlFor="username">Username</label>

                        <Input placeholder='Enter your username' id='username' name='username' type='text' onChange={formik.handleChange} value={formik.values.username} />
                        {formik.errors.username && formik.touched.username && (
                            <div className='text-red-500 mb-2'>{formik.errors.username}</div>
                        )}
                    </div>
                    <div>
                        <label htmlFor="email">Email Address</label>
                        <Input placeholder='Enter your email' id='email' name='email' type='text' onChange={formik.handleChange} value={formik.values.email} />
                        {formik.errors.email && formik.touched.email && (
                            <div className='text-red-500 mb-2'>{formik.errors.email}</div>
                        )}
                    </div>
                    <div>
                        <label htmlFor="password">Password</label>
                        <Input placeholder='Enter your password' id='password' name='password' type='password' onChange={formik.handleChange} value={formik.values.password} />
                        {formik.errors.password && formik.touched.password && (
                            <div className='text-red-500 mb-2'>{formik.errors.password}</div>
                        )}
                    </div>

                    <button className='bg-cyan-400 w-1/2 justify-center p-2 ml-auto mr-auto mt-2 rounded-2xl hover:text-white hover:bg-black' type="submit">Signup</button>
                    <div className='mt-2'>If you have an account? <span className='text-blue-600 font-medium'> <a href="/login">Login</a> </span></div>
                </div>
            </form>
        </div>
    )
}
