"use client"

import Input from '@/components/input';
import { useFormik } from 'formik';
import * as Yup from "yup";

const LoginSchema = Yup.object().shape({
    email: Yup.string()
        .email('Invalid email')
        .required('Required'),
    password: Yup.string()
        .min(6, 'Too Short!')
        .required('Required'),
});

export default function Register() {
    const formik = useFormik({
        initialValues: {
            password: '',
            email: '',
        },
        validationSchema: LoginSchema,
        onSubmit: (values) => {
            console.log(values, "values");

        },
    });
    return (
        <div className=''>
            <form onSubmit={formik.handleSubmit}>
                <div className='flex flex-col justify-center text-xs md:text-sm h-[450px] w-[200px] md:w-[350px] mx-auto gap-2 mb-[200px]'>

                    <div>
                        <label htmlFor="email">Email Address</label>
                        <Input placeholder='Enter your email' id='email' name='email' type='text' onChange={formik.handleChange} value={formik.values.email} />
                        {formik.errors.email && formik.touched.email && (
                            <div className='text-red-500 mb-2'>{formik.errors.email}</div>
                        )}
                    </div>
                    <div><label htmlFor="password">Password</label>
                        <Input placeholder='Enter your password' id='password' name='password' type='password' onChange={formik.handleChange} value={formik.values.password} />
                        {formik.errors.password && formik.touched.password && (
                            <div className='text-red-500 mb-2'>{formik.errors.password}</div>
                        )}
                    </div>

                    <button className='bg-cyan-400 w-1/2 justify-center p-2 ml-auto mr-auto mt-2 rounded-2xl hover:text-white hover:bg-black' type="submit">Login</button>
                </div>
            </form>
        </div>
    )
}
